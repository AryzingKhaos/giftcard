//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    banner:[
      {
        'id':'1',
        'title':'轮播图片1',
        'image':'../../images/a1.png'
      },{
        'id': '1',
        'title': '轮播图片1',
        'image': '../../images/a1.png'
      }, {
        'id': '1',
        'title': '轮播图片1',
        'image': '../../images/a1.png'
      }, {
        'id': '1',
        'title': '轮播图片1',
        'image': '../../images/a1.png'
      }
    ],
    list: [
      {
        'id':'1',
        'name':'礼品卡组别1',
        'content':[
          {
            'id':'1',
            'name':'礼品卡名字1-1',
            'image':'../../images/a1.png'
          },{
            'id': '2',
            'name': '礼品卡名字1-2',
            'image': '../../images/a2.png'
          }
        ]
      },{
        'id': '2',
        'name': '礼品卡组别2',
        'content': [
          {
            'id': '3',
            'name': '礼品卡名字2-1',
            'image': '../../images/a3.png'
          }, {
            'id': '4',
            'name': '礼品卡名字2-2',
            'image': '../../images/a4.png'
          }
        ]
      }, {
        'id': '2',
        'name': '礼品卡组别2',
        'content': [
          {
            'id': '3',
            'name': '礼品卡名字2-1',
            'image': '../../images/a3.png'
          }, {
            'id': '4',
            'name': '礼品卡名字2-2',
            'image': '../../images/a4.png'
          }
        ]
      }, {
        'id': '2',
        'name': '礼品卡组别2',
        'content': [
          {
            'id': '3',
            'name': '礼品卡名字2-1',
            'image': '../../images/a3.png'
          }, {
            'id': '4',
            'name': '礼品卡名字2-2',
            'image': '../../images/a4.png'
          }
        ]
      }
    ],
    duration: 500,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  loadMore (e) {
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({ loading: true })
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
        //  that.setData({
        //    loading: false,
        //    list: that.data.list.concat([{ header: utils.formatDate(date, '-') }]).concat(res.data.stories)
        //  })
      }
    })
  },
  getNextDate (){
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  onLoad () {
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
        //  that.setData({
        //    banner: res.data.top_stories,
        //    list: [{ header: '今日热闻' }].concat(res.data.stories)
        //  })
      }
    })
    this.index = 1
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    
  }
})
