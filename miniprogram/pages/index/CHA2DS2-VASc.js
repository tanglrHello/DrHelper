// pages/index/CHA2DS2-VASc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "房颤患者卒中风险评估(CHA2DS2-VASc)",
    url: "CHA2DS2-VASc",
    scroll_height: 200,
    result: 0,
    result_str: "",
    checkboxItems: [
      { id: 0, desc: "充血性心力衰竭/左心功能不全", score: 1, value: "A" },
      { id: 1, desc: "高血压", score: 1, value: "B" },
      { id: 2, desc: "年龄65-74岁", score: 1, value: "C" },
      { id: 3, desc: "年龄不小于75岁", score: 2, value: "D" },
      { id: 4, desc: "糖尿病", score: 1, value: "E" },
      { id: 5, desc: "中风/TIA/血栓史", score: 2, value: "F" },
      { id: 6, desc: "性别为女性", score: 1, value: "G" }
    ],

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

  checkboxChange: function (e) {
    var checkboxItems = this.data.checkboxItems;
    var sum = 0;
    for (var i = 0; i < checkboxItems.length; i++) checkboxItems[i].checked = false;
    for (var i = 0; i < e.detail.value.length; i++) {
      var value = e.detail.value[i];
      if (value == "A") {
        sum += 1;
        checkboxItems[0].checked = true;
      }
      else if (value == "B") {
        sum += 1;
        checkboxItems[1].checked = true;
      }
      else if (value == "C") {
        sum += 1;
        checkboxItems[2].checked = true;
      }
      else if (value == "D") {
        sum += 2;
        checkboxItems[3].checked = true;
      }
      else if (value == "E") {
        sum += 1;
        checkboxItems[4].checked = true;
      }
      else if (value == "F") {
        sum += 2;
        checkboxItems[5].checked = true;
      }
      else if (value == "G") {
        sum += 1;
        checkboxItems[6].checked = true;
      }
    }

    //检查年龄的冲突
    if (checkboxItems[2].checked == true && checkboxItems[3].checked == true) {
      wx.showModal({
        content: '年龄只能选择一项',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }

    this.setData({
      checkboxItems: checkboxItems
    })
    this.setData({
      result: sum
    })

    if (sum == 0) {
      this.setData({
        result_str: "不做抗凝或者抗血小板治疗"
      })
    }
    else if (sum == 1) {
      this.setData({
        result_str: "可以使用华法林抗凝，也可以使用阿司匹林抗血小板治疗"
      })
    }
    else {
      this.setData({
        result_str: "推荐使用华法林或者新型口服抗凝药康复治疗"
      })
    }
  }
})