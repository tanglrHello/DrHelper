Page({
  data: {
    result_value : 0,
    result_str : '',
    scroll_height: 200,
    symptoms: [
      { id: 1, desc: '癫痫发作：最近开始发作的，除外代谢、感染、药物所致', score: 8 },
      { id: 2, desc: '精神症状：严重紊乱干扰正常活动。除外尿毒症、药物影响', score: 8 },
      { id: 3, desc: '器质性脑病：智力的改变伴定向力、记忆力或其它智力功能的损害并出现反复不定的临床症状，至少同时有以下两项：感觉紊乱、不连贯的松散语言、失眠或白天瞌睡、精神活动增多或减少。除外代谢、感染、药物所致', score: 8 },
      { id: 4, desc: '视觉受损：SLE视网膜病变，除外高血压、感染、药物所致', score: 8 },
      { id: 5, desc: '颅神经异常：累及颅神经的新出现的感觉、运动神经病变', score: 8 },
      { id: 6, desc: '狼疮性头痛：严重持续性头痛，麻醉性止痛药无效', score: 8 },
      { id: 7, desc: '脑血管意外：新出现的脑血管意外。应除外动脉硬化', score: 8 },
      { id: 8, desc: '脉管炎：溃疡、坏疽、有触痛的手指小结节、甲周碎片状梗塞、出血或经活检、血管造影证实', score: 8 },
      { id: 9, desc: '关节炎：2个以上关节痛和炎性体征（压痛、肿胀、渗出）', score: 4 },
      { id: 10, desc: '肌炎：近端肌痛或无力伴CPK / 醛缩酶升高，或肌电图改变或活检证实', score: 4 },
      { id: 11, desc: '管型尿：HB、颗粒管型或RBC管型', score: 4 },
      { id: 12, desc: '血尿：> 5RBC / HP，除外结石、感染和其它原因', score: 4 },
      { id: 13, desc: '蛋白尿：> 0.5g / 24h, 新出现或近期增加', score: 4 },
      { id: 14, desc: '脓尿：> 5个WBC / HP，除外感染', score: 4 },
      { id: 15, desc: '脱发：新出现或复发的异常斑片状或弥散性脱发', score: 2 },
      { id: 16, desc: '新出现皮疹：新出现或复发的炎症性皮疹', score: 2 },
      { id: 17, desc: '黏膜溃疡：新出现或复发的口腔或鼻黏膜溃疡', score: 2 },
      { id: 18, desc: '胸膜炎：胸膜炎性胸痛伴胸膜摩擦音、渗出或胸膜肥厚', score: 2 },
      { id: 19, desc: '发热：＞38℃，需除外感染因素', score: 1 },
      { id: 20, desc: '血小板降低 ＜100×109／L', score: 1 },
      { id: 21, desc: '白细胞减少＜3×109／L，需除外药物因素', score: 1 }
    ],
    title: "系统性红斑狼疮疾病活动度评分(SLEDAI)"
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

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var sum = 0;
    var id_score = this.data.symptoms;
    for(var i = 0; i < e.detail.value.length; i++)
    {
      var id = parseInt(e.detail.value[i]) - 1;
      var score = id_score[id].score;
      id_score[id].checked = true;
      sum += parseInt(score);
    }
    this.setData({
      result_value: sum,
      symptoms: id_score
    })

    if (sum <= 4 )
    {
      this.setData({result_str: '基本无活动（0~4分）'})
    }
    else if(sum <= 9)
    {
      this.setData({result_str: '轻度活动（5~9分）'})
    }
    else if(sum <= 14)
    {
      this.setData({result_str: '中度活动（10~14分）'})
    }
    else
    {
      this.setData({result_str: '重度活动（>=15分）'})
    }
  }
})
