const config = require('../../config/config.js');

// client/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    infoid:'',
    imgList: [],
    icon: '',
    add: '',
    postId: '',
    name: '',
    kd: '',
    num: '',
    status: '',
    jdinfo: '',
    time: '',
    me: '',
    list: []
    // list:[
    //   {
    //     id: "聚汇",
    //     pic: "http://j.jdzxy.xyz/mov.jpg",
    //     img: "http://j.jdzxy.xyz/pic02.png"
    //   },{
    //     id: "Nice造型",
    //     pic: "http://j.jdzxy.xyz/nice.jpg",
    //     img: "http://j.jdzxy.xyz/pic03.png"
    //   },
    //   {
    //     id: "三号酒馆",
    //     pic: "http://j.jdzxy.xyz/3h.jpg",
    //     img: "http://j.jdzxy.xyz/pic04.png"
    //   }
    // ]
  },
  toAdv:function(event){
    console.log(event)
    let postId = event.currentTarget.dataset.postId
    let postImg = event.currentTarget.dataset.postImg
    wx.navigateTo({
      url: '../advDetail/advDetail?id=' + postId + '&img='+ postImg,
    })
  },
  // 广告接口获取数据
  getAdvImg(){
    let that = this;
    wx.request({
      url: `${config.api}/advertise`,
      success:function (res){
        console.log('swiper')
        console.log(res)
        that.setData({
          imgList: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (option) {
    let that = this
    wx.request({
      url: `${config.api}/advertise`,
      method: 'GET',
      success: function (res) {
        console.log('轮播图data')
        console.log(res.data);
        that.setData({
          list: res.data
        })
      }
    })
    that.setData({
      icon: option.icon,
      add: option.add,
      postId: option.postId,
      name: option.name,
      kd: option.kd,
      num: option.num,
      status: option.status,
      jdinfo: option.jdinfo,
      time: option.time
    })
    this.getAdvImg();
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.getdatanow(data.id)
    })
  },
  getdatanow(e){
    if (e) {
      this.setData({
        infoid:e
      })
      let that = this;
      var token = wx.getStorageSync('token')
      wx.request({
        url: `${config.api}/userOrders`,
        method: 'POST',
        data: {
          id: e,
        },
        header: {
          'content-type': 'application/json',
          authorization: token,
        },
        success: function (res) {
          console.log(res)
          that.setData({
            info: res.data
          })
        }
      })
    }
  },
  remider() {
      let that = this;
      var token = wx.getStorageSync('token')
      wx.request({
        url: `${config.api}/userOrderUpdate`,
        method: 'POST',
        data:{
          id: that.data.infoid,
          conditions: 1
        },
        header: {
          'content-type': 'application/json',
          authorization: token,
        },
        success: function (res) {
          // console.log(res)
          that.setData({
            info: res.data
          })
        }
      })
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '18879013921',
    })
  },
  clickAbnormal:function(){
    wx.navigateTo({
      url: '../abnormal/abnormal',
    })
  },
  backIndex: function () {
    console.log("触发")
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})