const app = getApp()

Page({
  data:{
    numberArray:[],
    showNumberArray:[]
  },

  onLoad: function () {
    var numberArray = [];
    for(var i=0; i<35; i++){
      var object = {};
      object.url = "https://wx.qlogo.cn/mmopen/vi_32/ljicQ9ytGIY3fe5FsNYEvyT7mHvuuPzTfBE0WqN2Faz8VBHhSFmerKeRG6fPEJ3Cd5nIsX6100NqicDtoBpPTofA/0";
      object.picClass ="userPic";
      numberArray.push(object);
    }
    this.setData({
      numberArray: numberArray
    })
  }
  
});

