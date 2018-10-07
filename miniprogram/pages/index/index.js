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
      { id: 6, name: "系统性红斑狼疮疾病活动度评分(SLEDAI)", url: "SLEDAI" },
      { id: 1, name: "房颤患者卒中风险评估(CHA2DS2-VASc)", url: "CHA2DS2-VASc" },
      { id: 2, name: "类风湿关节炎患者病情评估(DAS28)", url: "DAS28" },
      { id: 8, name: "类风湿关节炎的诊断(RA)", url: "RA" },
      { id: 9, name: "危重病人APACHE II评分表", url: "apache2" }, 
      { id: 11, name: "感染性心内膜炎诊断标准(Duke)", url: "IE-Duke" },
      { id: 12, name: "肺栓塞严重指数(PESI)及其简化版本(sPESI)的评分标准", url: "PESI"},
      { id: 13, name: "中国帕金森病的诊断标准", url: "parkinson" },
      { id: 14, name: "强直性脊柱炎诊断标准（1966年纽约标准）", url: "as1966"},
      { id: 15, name: "强直性脊柱炎诊断标准（1984年修订纽约标准）", url: "as1984" },
      //{ id: 3, name: "CSF-IgG指数", url: "CSF-IgG" },
      //{ id: 4, name: "Wells诊断标准(DVT)", url: "Wells-DVT" },
      //{ id: 5, name: "Duke平板运动评分", url: "Duke" },
      //{ id: 7, name: "补钠计算器", url: "addNa"},
      //{ id: 0, name: "ABCD2卒中评分量表", url: "TIA" },
      { id: 10, name: "视频demo", url: "forxj" }
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