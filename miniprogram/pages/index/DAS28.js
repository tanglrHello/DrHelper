// pages/index/DAS28.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: 0,
    result_str: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  compute: function(e)
  {
    if (e.detail.value["painnum"] == "" )
    {
      wx.showModal({
        content: '请填写压痛关节数',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["swellnum"] == "" )
    {
      wx.showModal({
        content: '请填写肿胀关节数',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["esr"] == "") {
      wx.showModal({
        content: '请填写红细胞沉降率ESR',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["activity"] == "") {
      wx.showModal({
        content: '请填写病情活动性',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }

    var painnum = parseInt(e.detail.value["painnum"]);
    var swellnum = parseInt(e.detail.value["swellnum"]);
    var esr = parseFloat(e.detail.value["esr"]);
    var activity = parseFloat(e.detail.value["activity"]);

    if(activity < 0 || activity > 100)
    {
      wx.showModal({
        content: '活动范围为0~100',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }

    var result = 0.56 * Math.sqrt(painnum) + 0.28 * Math.sqrt(swellnum) + 0.70 * Math.log(esr) + 0.014 * activity;
    this.setData({
      result: result
    })

    var conclusion = "";
    if (result < 2.6) conclusion = "病情缓解（remission）";
    else if(result < 3.2 ) conclusion = "疾病低度活动（low activity）"
    else if(result < 5.1 ) conclusion = "疾病活动（moderate activity）";
    else conclusion = "疾病高度活动（high activity）";
    this.setData({
      result_str: conclusion
    })
  }
})