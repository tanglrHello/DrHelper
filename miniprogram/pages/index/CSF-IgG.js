// miniprogram/pages/index/CSF-IgG.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "CSF IgG 指数",
    url: "CSF-IgG"
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

  compute: function (e) {
    if (e.detail.value["csf-IgG"] == "") {
      wx.showModal({
        content: '请填写脑脊液免疫球蛋白G',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["csf-alb"] == "") {
      wx.showModal({
        content: '请填写脑脊液白蛋白',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["xq-IgG"] == "") {
      wx.showModal({
        content: '请填写血清免疫球蛋白G',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["xq-alb"] == "") {
      wx.showModal({
        content: '请填写血清白蛋白',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }

    var csf_IgG = parseInt(e.detail.value["csf-IgG"]);
    var csf_alb = parseInt(e.detail.value["csf-alb"]);
    var xq_IgG = parseFloat(e.detail.value["xq-IgG"]);
    var xq_alb = parseFloat(e.detail.value["xq-alb"]);

    var result = (csf_IgG * xq_alb * 1000) / (csf_alb * xq_IgG); 
    this.setData({
      result: result
    })

  }
})