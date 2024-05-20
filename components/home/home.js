Component({
  mixins: [],
  data: {
    x: 1,
    selectedItem: {},
    showSheet: false,
    selectedIndex: 0,
    myApp: getApp(),
    actionSheet: [
      {
          text: 'Done',
          key: 'done',
      },
      {
        text: 'Favorite',
        key: 'favorite',
      },
      {
          text: 'Remove',
          key: 'remove',
          danger: true
      },
    ],
    actionSheetDone: [
      {
        text: 'Favorite',
        key: 'favorite',
      },
      {
          text: 'Remove',
          key: 'remove',
          danger: true
      },
    ],
    
  },
  props: {
    y: 1,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap(e) {
      var item = e.currentTarget.dataset['item']
      console.log(item)
      console.log(this.data.selectedItem)
      this.setData({ 
        selectedItem: item,
        selectedIndex: e.currentTarget.dataset['index'],
        showSheet: !this.data.showSheet,
      });
    },
    onClickSheet(item, index, e) {
      this.setData({showSheet: false})
      if (item.key === 'remove') {
        my.confirm({
          title: "Anda yakin ingin menghapus?",
          content: 'Data akan hilang selamanya',
          confirmButtonText: "Ya",
          cancelButtonText: "Tidak",
          success: (result) => {
            if (result['confirm'] == true) {
              /// Update global variable
              getApp().task.splice(this.data.selectedIndex, 1);
              this.setData({
                selectedIndex: 0,
                selectedItem: {},
                myApp: getApp() /// Update Global State UI
              })
            }
          }
        });
        return; 
      } else if (item.key == "done") {
        getApp().task[this.data.selectedIndex].status = "Complete";
        this.setData({
          selectedIndex: 0,
          myApp: getApp() /// Update Global State UI
        })
      } else if (item.key == "favorite") {
        getApp().task[this.data.selectedIndex].favorite = true;
        this.setData({
          selectedIndex: 0,
          myApp: getApp() /// Update Global State UI
        })
      }
    },
    onCloseSheet(e) {
      this.setData({showSheet: false, selectedItem: {}});
    },
  },
});
