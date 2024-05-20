
Page({
  data: {
    remember: false,
    isLoading: false,
    myApp: getApp()
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  toggleRemember() {
    this.setData({remember: !this.data.remember})
  },
  formLoginSubmit: function(e) {
    var remember = this.data.remember;
    var email = e.detail.value['email']
    var password = e.detail.value['password']
    console.log("Email: ", email, " | Password: ", password, " | Remember: " , remember);

    this.setData({isLoading: true});
    setTimeout(() => {
      
      my.showToast({
        content: "Successfully login",
        type: "success",
        duration: 1000,
      })
      this.setData({isLoading: false});
      my.redirectTo({url: "/pages/home/home"})
    }, 100);
  }
});
