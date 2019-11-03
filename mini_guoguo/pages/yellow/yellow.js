// pages/yellow/yellow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Express: [],
    list: [
      {
        id: '001',
        icon: 'http://j.jdzxy.xyz/yd.jpg',
        postId: '486347953547615864',
        status: '已接单',
        time: '2019-10-25',
        add: '西一A303',
        name: '王明',
        kd: '韵达',
        num: '95546',
        jdinfo: '刘小杰-经管系',
        kdadd:'第二食堂对面'
      },
      {
        id: '002',
        icon: 'http://j.jdzxy.xyz/sf.jpg',
        postId: '3549685642357846',
        status: '未接单',
        time: '2019-10-25',
        add: '西三A113',
        name: '吴小青',
        kd: '顺丰',
        num: '95338',
        jdinfo: '李帅-信工系',
        kdadd: '第一食堂对面'
      },
      {
        id: '003',
        icon: 'http://j.jdzxy.xyz/zy.jpg',
        postId: '45973158643486157',
        status: '已接单',
        time: '2019-10-26',
        add: '东二A329',
        name: '陈俊星',
        kd: '中通',
        num: '95311',
        jdinfo: '李明-机电系',
        kdadd: '菜鸟驿站'
      },
      {
        id: '004',
        icon: 'http://j.jdzxy.xyz/yt.jpg',
        postId: '486349753168497621',
        status: '已接单',
        time: '2019-10-26',
        add: '西一B512',
        name: '刘阳',
        kd: '圆通',
        num: '95554',
        jdinfo: '张浩-政法系',
        kdadd: '妈妈驿站'
      },
      {
        id: '005',
        icon: 'http://j.jdzxy.xyz/yz.jpg',
        postId: '486347346228641553',
        status: '已接单',
        time: '2019-10-28',
        add: '西三A223',
        name: '胡小伟',
        kd: '邮政',
        num: '11183',
        jdinfo: '王梓鑫-生化系',
        kdadd: '第一食堂对面'
      },
      {
        id: '006',
        icon: 'http://j.jdzxy.xyz/tt.jpg',
        postId: '486164255349513568',
        status: '未接单',
        time: '2019-10-27',
        add: '东二B322',
        name: '师洁',
        kd: '天天',
        num: '400-188-8888',
        jdinfo: '张晓娟-教育系',
        kdadd:'未知'
      },
      {
        id: '007',
        icon: 'http://j.jdzxy.xyz/st.jpg',
        postId: '486345675535675512',
        status: '已接单',
        time: '2019-10-28',
        add: '东一A409',
        name: '黄文',
        kd: '申通',
        num: '95543',
        jdinfo: '高青-艺术系'
      },
      {
        id: '008',
        icon: 'http://j.jdzxy.xyz/bs.jpg',
        postId: '486346512553164321',
        status: '已接单',
        time: '2019-10-29',
        add: '西一B251',
        name: '喻韶宁',
        kd: '百世',
        num: '95320',
        jdinfo: '刘伟文-信工系',
        kdadd: '菜鸟驿站'
      },
      {
        id: '009',
        icon: 'http://j.jdzxy.xyz/kj.jpg',
        postId: '486164352195646853',
        status: '未接单',
        time: '2019-10-29',
        add: '西三A303',
        name: '林竣健',
        kd: '快捷',
        num: '400-8333-3666',
        jdinfo: '李川荣-教育系',
        kdadd: '未知'
      },
      {
        id: '010',
        icon: 'http://j.jdzxy.xyz/qf.jpg',
        postId: '486347953547615864',
        status: '已接单',
        time: '2019-10-30',
        add: '东二A523',
        name: '吴郝贤',
        kd: '全峰',
        num: '400-100-0001',
        jdinfo: '钟强-经管系',
        kdadd:'未知'
      }

    ]
  },
  getExpress() {
    let that = this;
    wx.request({
      url: 'http://119.29.163.198:30002/JYguoguo/api/postinc',
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          Express: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getExpress();
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
    this.getTabBar().setData({
      // 跳转驿站页面
      selected: 1
    });

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