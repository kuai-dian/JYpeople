const config = require('../../config/config.js');

// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    message: '',
    name: '',
    address:'',
    code:'',
    objectMultiArray: [
    ],
    multiIndex: 0,
    list: []
    // list: [
    //   {
    //     id: "华公教育",
    //     pic: "http://j.jdzxy.xyz/edu.jpg",
    //     img: "http://j.jdzxy.xyz/pic01.png"
    //   }, {
    //     id: "聚汇",
    //     pic: "http://j.jdzxy.xyz/mov.jpg",
    //     img: "http://j.jdzxy.xyz/pic02.png"
    //   }, {
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
  toAdv: function (event) {
    console.log(event)
    let postId = event.currentTarget.dataset.postId
    let postImg = event.currentTarget.dataset.postImg
    wx.navigateTo({
      url: '../advDetail/advDetail?id=' + postId + '&img=' + postImg,
    })
  },
  bindMultiPickerChange:function(e){
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //顶部 返回
  backIndex:function(options) {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  getSendcode(e) {
    this.setData({
      code: e.detail.value
    })
  },
  getMessage(e){
    this.setData({
      message: e.detail.value
    })
  },
  getSendname(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getAddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  submitOrder(e){
    let that = this
    var userinfo = wx.getStorageSync('userinfo')
    var token = wx.getStorageSync('token')
    var userid = wx.getStorageSync('userid')
    var postInc = that.data.objectMultiArray[that.data.multiIndex]._id
    // console.log(postInc)
    if (that.data.message && that.data.name && that.data.address && that.data.code) {
      wx.request({
        url: `${config.api}/pullOrders`,
        method: 'POST',
        data: {
          message: that.data.message,
          name: that.data.name,
          address: that.data.address,
          postId: that.data.code,
          user:userid,
          time:new Date(),
          postInc: postInc,
        },
        header: {
          'content-type': 'application/json',
          authorization: token, 
        },
        success: function (res) {
          console.log(res.data)
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack()
          var pages = getCurrentPages()
          console.log(pages)
          if (pages.length > 1) {
            //上一个页面实例对象            
            var prePage = pages[pages.length - 2]
            //关键在这里            
            prePage.changeData(e)
          }
        }
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请填写完整信息后再提交哦！',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
     
  },
  // 广告接口获取数据
  getAdvImg() {
    let that = this;
    wx.request({
      url: `${config.api}/advertise`,
      success: function (res) {
        that.setData({
          imgList: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    this.getAdvImg();
    var userinfo = wx.getStorageSync('userinfo')
    var token = wx.getStorageSync('token')
    var userid = wx.getStorageSync('userid')
    if (userinfo && token && userid) {
      let that = this;
      wx.request({
        url: `${config.api}/postinc`,
        method: 'GET',
        success: function (res) {
          console.log(res.data);
          that.setData({
            objectMultiArray: res.data
          })
        }
      })
      wx.request({
        url: `${config.api}/system`,
        method: 'GET',
        success: function (res) {
          var tips = res.data[0].price
          wx.showModal({
            title: '提示',
            content: tips,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您未登录哦！',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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