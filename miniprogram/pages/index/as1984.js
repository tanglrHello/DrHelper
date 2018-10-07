Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    result_str: "",
    title_color: getApp().globalData.title_color,
    subtitle_color: getApp().globalData.subtitle_color,
    info_title_color: getApp().globalData.info_title_color,
    info_bk_color: getApp().globalData.info_bk_color,
    result_color: getApp().globalData.result_color,

    linchuang_num: 0,
    left_score: 0,
    right_score: 0,

    linchuang: [
      { id: 0, desc: "腰痛、晨僵3个月以上，活动改善，休息无改善" },
      { id: 1, desc: "腰椎额状面和矢状面活动受限" },
      { id: 2, desc: "胸廓活动度低于相应年龄、性别的正常人" }
    ],
    diqia_left: [
      { id: 3, desc: "0级（正常）" },
      { id: 4, desc: "1级（可疑）" },
      { id: 5, desc: "2级（轻度异常，可见局限性侵蚀、硬化，但关节间隙正常）" },
      { id: 6, desc: "3级（明显异常，存在侵蚀、硬化、关节间隙增宽或狭窄、部分强直等1项或1项以上改变）" },
      { id: 7, desc: "4级（严重异常，表现为完全性关节强直）" }
    ],
    diqia_right: [
      { id: 8, desc: "0级（正常）" },
      { id: 9, desc: "1级（可疑）" },
      { id: 10, desc: "2级（轻度异常，可见局限性侵蚀、硬化，但关节间隙正常）" },
      { id: 11, desc: "3级（明显异常，存在侵蚀、硬化、关节间隙增宽或狭窄、部分强直等1项或1项以上改变）" },
      { id: 12, desc: "4级（严重异常，表现为完全性关节强直）" }
    ],
    title: "强直性脊柱炎诊断标准（1984年修订的纽约标准）",
    url: "as1984"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 200;

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
    var linchuang_num = this.data.linchuang_num;
    var left_score = this.data.left_score;
    var right_score = this.data.right_score;
    var linchuang = this.data.linchuang;
    var conclusion = "";

    var radio_flag = false;
    if(left_score >= 2 && right_score >= 2) radio_flag = true;
    else if(left_score >=3 || right_score >= 3) radio_flag = true;

    if(radio_flag && linchuang_num >= 1){
      conclusion = "肯定AS";
    }
    else if( linchuang_num == 3){
      conclusion = "可能AS";
    }
    else if( radio_flag && linchuang_num == 0 ){
      conclusion = "可能AS";
    }
    else{
      conclusion = "无法诊断";
    }

    this.setData({
      result_str: conclusion
    })

  },

  radioChange1: function (e) {
    var radioItems = this.data.diqia_left;
    var id = parseInt(e.detail.value);
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = false;
    }
    radioItems[id - 3].checked = true;

    this.setData({
      diqia_left: radioItems,
      left_score: id - 3
    });
    this.compute();
  },

  radioChange2: function (e) {
    var radioItems = this.data.diqia_right;
    var id = parseInt(e.detail.value);
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = false;
    }
    radioItems[id - 8].checked = true;

    this.setData({
      diqia_right: radioItems,
      right_score: id - 8
    });
    this.compute();
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var linchuang_num = 0;
    var conclusion = "";

    var linchuang = this.data.linchuang;

    for (var i = 0; i < linchuang.length; i++) {
      linchuang[i].checked = false;
    }

    for (var i = 0; i < e.detail.value.length; i++) {
      var id = parseInt(e.detail.value[i]);
      linchuang_num += 1;
      linchuang[id].checked = true;
    }

    this.setData({
      linchuang: linchuang,
      linchuang_num: linchuang_num,
    })
    this.compute();
  }
})