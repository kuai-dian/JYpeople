// client/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    list:[
      {
        id: "001",
        pic: "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/84298f8c72118708a65f4ff092c75696.jpg_r_640x290x70_d110ba9a.jpg"
      },{
        id: "002",
        pic: "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/98f78f42ea70a06985f7a565f2aeb035.jpg_r_640x290x70_d1b02ba3.jpg"
      },{
        id: "003",
        pic: "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/b8a820334e2cea2eed1540850a44bc3b.jpg_r_640x290x70_da605bda.jpg"
      }
    ]
  },

  // 广告接口获取数据
  getAdvImg(){
    let that = this;
    wx.request({
      url: 'http://119.29.163.198:30002/JYguoguo/api/advertise',
      success:function (res){
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
    this.getAdvImg();
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