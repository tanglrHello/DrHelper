// miniprogram/pages/index/RA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      scroll_height: 200,
      guanjieshoulei: -1,
      xueqingxue: -1,
      jixingqi: -1,
      duration: -1,
      guanjie_color: "#000000",
      xueqingxue_color: "#000000",
      jixingqi_color: "#000000",
      duration_color: "#000000",
      array1: [
        { desc: "1个中到大关节", score: 0}, 
        { desc: "2~10个中大关节", score: 1}, 
        { desc: "1~3个小关节", score:2}, 
        { desc: "4~10个小关节", score: 3},
        { desc: "超过10个小关节", score: 5}
      ],
      array2: [
        { desc: "RF和抗CCP抗体均阴性", score: 0},
        { desc: "RF或抗CCP抗体低滴度阳性", score: 2},
        { desc: "RF或抗CCP抗体高滴度阳性", score: 3}
      ],
      array3: [
        { desc: "CRP和ESR均正常", score: 0}, 
        { desc: "CRP或ESR异常", score: 1}
      ],
      array4: [
        { desc: "<6周", score: 0},
        { desc: "≥6周", score: 1}
      ],
      result: 0,
      result_str: "",
      title: "类风湿性关节炎的诊断(RA)",
      url: "RA",
      title_color: getApp().globalData.title_color,
      subtitle_color: getApp().globalData.subtitle_color,
      info_title_color: getApp().globalData.info_title_color,
      info_bk_color: getApp().globalData.info_bk_color,
      result_color: getApp().globalData.result_color
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

  radioChange1: function (e) {
    var radioItems = this.data.array1;
    var guanjieshoulei = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value){
        radioItems[i].checked = true;
        guanjieshoulei = radioItems[i].score;
      }
      else{
        radioItems[i].checked = false;
      } 
    }

    this.setData({
      array1: radioItems,
      guanjieshoulei: guanjieshoulei
    });
    this.compute();
  },
  radioChange2: function (e) {
    var radioItems = this.data.array2;
    var xueqingxue = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value){
        radioItems[i].checked = true;
        xueqingxue = radioItems[i].score;
      }
      else{
        radioItems[i].checked = false;
      }      
    }
    this.setData({
      array2: radioItems,
      xueqingxue: xueqingxue
    });
    this.compute();
  },

  radioChange3: function (e) {
    var radioItems = this.data.array3;
    var jixingqi = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value){
        radioItems[i].checked = true;
        jixingqi = radioItems[i].score;
      }
      else{
        radioItems[i].checked = false;
      }
    }

    this.setData({
      array3: radioItems,
      jixingqi: jixingqi
    });
    this.compute();
  },
  radioChange4: function (e) {
    var radioItems = this.data.array4;
    var duration = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value){
        radioItems[i].checked = true;
        duration = radioItems[i].score;
      }
      else{
        radioItems[i].checked = false;
      }
    }

    this.setData({
      array4: radioItems,
      duration: duration
    });
    this.compute();
  },
  compute: function () {
    if (this.data.guanjieshoulei == -1) this.setData({ guanjie_color: "#ff0000" });
    else this.setData({ guanjie_color: "#000000" });
    if (this.data.xueqingxue == -1) this.setData({ xueqingxue_color: "#ff0000" });
    else this.setData({ xueqingxue_color: "#000000" });
    if (this.data.jixingqi == -1) this.setData({ jixingqi_color: "#ff0000" });
    else this.setData({ jixingqi_color: "#000000" });
    if (this.data.duration == -1) this.setData({ duration_color: "#ff0000" });
    else this.setData({ duration_color: "#000000" });

    var guanjieshoulei = this.data.guanjieshoulei;
    var xueqingxue = this.data.xueqingxue;
    var jixingqi = this.data.jixingqi;
    var duration = this.data.duration;

    var sum = 0;
    if(guanjieshoulei != -1) sum += guanjieshoulei;
    if(xueqingxue != -1) sum += xueqingxue;
    if(jixingqi != -1) sum += jixingqi;
    if(duration != -1) sum += duration;
    this.setData({
      result: sum
    })

    var conclusion = "";
    if (sum >= 6) conclusion = "可肯定RA诊断";
    else conclusion = "不可肯定RA诊断";

    this.setData({
      result_str: conclusion
    })
  }
})