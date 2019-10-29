// client/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OrderNum: '',
    Express: [],
    SysInfo: []
    
  },
  toSubmit:function(options){
    wx.navigateTo({
      url: '../submit/submit',
    })
  },
  getSum() {
    let that = this;
    wx.request({
      url: "http://119.29.163.198:30002/JYguoguo/api/OrderCount",
      success: function (res) {
        that.setData({
          OrderNum: res.data
        })
      }
    })
  },
  getExpress() {
    let that = this;
    wx.request({
      url: 'http://119.29.163.198:30002/JYguoguo/api/postinc',
      method: 'GET',
      success: function (res) {
        that.setData({
          Express: res.data
        })
      }
    })
  },
  getSysInfo(){
    let that = this;
    wx.request({
      url: 'http://119.29.163.198:30002/JYguoguo/api/system',
      success(res){
        that.setData({
          SysInfo: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSum();
    this.getExpress();
    this.getSysInfo();
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