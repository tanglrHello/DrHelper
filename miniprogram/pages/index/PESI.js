// miniprogram/pages/index/PESI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "肺栓塞严重指数(PESI)及其简化版本(sPESI)的评分标准",
    url: "PESI",
    scroll_height: 200,
    pesi: 0,
    spesi: 0,
    warning: "",
    pesi_result: "",
    spesi_result: "",
    title_color: getApp().globalData.title_color,
    subtitle_color: getApp().globalData.subtitle_color,
    info_title_color: getApp().globalData.info_title_color,
    info_bk_color: getApp().globalData.info_bk_color,
    result_color: getApp().globalData.result_color,
    age_color: "#000000",
    checkboxItems: [
      { id: 0, desc: "男性", score: 10, score2: 0 },
      { id: 1, desc: "肿瘤", score: 30, score2: 1 },
      { id: 2, desc: "慢性心力衰竭", score: 10, score2: 1 },
      { id: 3, desc: "慢性肺部疾病", score: 10, score2: 1 },
      { id: 4, desc: "脉搏≥110次/min", score: 20, score2: 1 },
      { id: 5, desc: "收缩压<100mmHg", score: 30, score2: 1 },
      { id: 6, desc: "呼吸频率>30次/min", score: 20, score2: 0 },
      { id: 7, desc: "体温<36℃", score: 20, score2: 0 },
      { id: 8, desc: "精神状态改变", score: 60, score2: 0 },
      { id: 9, desc: "动脉血氧饱和度<90%", score: 20, score2: 1 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 250;

    this.setData({
      scroll_height: boxHeight
    })

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

  compute: function () {
    var checkboxItems = this.data.checkboxItems;
    var pesi = 0;
    if (this.data.age == undefined || this.data.age == "") {
      this.setData({
        age_color: "#ff0000",
        warning: "[warning]缺少年龄"
      })
    }
    else {
      this.setData({
        age_color: "#000000",
        warning: ""
      })
      pesi = parseInt(this.data.age);
    }

    var spesi = 0;
    if (parseInt(this.data.age) > 80) spesi = 1;

    for (var i = 0; i < checkboxItems.length; i++) {
      if(checkboxItems[i].checked)
      {
        pesi += checkboxItems[i].score;
        spesi += checkboxItems[i].score2;
      }
    }

    //处理慢性心力衰竭、慢性肺部疾病同时存在时，简化版本评分的结果
    if (checkboxItems[2].checked && checkboxItems[3].checked) {
      spesi -= 1;
    }

    this.setData({
      pesi: pesi,
      spesi: spesi
    })

    var conclusion = "";
    if (pesi <= 65) conclusion = "1级，低危";
    else if (pesi <= 85) conclusion = "2级，低危";
    else if (pesi <= 105) conclusion = "3级，中危";
    else if (pesi <= 125) conclusion = "4级，中危";
    else conclusion = "5级，高危";

    var spesi_conclusion = "";
    if (spesi == 0) spesi_conclusion = "低危";
    else spesi_conclusion = "中危";

    this.setData({
      pesi_result: conclusion,
      spesi_result: spesi_conclusion
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      age: e.detail.value
    })
    this.compute();
  },

  showinfo: function (e) {
    wx.showModal({
      content: '简化版本中存在慢性心力衰竭和(或)慢性肺部疾病评为1分',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },

  checkboxChange: function(e){
    var checkboxItems = this.data.checkboxItems;
    for (var i = 0; i < checkboxItems.length; i++) checkboxItems[i].checked = false;
    for (var i = 0; i < e.detail.value.length; i++) {
      var id = parseInt(e.detail.value[i]);
      checkboxItems[id].checked = true;
    }
    this.compute();
    this.setData({
      checkboxItems: checkboxItems
    })
  }
})