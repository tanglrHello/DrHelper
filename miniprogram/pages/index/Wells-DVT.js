// miniprogram/pages/index/Wells-DVT.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    result: 0,
    result_str: "",
    checkboxItems: [
      { id: 0, desc: "进展期癌症（6个月内治疗或姑息治疗）", score: 1, value: 0 },
      { id: 1, desc: "下肢瘫痪、麻痹或动不了", score: 1, value: 1 },
      { id: 2, desc: "由于外科手术导致超过3天卧床不起（4周内）", score: 1, value: 2 },
      { id: 3, desc: "沿深静脉分布有局部压痛", score: 1, value: 3 },
      { id: 4, desc: "整条腿肿胀", score: 1, value: 4 },
      { id: 5, desc: "大于 3 cm 的单侧小腿肿胀（在胫骨粗隆以下）", score: 1, value: 5 },
      { id: 6, desc: "单侧凹陷性水肿", score: 1, value: 6 },
      { id: 7, desc: "浅表静脉侧支循环", score: 1, value: 7},
      { id: 8, desc: "其他诊断（baker囊肿破裂，浅表静脉炎，蜂窝织炎，腓肠肌损伤）", score: -2, value: 8 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 100;

    this.setData({
      scroll_height: boxHeight
    })
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

  checkboxChange: function (e) {
    var checkboxItems = this.data.checkboxItems;
    var sum = 0;
    for (var i = 0; i < checkboxItems.length; i++) checkboxItems[i].checked = false;
    for (var i = 0; i < e.detail.value.length; i++) {
      var index = e.detail.value[i];
      checkboxItems[index].checked = true;
      if (index >=0 && index <= 7) sum += 1;
      else if( index == 8 ) sum -= 2;
    }

    this.setData({
      checkboxItems: checkboxItems
    })
    this.setData({
      result: sum
    })

    if (sum == 1 || sum == 2) {
      this.setData({
        result_str: "风险中 (17%)"
      })
    }
    else if (sum >= 3) {
      this.setData({
        result_str: "风险高 (75%) "
      })
    }
  }
})