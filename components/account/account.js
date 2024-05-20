Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    clickMenu(e) {
      switch(e.currentTarget.dataset.info) {
        case "Edit Profile":
          break
        case "Setting":
          break
        case "Logout":
          my.redirectTo({url: "/pages/login/login"})
          break
      }
    }
  },
});
