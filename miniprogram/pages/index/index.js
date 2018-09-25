//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */

  data: {
    inputShowed: false,
    inputVal: "",
    tools: [
      { id: 0, name: "ABCD2卒中评分量表", url: "TIA"},
      { id: 1, name: "房颤患者卒中风险评估", url: "CHA2DS2-VASc" },
      { id: 2, name: "类风湿关节炎患者病情评价", url: "DAS28" },
      { id: 3, name: "CSF-IgG指数", url: "CSF-IgG" },
      { id: 4, name: "Wells诊断标准(DVT)", url: "Wells-DVT" },
      { id: 5, name: "Duke平板运动评分", url: "Duke" }
    ],
    search_res: []
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

  showInput: function () {
    this.setData({
      inputShowed: true,
      search_res: []
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      search_res: []
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      search_res: []
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });

    var inputstr = e.detail.value;
    var all_tools = this.data.tools;
    var match_tools = [];

    console.log(inputstr);
    for(var i = 0; i < all_tools.length; i++)
    {
      console.log(all_tools[i].name);
      console.log(all_tools[i].name.indexOf(inputstr));
      if (all_tools[i].name.indexOf(inputstr) != -1)
      {
        match_tools.push(all_tools[i]);
      }
    }

    this.setData({
      search_res: match_tools
    })
    console.log(match_tools);
  }
})