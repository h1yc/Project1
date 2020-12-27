const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function () {
  const articles = [
    {
      username: 'admin',
      sex: 1
    }, {
      username: 'admi',
      sex: 0
    }
  ]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}
const Data = function () {
  const articles = [
    {
      username: 'ain',
      sex: 1
    }, {
      username: 'admi',
      sex: 0
    }
  ]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}
Mock.setup({
  timeout: 100
})

// ``请严格注意get请求的地址``
Mock.mock('/api/user/myTranferRecord', 'post', newsData) // post请求
Mock.mock(RegExp('/api/user/myTranferRecord' + '.*'), 'get', newsData) // get请求
// Mock.mock(RegExp("/api/user/aaa"+".*"), 'post', Data)
Mock.mock('/api/user/user', 'post', Data)
