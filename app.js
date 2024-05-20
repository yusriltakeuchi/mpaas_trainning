App({
  title: "My Application",
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    my.hideShareMenu();
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  task: [
    {
      "id": 1,
      title: "Membaca buku",
      time: "08:00",
      status: "Complete",
      favorite: false,
    },
    {
      "id": 2,
      title: "Menonton film",
      time: "10:00",
      status: "Complete",
      favorite: false,
    },
    {
      "id": 3,
      title: "Makan siang",
      time: "12:00",
      status: "Complete",
      favorite: false,
    },
    {
      "id": 4,
      title: "Main Game",
      time: "13:00",
      status: "On Progress",
      favorite: false,
    },
    {
      "id": 5,
      title: "Belanja",
      time: "15:00",
      status: "On Progress",
      favorite: false,
    },
    {
      "id": 6,
      title: "Ngopi di Cafe",
      time: "17:00",
      status: "On Progress",
      favorite: false,
    },
  ]
});
