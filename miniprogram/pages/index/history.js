// miniprogram/pages/index/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_data: []
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
    var that = this;
    wx.getStorage({
      key: 'history',
      success: function (res) {
        that.setData({ history_data: res.data })
      },
    })
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

  /**
   * 删除最近常用中的某一项
   */
  delete_history: function (e){
    console.log(e);
    var url = e.currentTarget.id;
    var old_history_data = wx.getStorageSync("history");
    var new_history = [];
    for (var i = 0; i < old_history_data.length; i++ )
    {
      if (url != old_history_data[i].url) new_history.push(old_history_data[i]);
    }

    wx.setStorage({
      key: 'history',
      data: new_history,
    })
    
    this.setData({
      history_data: new_history
    })
  }
})