
Component({
  mixins: [],
  data: {
    selectedItem: {},
    selectedIndex: 0,
    myApp: getApp(),
    favoriteTask: []
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onInit() {
    var newTask = getApp().task.filter(itemTask => itemTask.favorite === true);
    this.setData({
      favoriteTask: newTask
    })
  },
  methods: {
    reInitTask() {
      var newTask = getApp().task.filter(itemTask => itemTask.favorite === true);
      this.setData({
        favoriteTask: newTask
      })
    },
    removeFavorite(e) {
      /// Get id from data-id in html
      var id = e.currentTarget.dataset['id'];
      /// Get index based on id from global task
      var indexById = getApp().task.findIndex(taskItem => taskItem.id == id);
      /// Set to false
      getApp().task[indexById].favorite = false;
      /// Re-render UI global state
      this.reInitTask();
    },
  },
});
