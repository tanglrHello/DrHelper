// miniprogram/pages/index/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  previewImage: function (e) {
    var current = "https://qdcu01.baidupcs.com/file/0117b2df4f66c5ae45c4977b543409c4?bkt=p3-14000117b2df4f66c5ae45c4977b543409c4ccc1bae500000001070c&fid=2399551823-250528-981487428237420&time=1538022339&sign=FDTAXGERLQBHSKW-DCb740ccc5511e5e8fedcff06b081203-J0y8KfV7euZDty2MEH4p6X3zaI4%3D&to=65&size=67340&sta_dx=67340&sta_cs=1&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CQingdao%2CAnywhere%2C%2Cbeijing%2Ccnc&resv0=cdnback&resv1=0&vuk=2399551823&iv=0&htype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=14000117b2df4f66c5ae45c4977b543409c4ccc1bae500000001070c&sl=76480590&expires=8h&rt=sh&r=435913615&mlogid=6250878873474921384&vbdid=435558879&fin=wechat.png&fn=wechat.png&rtype=1&dp-logid=6250878873474921384&dp-callid=0.1.1&hps=1&tsl=80&csl=80&csign=lIfAYItVxIX2oEyQTuQC35sKo3c%3D&so=0&ut=6&uter=4&serv=0&uc=2440579939&ti=78cccb630bb0656edd5f833205ac526945cc3bb917229923&by=themis";
    wx.previewImage({   
      current: current,
      urls: [current] // 需要预览的图片http链接列表       
    })         
  }

})