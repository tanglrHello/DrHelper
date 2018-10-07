Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    main_num: 0,
    sub_num: 0,
    result_str: "",
    title_color: getApp().globalData.title_color,
    subtitle_color: getApp().globalData.subtitle_color,
    info_title_color: getApp().globalData.info_title_color,
    info_bk_color: getApp().globalData.info_bk_color,
    result_color: getApp().globalData.result_color,
    xuepeiyang: [
      { id: 6, desc: "两次不同时间的血培养检出同一典型IE致病微生物（如草绿色链球菌，链球菌，金黄色葡萄球菌）"},
      { id: 7, desc: "多次血培养检出同一IE致病微生物（2次至少间隔12小时以上的血培养阳性；所有3次血培养均阳性、或4次或4次以上的多数血培养阳性）"},
      { id: 8, desc: "Q热病原体1次血培养阳性或其IgG抗体滴度>1:800"}
    ],
    xinneimo: [
      { id: 9, desc: "超声心动图异常（赘生物、脓肿、人工瓣膜裂开）"},
      { id: 10, desc: "新出现的瓣膜反流"}
    ],
    sub_rules: [
      { id: 1, title: "易患因素", desc: "心脏本身存在易患因素，或静脉药物成瘾者" },
      { id: 2, title: "发热", desc: "体温≥38℃" },
      { id: 3, title: "血管征象", desc: "主要动脉栓塞，感染性肺梗死，细菌性动脉瘤，颅内出血，结膜出血，以及Janeway损害" },
      { id: 4, title: "免疫性征象", desc: "肾小球肾炎，Osler结节，Roth斑以及类风湿因子阳性"},
      { id: 5, title: "致病微生物感染证据", desc: "不符合主要标准的血培养阳性，或与IE一致的活动性致病微生物感染的血清学证据"}
    ],
    
    title: "感染性心内膜炎诊断标准",
    url: "IE-Duke"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 180;

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
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var sub_num = 0;
    var main_num = 0;
    var xpy_flag = false;  //是否符合血培养阳性标准
    var xnm_flag = false;  //是否符合心内膜阳性标准
    var xuepeiyang = this.data.xuepeiyang;
    var xinneimo = this.data.xinneimo;
    var sub_rules = this.data.sub_rules;
    var conclusion = "";

    for (var i = 0; i < xuepeiyang.length; i++) {
      xuepeiyang[i].checked = false;
    }
    for (var i = 0; i < xinneimo.length; i++) {
      xinneimo[i].checked = false;
    }
    for (var i = 0; i < sub_rules.length; i++) {
      sub_rules[i].checked = false;
    }
    
    for (var i = 0; i < e.detail.value.length; i++) {
      var id = parseInt(e.detail.value[i]);
      if (id >= 6 && id <= 8){
        xuepeiyang[id - 6].checked = true;
        xpy_flag = true;
      }
      if (id == 9 || id == 10){
        xinneimo[id - 9].checked = true;
        xnm_flag = true;
      }
      if (id <= 5){
        sub_rules[id - 1].checked = true;
        sub_num += 1; 
      }
    }
    if(xnm_flag) main_num += 1;
    if(xpy_flag) main_num += 1;

    if(main_num == 2) conclusion = "确诊";
    else if(main_num == 1 && sub_num >=3) conclusion = "确诊";
    else if(sub_num == 5) conclusion = "确诊";
    else if(main_num == 1 && sub_num >= 1) conclusion = "疑诊";
    else if(sub_num >= 3) conclusion = "疑诊";
    else conclusion = "不能诊断";

    this.setData({
      main_num: main_num,
      sub_num: sub_num,
      xinneimo: xinneimo,
      xuepeiyang: xuepeiyang,
      sub_rules: sub_rules,
      result_str: conclusion
    })
  }
})