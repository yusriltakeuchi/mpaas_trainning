Page({
  data: {
    favoriteCount: 0,
    tabs: [
      {
          icon: 'AppstoreOutline',
          activeIcon: 'AppstoreOutline',
          text: 'Home',
      },
      {
          icon: 'HeartOutline',
          activeIcon: 'HeartOutline',
          text: 'Favorite',
          // badge: { type: 'number', text: 9999 },
      },
      {
          icon: 'UserCircleOutline',
          activeIcon: 'UserCircleOutline',
          text: 'Account',
      },
    ],
    current: 0,
  },
  onLoad() {
    my.setNavigationBar({
      title: "Home",
      backgroundColor:  "#3578F6"
    })
    /// Hide back button to login
    my.hideBackHome()
  },
  handleChange(index) {
    this.setData({ current: index });
  },
  onClickAdd() {
    my.navigateTo({url: "/pages/create_todo/create_todo"})
  }
});
