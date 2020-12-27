<template>
  <div class="overflow">
    <el-container>
      <el-header>
        <div class="overflow_main">
          <div class="overflow_top">
            <div class="overflow_left" @click="loginn()">
              <a >{{ mingzi }}</a>
              <span><a>注册</a></span>
            </div>
            <div class="overflow_right">
              <ul>
                <li class="active">商城首页</li>
                <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                <li @click="gouwuches()">
                  <i class="el-icon-thirdgouwuche1"></i
                  >购物车
                </li>
               
              </ul>
            </div>
          </div>
          <div class="overflow_bottom">
            <div class="overflow_logo">
              <a href="../assets/logo.jpg"><img src="../assets/logo.jpg" alt="" /></a>
            </div>
            <div class="overflow_search">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="visibilty"></div>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="overflow_content">
          <div class="overflow_tabber">
            <div class="overflow_list">
              <ul>
                <li>全部分类</li>
                <li>首页</li>
                <li>秒杀</li>
                <li>品牌闪购</li>
                <li>团购</li>
                <li>京东超市</li>
              </ul>
            </div>
          </div>
          <div class="overflow_middle">
            <div class="list">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <i
                    class="el-icon-thirdgouwuche1"
                    style="margin-right: 20px"
                  />{{ item.a }}<span>&gt;</span>
                </li>
              </ul>
            </div>
            <div class="lunbo">
              <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="424px">
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                  >
                    <img :src="item.src" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

          </div>
          	<section class="starPro" @click="phone()">
			<h1 style="font-size:27px;font-weight:bolder;padding:30px 0 15px;color:green;">每日好货</h1>
			<div class="pro">
				<img src="../assets/1.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple/苹果 iPhone 12 Pro Max</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">智能生活</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">5299元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple iPad Air 10.9英寸 深空灰色</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">2020年新款 64G WLAN版/A14芯片</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">4799元</p>
				</div>
			</div>
			<div class="pro">
				<img src="../assets/detail_img3.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒 </p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">1479元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img4.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">【卫龙魔芋爽】魔芋丝素毛肚辣条网红辣味</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">让世界清晰可现</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">699元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒 </p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">>Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">1479元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red"1479元</p>
				</div>
			</div>
		</section>
    <p></p><p></p>
		<section class="starPro" @click="phone()">
			<div class="pro">
				<img src="../assets/1.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple/苹果 iPhone 12 Pro Max</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">智能生活</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">5299元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple iPad Air 10.9英寸 深空灰色</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">2020年新款 64G WLAN版/A14芯片</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">4799元</p>
				</div>
			</div>
			<div class="pro">
				<img src="../assets/detail_img3.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒 </p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">1479元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img4.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">【卫龙魔芋爽】魔芋丝素毛肚辣条网红辣味</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">让世界清晰可现</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">699元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒 </p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">>Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red">1479元</p>
				</div>
			</div>
			<div class="pro">
			<img src="../assets/detail_img2.jpg" alt="" />
				<div class="caption">
					<p style="text-align:center;font-size:14px;height:22px;">Apple AirPods 配充电盒</p>
					<p style="text-align:center;font-size:14px;height:22px;color:gray;">Apple蓝牙耳机</p>
					<p style="text-align:center;font-size:14px;height:22px;color:red"1479元</p>
				</div>
			</div>
		</section>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import '../components/main.less'
export default {
  data () {
    return {
      shoucangjia: false,
      mingzi: '',
      input3: '',
      list: [],
      lists: [],
      listes: [],
      imglist: [
        { src: require('../assets/1.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/3.jpg') },
        { src: require('../assets/4.jpg') }
      ]
    }
  },
  methods: {
    loginn(){
      this.$router.push('/login')
    },
    gouwuches () {
      this.$router.push('/money')
    },
    phone () {
      this.$router.push('/information')
    },
    computer () {
      this.$router.push('/information')
    },
    get () {
      var _this = this
      _this.$http
        .post('/api/user/main', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.list = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    post () {
      var _this = this
      _this.$http
        .post('/api/user/sort', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.listes = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    computerget () {
      var _this = this
      _this.$http
        .post('/api/user/sorts', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.listes = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    var _this = this
    _this.get()
    _this.post()
    _this.computerget()
    var a = _this.$route.params.Id
    _this.mingzi = a || '用户，请登录'
    _this.shoucangjia = !!a
  }
}
</script>
