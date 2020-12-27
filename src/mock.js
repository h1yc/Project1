const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function () {
  return {
    code: 0,
    msg: '操作成功'
    // data: articles,
  }
}

const mainData = function () {
  const articles = [{ a: '女鞋/男鞋/箱包' }, { a: '腕表/眼镜/珠宝饰品' }, { a: '手机/数码/电脑办公' }, { a: '零食/茶酒/进口食品' }, { a: '生鲜水果' }, { a: '大家电/生活电器' }, { a: '家纺/家饰' }, { a: '医药保健' }, { a: '厨具/收纳/宠物' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const objectsort = function () {
  const articles = [{ kuaidiname: '黄晓明', kuaidiphone: '1366666666', kuaidiaddresss: '江苏省常熟市常熟理工学院东南校区' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const mainsData = function () {
  const articles = [{ a: '小米' }, { a: '荣耀' }, { a: '华为' }, { a: '锤子' }, { a: '苹果' }, { a: 'vivo' }, { a: 'oppo' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const sortsData = function () {
  const articles = [{ a: '黑色' }, { a: '白色' }, { a: '蓝色' }, { a: '绿色' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const detailData = function () {
  let articles = {first:'手机、数码、通讯'
    ,second:'手机',third:'Apple苹果',fourth:'iphone 12系类'
    ,name:'Apple iPhone 12...',pro_num:1,place: '江苏省苏州市运输',
    price:'5299.00',pingjia:'4153',url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1835797957,3723166691&fm=26&gp=0.jpg'}

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const asData = function () {
  const articles = [{ a: '小米' }, { a: '荣耀' }, { a: '华为' }, { a: 'MAC' }, { a: '联想' }, { a: 'vivo' }, { a: 'oppo' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}
const Data = function () {
  return {
    code: 0,
    msg: '操作成功'
  }
}

Mock.setup({
  timeout: 500
})

// ``请严格注意get请求的地址``
Mock.mock('/api/user/loginuser', 'post', newsData) // post请求
Mock.mock(RegExp('/api/user/loginuser' + '.*'), 'get', newsData) // get请求
Mock.mock('/api/user/user', 'post', Data) // post请求
Mock.mock(RegExp('/api/user/user' + '.*'), 'get', Data) // get请求
Mock.mock('/api/user/main', 'post', mainData) // post请求
Mock.mock(RegExp('/api/user/main' + '.*'), 'get', mainData)
Mock.mock('/api/user/sort', 'post', mainsData) // post请求
Mock.mock(RegExp('/api/user/sort' + '.*'), 'get', mainData)
Mock.mock('/api/user/sorts', 'post', asData) // post请求
Mock.mock(RegExp('/api/user/sorts' + '.*'), 'get', asData)
Mock.mock('/api/user/sortobject', 'post', objectsort) // post请求
Mock.mock(RegExp('/api/user/sortobject' + '.*'), 'get', objectsort)
Mock.mock('/api/user/detail', 'post', detailData) // post请求
Mock.mock(RegExp('/api/user/detail' + '.*'), 'get', detailData)
Mock.mock('/api/user/phonesorts', 'post', sortsData) // post请求
Mock.mock(RegExp('/api/user/phonesorts' + '.*'), 'get', sortsData)
