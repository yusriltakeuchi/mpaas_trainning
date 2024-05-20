import { Form } from 'antd-mini/es/Form/form';
import dayjs from 'dayjs';

Page({
  data: {
    isLoading: false,
    time: ""
  },
  onLoad() {
    my.setNavigationBar({
      title: "Create Todo",
      backgroundColor:  "#3578F6"
    })
  },
  handleOk(date) {
    const dateStr = dayjs(date).format('HH:mm');
    this.setData({
      time: dateStr
    })
  },
  handleFormatLabel(type, value) {
    if (type == "hour" || type == "minute") {
      return String(value);
    }
    return "";
  },
  createTodoSubmit: function(e) {
    var activity = e.detail.value['activity']
    console.log("Activity: ", activity, " | Waktu: ", this.data.time);
    getApp().task.push({
      "id": getApp().task[getApp().task.length - 1].id + 1, /// Must get latest ID + 1
      title: activity,
      time: this.data.time,
      status: "On Progress",
      favorite: false,
    },)

    my.showToast({
      content: "Successfully create todo",
      type: "success",
      duration: 1000,
    })
    my.redirectTo({url: "/pages/home/home"})
  }
});
