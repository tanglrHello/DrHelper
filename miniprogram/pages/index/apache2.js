// miniprogram/pages/index/apache2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 200,
    title_color: getApp().globalData.title_color,
    subtitle_color: getApp().globalData.subtitle_color,
    info_title_color: getApp().globalData.info_title_color,
    info_bk_color: getApp().globalData.info_bk_color,
    result_color: getApp().globalData.result_color,
    ages: [
      { desc: "≤44岁", score: 0 },
      { desc: "45~54岁", score: 2 },
      { desc: "55~64岁", score: 3 },
      { desc: "65~74岁", score: 5 },
      { desc: "≥75岁", score: 6 }
    ],
    damages: [
      { desc: "非手术或择期手术后", score: 2 },
      { desc: "不能手术或急诊手术后", score: 5 },
      { desc: "无上述情况", score: 0 }
    ],
    eyes: [
      { desc: "自动睁眼", score: 4 },
      { desc: "呼唤睁眼", score: 3 },
      { desc: "刺疼睁眼", score: 2 },
      { desc: "不能睁眼", score: 1 }
    ],
    speak: [
      { desc: "回答切题", score: 5 },
      { desc: "回答不切题", score: 4 },
      { desc: "答非所问", score: 3 },
      { desc: "只能发音", score: 2 },
      { desc: "不能言语", score: 1 }
    ],
    sport: [
      { desc: "按吩咐动作", score: 6 },
      { desc: "刺疼能定位", score: 5 },
      { desc: "刺疼能躲避", score: 4 },
      { desc: "刺疼肢体屈曲", score: 3 },
      { desc: "刺疼肢体伸展", score: 2 },
      { desc: "不能活动", score: 1 }
    ],
    tiwen: [
      { desc: "≥41", score: 4 },
      { desc: "39~40.9", score: 3 },
      { desc: "38.5~38.9", score: 1 },
      { desc: "36~38.4", score: 0 },
      { desc: "34~35.9", score: 1 },
      { desc: "32~33.9", score: 2 },
      { desc: "30~31.9", score: 3 },
      { desc: "≤29.9", score: 4 }
    ],
    xueya: [
      { desc: "≥160", score: 4 },
      { desc: "130~159", score: 3 },
      { desc: "110~129", score: 2 },
      { desc: "70~109", score: 0 },
      { desc: "50~69", score: 2 },
      { desc: "≤49", score: 4 }
    ],
    xinlv: [
      { desc: "≥180", score: 4 },
      { desc: "140~179", score: 3 },
      { desc: "110~139", score: 2 },
      { desc: "70~109", score: 0 },
      { desc: "55~69", score: 2 },
      { desc: "40~54", score: 3 },
      { desc: "≤39", score: 4 }
    ],
    huxi: [
      { desc: "≥50", score: 4 },
      { desc: "35~49", score: 3 },
      { desc: "25~34", score: 1 },
      { desc: "12~24", score: 0 },
      { desc: "10~11", score: 1 },
      { desc: "6~9", score: 2 },
      { desc: "≤5", score: 4 }
    ],
    pao2: [
      { desc: ">70", score: 0 },
      { desc: "61~70", score: 1 },
      { desc: "55~60", score: 3 },
      { desc: "<55", score: 4 }
    ],
    aado2: [
      { desc: "≥500", score: 4 },
      { desc: "350~499", score: 3 },
      { desc: "200~349", score: 2 },
      { desc: "<200", score: 0 }
    ],
    dmph: [
      { desc: "≥7.7", score: 4 },
      { desc: "7.6~7.69", score: 3 },
      { desc: "7.5~7.59", score: 1 },
      { desc: "7.33~7.49", score: 0 },
      { desc: "7.25~7.32", score: 2 },
      { desc: "7.15~7.24", score: 3 },
      { desc: "<7.15", score: 4 }
    ],
    xqhco3: [
      { desc: "≥52", score: 4 },
      { desc: "41~51.9", score: 3 },
      { desc: "32~40.9", score: 1 },
      { desc: "22~31.9", score: 0 },
      { desc: "18~21.9", score: 2 },
      { desc: "15~17.9", score: 3 },
      { desc: "<15", score: 4 }
    ],
    xqna: [
      { desc: "≥180", score: 4 },
      { desc: "160~179", score: 3 },
      { desc: "155~159", score: 2 },
      { desc: "150~154", score: 1 },
      { desc: "130~149", score: 0},
      { desc: "120~129", score: 2 },
      { desc: "111~119", score: 3 },
      { desc: "≤110", score: 4 }
    ],
    xqk: [
      { desc: "≥7", score: 4 },
      { desc: "6~6.9", score: 3 },
      { desc: "5.5~5.9", score: 1 },
      { desc: "3.5~5.4", score: 0 },
      { desc: "3~3.4", score: 1 },
      { desc: "2.5~2.9", score: 2 },
      { desc: "<2.5", score: 4 }
    ],
    xqjg: [
      { desc: "≥3.5", score: 4 },
      { desc: "2~3.4", score: 3 },
      { desc: "1.5~1.9", score: 2 },
      { desc: "0.6~1.4", score: 0 },
      { desc: "<0.6", score: 2 },
    ],
    xqyj:[
      { desc: "≥60", score: 4 },
      { desc: "50~59.9", score: 2 },
      { desc: "46~49.9", score: 1 },
      { desc: "30~45.9", score: 0 },
      { desc: "20~29.9", score: 2 },
      { desc: "<20", score: 4}
    ],
    wbc: [
      { desc: "≥40", score: 4 },
      { desc: "20~39.9", score: 2 },
      { desc: "15~19.9", score: 1 },
      { desc: "3~14.9", score: 0 },
      { desc: "1~2.9", score: 2 },
      { desc: "<1", score: 4 }
    ],
    gcs: 0,
    Ascore: 0,
    Bscore: 0,
    Cscore: 0,
    Dscore: 0,
    result: 0,
    title: "危重病人APACHE II评分表",
    url: "apache2",
    age_color: "#000000",
    damage_color: "#000000",
    eye_color: "#000000",
    speak_color: "#000000",
    sport_color: "#000000",
    tiwen_color: "#000000",
    xueya_color: "#000000",
    xinlv_color: "#000000",
    huxi_color: "#000000",
    pao2_color: "#000000",
    aado2_color: "#000000",
    dmph_color: "#000000",
    xqhco3_color: "#000000",
    xqna_color: "#000000",
    xqk_color: "#000000",
    xqjg_color: "#000000",
    xqyj_color: "#000000",
    wbc_color: "#000000",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 250;

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

  radioChange_age: function (e) {
    var radioItems = this.data.ages;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value)
      {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else{
        radioItems[i].checked = false;
      }
    }
    this.setData({
      ages: radioItems,
      Ascore: score
    });
  },
  radioChange_damage: function (e) {
    var radioItems = this.data.damages;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      damages: radioItems,
      Bscore: score
    });
  },
  radioChange_eye: function (e) {
    var radioItems = this.data.eyes;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      eyes: radioItems,
    });
  },
  radioChange_speak: function (e) {
    var radioItems = this.data.speak;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      speak: radioItems,
    });
  },
  radioChange_sport: function (e) {
    var radioItems = this.data.sport;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      sport: radioItems,
    });
  },
  radioChange_tiwen: function (e) {
    var radioItems = this.data.tiwen;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      tiwen: radioItems,
    });
  },
  radioChange_xueya: function (e) {
    var radioItems = this.data.xueya;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xueya: radioItems,
    });
  },
  radioChange_xinlv: function (e) {
    var radioItems = this.data.xinlv;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xinlv: radioItems,
    });
  },
  radioChange_huxi: function (e) {
    var radioItems = this.data.huxi;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      huxi: radioItems,
    });
  },
  radioChange_pao2: function (e) {
    var radioItems = this.data.pao2;
    var otherItems = this.data.aado2;
    for(var i = 0; i < otherItems.length; i++)
    {
      otherItems[i].checked = false;
    }
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      aado2: otherItems,
      pao2: radioItems,
    });
  },
  radioChange_aado2: function (e) {
    var radioItems = this.data.aado2;
    var otherItems = this.data.pao2;
    for(var i = 0; i < otherItems.length; i++){
      otherItems[i].checked = false;
    }
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      aado2: radioItems,
      pao2: otherItems
    });
  },
  radioChange_dmph: function (e) {
    var radioItems = this.data.dmph;
    var otherItems = this.data.xqhco3;
    for( var i = 0; i < otherItems.length; i++){
      otherItems[i].checked = false;
    }
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xqhco3: otherItems,
      dmph: radioItems,
    });
  },
  radioChange_xqhco3: function (e) {
    var radioItems = this.data.xqhco3;
    var otherItems = this.data.dmph;
    for(var i = 0; i < otherItems.length; i++){
      otherItems[i].checked = false;
    }

    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      dmph:otherItems,
      xqhco3: radioItems,
    });
  },
  radioChange_xqna: function (e) {
    var radioItems = this.data.xqna;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xqna: radioItems,
    });
  },
  radioChange_xqk: function (e) {
    var radioItems = this.data.xqk;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xqk: radioItems,
    });
  },
  radioChange_xqjg: function (e) {
    var radioItems = this.data.xqjg;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xqjg: radioItems,
    });
  },
  radioChange_xqyj: function (e) {
    var radioItems = this.data.xqyj;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      xqyj: radioItems,
    });
  },
  radioChange_wbc: function (e) {
    var radioItems = this.data.wbc;
    var score = 0;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (radioItems[i].desc == e.detail.value) {
        radioItems[i].checked = true;
        score = radioItems[i].score;
      }
      else {
        radioItems[i].checked = false;
      }
    }
    this.setData({
      wbc: radioItems,
    });
  },

  compute: function (e) {
    var finish = true;
    if (e.detail.value["age"] == ""){ 
      this.setData({ age_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ age_color: "#000000" });

    if (e.detail.value["damage"] == "") {
      this.setData({ damage_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ damage_color: "#000000" });

    if (e.detail.value["eye"] == "") {
      this.setData({ eye_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ eye_color: "#000000" });

    if (e.detail.value["speak"] == "") {
      this.setData({ speak_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ speak_color: "#000000" });

    if (e.detail.value["sport"] == "") {
      this.setData({ sport_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ sport_color: "#000000" });

    if (e.detail.value["tiwen"] == "") {
      this.setData({ tiwen_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ tiwen_color: "#000000" });

    if (e.detail.value["xueya"] == "") {
      this.setData({ xueya_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xueya_color: "#000000" });

    if (e.detail.value["xinlv"] == "") {
      this.setData({ xinlv_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xinlv_color: "#000000" });
    
    if (e.detail.value["huxi"] == "") {
      this.setData({ huxi_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ huxi_color: "#000000" });

    if (e.detail.value["pao2"] == "" && e.detail.value["aado2"] == ""){      
      this.setData({ pao2_color: "#ff0000" });
      this.setData({ aado2_color: "#ff0000" });
      finish = false;
    }
    else{
      this.setData({ pao2_color: "#000000" });
      this.setData({ aado2_color: "#000000" });
    }

    if (e.detail.value["dmph"] == "" && e.detail.value["xqhco3"] == "") {
      this.setData({ dmph_color: "#ff0000" });
      this.setData({ xqhco3_color: "#ff0000" });
      finish = false;
    }
    else {
      this.setData({ dmph_color: "#000000" });
      this.setData({ xqhco3_color: "#000000" });
    }

    if (e.detail.value["xqna"] == "") {
      this.setData({ xqna_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xqna_color: "#000000" });
    
    if (e.detail.value["xqk"] == "") {
      this.setData({ xqk_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xqk_color: "#000000" });

    if (e.detail.value["xqjg"] == "") {
      this.setData({ xqjg_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xqjg_color: "#000000" });

    if (e.detail.value["xqyj"] == "") {
      this.setData({ xqyj_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ xqyj_color: "#000000" });
   
    if (e.detail.value["wbc"] == "") {
      this.setData({ wbc_color: "#ff0000" });
      finish = false;
    }
    else this.setData({ wbc_color: "#000000" });

    var conclusion = "";
    if (!finish) {conclusion = "【warning】请选完红色标题的选项";}
    
    var age = e.detail.value["age"];
    var damage = e.detail.value["damage"];
    var eye = e.detail.value["eye"];
    var speak = e.detail.value["speak"];
    var sport = e.detail.value["sport"];
    var tiwen = e.detail.value["tiwen"];
    var xueya = e.detail.value["xueya"];
    var xinlv = e.detail.value["xinlv"];
    var huxi = e.detail.value["huxi"];
    var pao2 = e.detail.value["pao2"];
    var aado2 = e.detail.value["aado2"];
    var dmph = e.detail.value["dmph"];
    var xqhco3 = e.detail.value["xqhco3"];
    var xqna = e.detail.value["xqna"];
    var xqk = e.detail.value["xqk"];
    var xqjg = e.detail.value["xqjg"];
    var xqyj = e.detail.value["xqyj"];
    var wbc = e.detail.value["wbc"];

    var sum = 0;
    var ascore = 0;
    var bscore = 0;
    var cscore = 0;
    var dscore = 0;

    //A-score
    for (var i = 0; i < this.data.ages.length; i++) {
      if (this.data.ages[i].desc == age && this.data.ages[i].checked) {
        ascore += this.data.ages[i].score;
      }
    }

    //B-score
    for (var i = 0; i < this.data.damages.length; i++) {
      if (this.data.damages[i].desc == damage && this.data.damages[i].checked){
        bscore += this.data.damages[i].score;
      }
    }

    //C-score
    var gcs = 0;
    for (var i = 0; i < this.data.eyes.length; i++) {
      if (this.data.eyes[i].desc == eye && this.data.eyes[i].checked) 
      {
        gcs += this.data.eyes[i].score;
        console.log(gcs);
      }
    }
    for (var i = 0; i < this.data.speak.length; i++) {
      if (this.data.speak[i].desc == speak && this.data.speak[i].checked) {
        gcs += this.data.speak[i].score;
        console.log(gcs);
      }
    }
    for (var i = 0; i < this.data.sport.length; i++) {
      if (this.data.sport[i].desc == sport && this.data.sport[i].checked) {
        gcs += this.data.sport[i].score;
        console.log(gcs);
      }
    }
    cscore = 15 - gcs;
    
    //D-score
    for (var i = 0; i < this.data.tiwen.length; i++) {
      if (this.data.tiwen[i].desc == tiwen && this.data.tiwen[i].checked) {
        dscore += this.data.tiwen[i].score;
      }
    }
    for (var i = 0; i < this.data.xueya.length; i++) {
      if (this.data.xueya[i].desc == xueya && this.data.xueya[i].checked) {
        dscore += this.data.xueya[i].score;
      }
    }
    for (var i = 0; i < this.data.xinlv.length; i++) {
      if (this.data.xinlv[i].desc == xinlv && this.data.xinlv[i].checked) {
        dscore += this.data.xinlv[i].score;
      }
    }
    for (var i = 0; i < this.data.huxi.length; i++) {
      if (this.data.huxi[i].desc == huxi && this.data.huxi[i].checked) {
        dscore += this.data.huxi[i].score;
      }
    }
    for (var i = 0; i < this.data.pao2.length; i++) {
      if (this.data.pao2[i].desc == pao2 && this.data.pao2[i].checked) {
        dscore += this.data.pao2[i].score;
      }
    }
    for (var i = 0; i < this.data.aado2.length; i++) {
      if (this.data.aado2[i].desc == aado2 && this.data.aado2[i].checked) {
        dscore += this.data.aado2[i].score;
      }
    }
    for (var i = 0; i < this.data.dmph.length; i++) {
      if (this.data.dmph[i].desc == dmph && this.data.dmph[i].checked) {
        dscore += this.data.dmph[i].score;
      }
    }
    for (var i = 0; i < this.data.xqhco3.length; i++) {
      if (this.data.xqhco3[i].desc == xqhco3 && this.data.xqhco3[i].checked) {
        dscore += this.data.xqhco3[i].score;
      }
    }
    for (var i = 0; i < this.data.xqna.length; i++) {
      if (this.data.xqna[i].desc == xqna && this.data.xqna[i].checked) {
        dscore += this.data.xqna[i].score;
      }
    }
    for (var i = 0; i < this.data.xqk.length; i++) {
      if (this.data.xqk[i].desc == xqk && this.data.xqk[i].checked) {
        dscore += this.data.xqk[i].score;
      }
    }
    for (var i = 0; i < this.data.xqjg.length; i++) {
      if (this.data.xqjg[i].desc == xqjg && this.data.xqjg[i].checked) {
        dscore += this.data.xqjg[i].score;
      }
    }
    for (var i = 0; i < this.data.xqyj.length; i++) {
      if (this.data.xqyj[i].desc == xqyj && this.data.xqyj[i].checked) {
        dscore += this.data.xqyj[i].score;
      }
    }
    for (var i = 0; i < this.data.wbc.length; i++) {
      if (this.data.wbc[i].desc == wbc && this.data.wbc[i].checked) {
        dscore += this.data.wbc[i].score;
      }
    }

    sum = ascore + bscore + cscore + dscore;
    this.setData({
      result: sum,
      Ascore: ascore,
      Bscore: bscore,
      Cscore: cscore,
      Dscore: dscore
    })

    this.setData({
      result_str: conclusion
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

  }
})