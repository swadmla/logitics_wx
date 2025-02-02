// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{},
  },
  onClickLeft:function(){
    wx.switchTab({
      url: '../me/me',
    })
  },

  checkUser() {
    wx.redirectTo({
      url: '../checkCard/index',
    })
  },

  exit(){
    wx.setStorageSync('user', null);
    wx.switchTab({
      url: '../index/index',
    })
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
  chageInfo:function(){
    wx.redirectTo({
      url: '../chageInfo/index',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that=this;
    let login = wx.getStorageSync('user')
    if(login.username == undefined){
      wx.redirectTo({
        url: '../login/index',
      })
    }
    wx.request({
      url: 'http://localhost:8080/user/getUser',
      method:'POST',
      header:{
        "Content-Type":"application/x-www-form-urlencoded",
      },
      data:{
        "openId":login.userid
      },
      success:res=>{
        this.setData({
          user:res.data.data
        })
      }
    })
   
  },

})