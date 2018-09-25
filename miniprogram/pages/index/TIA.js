// pages/index/TIA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    result: 0,
    result_str: "",
    checkboxItems: [
      { id: 0, desc: "A 年龄不小于60岁", score: 1, value: "A"},
      { id: 1, desc: "B 血压不低于140/90mmHg", score: 1, value: "B"},
      { id: 2, desc: "C-1临床表现：单侧肢体无力", score: 2, value: "C-1"},
      { id: 3, desc: "C-2临床表现：有言语障碍而无肢体无力", score: 1, value: "C-2"},
      { id: 4, desc: "D-1症状持续时间：不短于60分钟", score: 2, value: "D-1"},
      { id: 5, desc: "D-2症状持续时间：10-59分钟", score: 1, value: "D-2"},
      { id: 6, desc: "D 糖尿病：口服降糖药或应用胰岛素治疗", score:1, value: "D"}
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

  checkboxChange: function(e)
  {
    console.log(e.detail);
    var checkboxItems = this.data.checkboxItems;
    var sum = 0;
    for(var i=0; i < checkboxItems.length; i++) checkboxItems[i].checked = false;
    for(var i=0; i < e.detail.value.length; i++)
    {
      var value = e.detail.value[i];
      if(value=="A")
      {
        sum += 1;
        checkboxItems[0].checked = true;
      }
      else if(value=="B")
      {
        sum += 1;
        checkboxItems[1].checked = true;
      }
      else if(value=="C-1")
      {
        sum += 2;
        checkboxItems[2].checked = true;
      }
      else if(value=="C-2")
      {
        sum += 1;
        checkboxItems[3].checked = true;
      }
      else if(value=="D-1")
      {
        sum += 2;
        checkboxItems[4].checked = true;
      }
      else if(value=="D-2")
      {
        sum += 1;
        checkboxItems[5].checked = true;
      }
      else if(value=="D")
      {
        sum += 1;
        checkboxItems[6].checked = true;
      }
    }

    //检查C-1与C-2的冲突、D-1与D-2的冲突
    if(checkboxItems[2].checked == true && checkboxItems[3].checked == true )
    {
      wx.showModal({
        content: 'C-1和C-2不可同时选择',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }

    if (checkboxItems[4].checked == true && checkboxItems[5].checked == true) {
      wx.showModal({
        content: 'D-1和D-2不可同时选择',
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

    if(sum <= 3)
    {
      this.setData({
        result_str: "低危人群"
      })
    }
    else if(sum <= 5)
    {
      this.setData({
        result_str: "中危人群"
      })
    }
    else{
      this.setData({
        result_str: "高危人群"
      })
    }
  }
})