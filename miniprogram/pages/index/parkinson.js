Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    result_str: "",
    title_color: getApp().globalData.title_color,
    subtitle_color: getApp().globalData.subtitle_color,
    info_title_color: getApp().globalData.info_title_color,
    info_bk_color: getApp().globalData.info_bk_color,
    result_color: getApp().globalData.result_color,

    zhenduan1: [
      { id: 0, desc: "启动随意运动的速度缓慢。疾病进站后，重复性动作的运动速度及幅度均降低"}
    ],
    zhenduan2: [
      { id: 1, desc: "肌肉僵直" },
      { id: 2, desc: "静止性震颤4~6Hz" },
      { id: 3, desc: "姿势不稳（非原发性视觉、前庭、小脑及本体感受功能障碍造成）" }
    ],
    zhichi: [
      { id: 4, desc: "单侧起病" },
      { id: 5, desc: "静止性震颤" },
      { id: 6, desc: "逐渐进展" },
      { id: 7, desc: "发病后多为持续性的不对称性受累"},
      { id: 8, desc: "对左旋多巴的治疗反应良好（70%~100%）"},
      { id: 9, desc: "左旋多巴导致的严重的异动症"},
      { id: 10, desc: "左旋多巴的治疗效果持续5年或5年以上"},
      { id: 11, desc: "临床病程10年或10年以上"} 
    ],
    paichu: [
      { id: 12, desc: "反复的脑卒中发作史，伴帕金森病特征的阶梯状进展"}, 
      { id: 13, desc: "反复的脑损伤史"},
      { id: 14, desc: "明确的脑炎史和(或)非药物所致动眼危象"},
      { id: 15, desc: "在症状出现时，正在应用抗精神病药物和(或)多巴胺耗竭剂"}, 
      { id: 16, desc: "1个以上的亲属患病"},
      { id: 17, desc: "CT扫描可见颅内肿瘤或交通性脑积水"}
    ],
    title: "中国帕金森病的诊断标准",
    url: "parkinson"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 150;

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
    var zhenduan_num = 0;
    var zhichi_num = 0;
    var paichu_num = 0;
    var conclusion = "";

    var zhenduan1 = this.data.zhenduan1;
    var zhenduan2 = this.data.zhenduan2;
    var zhichi = this.data.zhichi;
    var paichu = this.data.paichu;

    for (var i = 0; i < zhenduan1.length; i++) {
      zhenduan1[i].checked = false;
    }
    for (var i = 0; i < zhenduan2.length; i++) {
      zhenduan2[i].checked = false;
    }
    for (var i = 0; i < zhichi.length; i++) {
      zhichi[i].checked = false;
    }
    for (var i = 0; i < paichu.length; i++) {
      paichu[i].checked = false;
    }


    var zhenduan2_flag = false;
    for (var i = 0; i < e.detail.value.length; i++) {
      var id = parseInt(e.detail.value[i]);
      if ( id == 0 ){
        zhenduan_num += 1;
        zhenduan1[0].checked = true;
      }
      
      else if ( id >= 1 && id <= 3 )
      {
        zhenduan2_flag = true;
        zhenduan2[ id - 1 ].checked = true;
      }
      else if ( id >= 4 && id <= 11 ){
        zhichi_num += 1;
        zhichi[ id - 4 ].checked = true;
      }
      else{
        paichu_num += 1;    
        paichu[ id - 12 ].checked = true; 
      }
    }
    if (zhenduan2_flag) zhenduan_num += 1;

    if(paichu_num > 0) conclusion = "可排除帕金森";
    else if(zhenduan_num == 2 && zhichi_num >= 3) conclusion = "可确诊帕金森";
    else conclusion = "不能确诊";
    

    this.setData({
      zhenduan1: zhenduan1,
      zhenduan2: zhenduan2,
      zhichi: zhichi,
      paichu: paichu,
      result_str: conclusion
    })
  }
})