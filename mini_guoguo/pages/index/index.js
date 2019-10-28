//index.js
//获取应用实例
const app = getApp()

// Page({
//   // 页面的初始数据
//   data: {
//     amount: "911",
//     receive: "1",
//     account: "18"
//   },
//   // 搜索页面跳转
//   sousuoClick:function(){
//     wx.navigateTo({
//       url: '../input-sousuo/input-sousuo'
//     })
//   }
// })

Component({
  data: {
    amount: "911",
    receive: "1",
    account: "18"
  },
  methods: {
    handleClick: function () {
      wx.navigateTo({
        url: '../input-sousuo/input-sousuo'
      })
    }
  },
  //页面将tabBar中的selected记录值更改，达到tabBar页面跳转图标更换
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        // 跳转首页
        selected: 0
      });
    }
  }
})

