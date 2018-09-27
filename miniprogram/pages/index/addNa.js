// pages/index/addNa.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: "补钠计算器",
    radioItems: [
      { id: 1, name: '男', value: 'man', checked: true },
      { id: 2, name: '女', value: 'woman' }
    ]
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
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  compute: function (e) {
    console.log(e.detail.value);
    var blood_na = parseInt(e.detail.value["na"]);
    var weight = parseInt(e.detail.value["weight"]);
    var sex = e.detail.value["sex"];

    var na = 0;  //应补钠总量（mmol）
    var nacl = 0;  //应补氯化钠总量（g）
    var slys = 0;  //应补生理盐水（ml）
    var nacl_3 = 0;  //应补3%氯化钠
    var nacl_5 = 0;  //应补5%氯化钠
    if(sex == "man")
    {
      na = (142 - blood_na)*weight*0.6;
      nacl = (142-blood_na)*weight*0.035;
      slys = (142-blood_na)*weight*3.888;
      nacl_3 = (142-blood_na)*weight*1.1666;
      nacl_5 = (142-blood_na)*weight*0.7;
    }
    else
    {
      na = (142 - blood_na) * weight * 0.5;
      nacl = (142 - blood_na) * weight * 0.03;
      slys = (142 - blood_na) * weight * 3.311;
      nacl_3 = (142 - blood_na) * weight * 3.311;
      nacl_5 = (142 - blood_na) * weight * 0.596;
    }
    this.setData({
      na_val: na,
      nacl_val: nacl,
      slys_val: slys,
      nacl_3_val: nacl_3,
      nacl_5_val: nacl_5
    })
  }

})