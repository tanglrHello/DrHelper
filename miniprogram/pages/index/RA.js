// miniprogram/pages/index/RA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      scroll_height: 200,
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
      title: "类风湿性关节炎的诊断",
      url: "RA"
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
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].desc == e.detail.value;
    }

    this.setData({
      array1: radioItems
    });
  },
  radioChange2: function (e) {
    var radioItems = this.data.array2;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].desc == e.detail.value;
    }

    this.setData({
      array2: radioItems
    });
  },
  radioChange3: function (e) {
    var radioItems = this.data.array3;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].desc == e.detail.value;
    }

    this.setData({
      array3: radioItems
    });
  },
  radioChange4: function (e) {
    var radioItems = this.data.array4;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].desc == e.detail.value;
    }

    this.setData({
      array4: radioItems
    });
  },
  compute: function (e) {
    if (e.detail.value["guanjieshoulei"] == "") {
      wx.showModal({
        content: '请选择关节受累情况',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["xueqingxue"] == "") {
      wx.showModal({
        content: '请选择血清学',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["jixingqi"] == "") {
      wx.showModal({
        content: '请选择急性期反应物',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }
    if (e.detail.value["duration"] == "") {
      wx.showModal({
        content: '请选择症状持续时间',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      return;
    }

    var guanjieshoulei = e.detail.value["guanjieshoulei"];
    var xueqingxue = e.detail.value["xueqingxue"];
    var jixingqi = e.detail.value["jixingqi"];
    var duration = e.detail.value["duration"];

    var sum = 0;
    for(var i = 0; i < this.data.array1.length; i++)
    {
      console.log(this.data.array1[i].desc == guanjieshoulei);
      if(this.data.array1[i].desc == guanjieshoulei) 
      {
        sum += this.data.array1[i].score;
        console.log(sum);
      }
    }
    for (var i = 0; i < this.data.array2.length; i++) {
      if (this.data.array2[i].desc == xueqingxue) sum += this.data.array2[i].score;
    }
    for (var i = 0; i < this.data.array3.length; i++) {
      if (this.data.array3[i].desc == jixingqi) sum += this.data.array3[i].score;
    }
    for (var i = 0; i < this.data.array4.length; i++) {
      if (this.data.array4[i].desc == duration) sum += this.data.array4[i].score;
    }

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