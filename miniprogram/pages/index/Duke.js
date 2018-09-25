// miniprogram/pages/index/Duke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["无心绞痛", "非限制性心绞痛", "由于心绞痛导致试验停止"],
    index: 0,
    desc: "请选择",
    result: 0, 
    result_str: "",
    title: "Duke平板运动评分",
    url: "Duke"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tmp = wx.getStorageSync('history');
    var hit = false;
    var new_history = [{ name: this.data.title, url: this.data.url }];
    for (var i = 0; i < tmp.length; i++) {
      if (tmp[i].url != this.data.url) {
        new_history.push(tmp[i]);
      }
    }

    wx.setStorage({
      key: 'history',
      data: new_history,
    });
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

  },

  bindPickerChange: function (e) {
    var array = this.data.array;
    this.setData({
      desc: array[e.detail.value]
    })
  },

  compute: function (e) {
    if (e.detail.value["time"] == "") {
      wx.showModal({
        content: '请填写运动时间',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["st"] == "") {
      wx.showModal({
        content: '请填写ST段波形偏移',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["pain_score"] == "") {
      wx.showModal({
        content: '请选择平板运动心绞痛指数',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    
    var time = parseInt(e.detail.value["time"]);
    var st = parseFloat(e.detail.value["st"]);
    var pain_score = parseInt(e.detail.value["pain_score"]);

    var result = time - 5 * st - 4 * pain_score;
    this.setData({
      result: result
    })

    var conclusion = "";
    if(result <= -11) conclusion = "高危，1年病死率5.25%";
    else if(result <= 4) conclusion = "中危，1年病死率1.25%";
    else conclusion = "低危，一年病死率0.25%"

    this.setData({
      result_str: conclusion
    })

  }
})