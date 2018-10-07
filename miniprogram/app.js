//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      title_color: "#c4e3ff",
      subtitle_color: "#ececff",
      info_title_color: "#ffd306",
      info_bk_color: "#ecf5ff",
      result_color: "#efefef",
    }
  }
})
