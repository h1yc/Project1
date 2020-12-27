<template>
    <div class="over_login">
    <el-container>
        <el-header>
          <div class="overflow_main">
            <div class="overflow_top">
              <div class="overflow_left">
                <a href="">用户，请登录</a>
                <span><a href="">注册</a></span>
              </div>
              <div class="overflow_right">
                <ul>
                  <li class="active" @click="shouye()">商城首页</li>
                  <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                  <li @click="gouwuche()"><i class="el-icon-thirdgouwuche1" ></i>购物车</li>
                  <li><i class="el-icon-thirdshoucangjia"></i>收藏夹</li>
                </ul>
              </div>
            </div>
            <div class="overflow_bottom">
              <div class="overflow_logo">
               <a href="../assets/logo.jpg"><img src="../assets/logo.jpg" alt=""></a>
              </div>
              <div class="overflow_search">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              </div>
              <div class="visibilty"></div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="mainlogin">
            <div class="overflow_content">
                <div class="overflow_box">
                    <!-- <img src="../../assets/logo.png" alt=""> -->
                    <div class="overflow_login" v-if="loginview">
                        <el-input placeholder="请输入邮箱号" v-model="user" clearable ></el-input>
                        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                        <el-button type="primary" @click="login()" width= '100px'>登陆</el-button>
                        <div class="usersetting">
                            <span><input type="checkbox" style="margin-top:2px"><a >记住密码</a></span>
                            <a  @click="changestaus()">立即注册</a>
                        </div>
                        <div class="hezuo">
                          <div class="hezuotitle">
                            <p>合作伙伴</p>
                            <p style="visibility: hidden;">123</p>
                          </div>
                          <div class="hezuoicon">
                            <ul>
                              <li><i class="el-icon-thirdtouxiang"/><span>QQ</span></li>
                              <li><i class="el-icon-thirdtouxiang"/><span>QQ</span></li>
                              <li><i class="el-icon-thirdtouxiang"/><span>QQ</span></li>
                            </ul>
                          </div>
                        </div>
                        <!-- <p>登陆/注册即代表你同意<a href="">用户协议</a>和<a href="">隐私条款</a></p> -->
                        <p style="visibility:hidden">12</p>
                    </div>
                    <div class="overflow_login" v-if="register">
                        <el-input placeholder="请输入邮箱号" v-model="user"  ></el-input><span class="VerificationCode"><a>获取验证码</a></span>
                        <el-input placeholder="请输入验证码" v-model="password" ></el-input>
                        <el-input placeholder="请输入账号" v-model="name"  ></el-input>
                        <el-input placeholder="请输入密码" v-model="phone" ></el-input>
                        <div class="usersettings">
                            <span><input type="checkbox" style="margin-top:2px"><a >点击表示你同意《服务协议》</a></span>
                            <a  @click="changestaus()">登陆</a>
                        </div>
                        <el-button type="primary" width= '100px' @click="registers()">注册</el-button>
                        <!-- <p>登陆/注册即代表你同意<a href="">用户协议</a>和<a href="">隐私条款</a></p> -->
                        <p style="visibility:hidden">12</p>
                    </div>
                    <!-- <div class="message"><span>让</span><span>职</span><span>场</span><span>更</span><span>轻</span><span>松</span></div> -->
                </div>
                <!-- <div class="overflow_login" v-if="loginview">1</div>
                <div class="overflow_register" v-if="register">2</div> -->
            </div>
          </div>
          <div class="paymethods">
            <div class="paylist">
              <ul>
                <li>商城首页</li>
                <li>支付宝</li>
                <li>物流</li>
                <!-- <li>4</li> -->
              </ul>
            </div>
            <div class="payintroduce">
            <ul>
              <li>合作伙伴</li>
              <li>联系我们</li>
              <li>网站地图</li>
              <li>@2020 cslg-web版权所有</li>
            </ul>
          </div>
          </div>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import '../components/login.less'
// import '../mock/index'
export default {
  data () {
    return {
      loginview: true,
      register: false,
      input: '',
      input3: '',
      user: '',
      password: '',
      phone: '',
      name: ''
      // bodyBgImage: 'url(' + require('../../assets/bg.jpg') + ')'
    }
  },
  methods: {
    gouwuche () {
      this.$router.push('/money')
    },
    shouye () {
      this.$router.push('/')
    },
    changestaus () {
      this.loginview = !this.loginview
      this.register = !this.register
    },
    login () {
      var _this = this
      if (_this.input3 = '') {
        alert('密码不能为空')
      } else {
        this.$http.post('/api/user/user', {
          input3: this.input3,
          input: this.input
        })
          .then(function (response) {
            if (response.staus = 200) {
              alert('登陆成功')
              var id = 1
              _this.$router.push({
                name: 'Main', // 这里必须有，没有的话传过去的值为undefined
                path: '/',
                params: {
                  Id: _this.user
                }
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      // this.$router.replace('/main')
    },
    registers () {
      var _this = this
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (_this.user != '' && !regEmail.test(_this.user)) {
        alert('邮箱格式不正确')
        _this.user = ''
      } else {
        this.$http.post('/api/user/user', {
          user: this.user,
          password: this.password,
          phone: this.phone,
          name: this.name
        })
          .then(function (data) {
            // console.log(data)
            if (data.staus = 200) {
              alert('注册成功，请登录')
              _this.changestaus()
            }
          }).catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>
