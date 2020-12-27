<template>
    <div class="over_informations">
      <el-container>
        <el-header>
          <div class="overflow_main">
            <div class="overflow_top">
              <div class="overflow_left">
                <a href="">游客，请登录</a>
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
          <div class="nav">
        <div class="w">
          <div class="dropdown fl">
            <div class="dt">全部商品分类</div>
          </div>
          <!--右侧导航-->
          <div class="navitems fl">
            <ul>
              <li><a href="#">天猫超市</a></li>
              <li><a href="#">美妆馆</a></li>
              <li><a href="#">聚划算</a></li>
              <li><a href="#">精致生活</a></li>
              <li><a href="#">全球购</a></li>
              <li><a href="#">京东心选</a></li>
              <li><a href="#">智能生活</a></li>
              <li><a href="#">好物购</a></li>
            </ul>
          </div>
        </div>
      </div>
        <!--nav结束-->
        <!--详情页内容部分-->
        <div class="de_container w">
          <!--面包屑导航-->
          <div class="crumb_wrap">
            <a href="#">{{list.first}} </a>
            〉<a href="#">{{list.second}} </a>
            〉<a href="#">{{list.third}}</a>
            〉<a href="#">{{list.fourth}}</a>
          </div>
          <!--产品介绍模块-->
          <div class="product_intro clearfix">
            <!--左侧预览区域-->
            <div class="magnify">
              <!-- 左边产品图片区域 -->
                <div class="choose" ref="choose">
            <div class="content" ref="content" @mousemove="handleMove" @mouseout="handleOut">
                <img src="../assets/phone6.jpg" />
                <div class="shadow" ref="shadow"></div>
            </div>
            <ul id="listshow">
                <li class="selected">
                    <img src="../assets/phone6.jpg" alt="">
                </li>
            </ul>
        </div>
        <div class="larger" ref="larger">
            <img src="../assets/phone6.jpg" ref="big" />
        </div>
            </div>
          <!-- </div> -->
            <!--右侧产品详细区域-->
            <div class="itemInfo_wrap fr" v-if="aaa">
              <div class="sku_name">{{list.name}}</div>
              <div class="news">【圣诞礼遇，限量抢券享白条免息】值享焕新三重礼:一、原厂AC+延保;二、未来折抵半价换新，至高再返873元；三、限时得价值1246元Air Pods</div>
              <div class="summary">
                <dl class="summary_price">
                  <dt>价格</dt>
                  <dd>
                    <i class="price">￥{{list.price}}</i>
                    <a href="#"> 降价通知</a>
                    <div class="mark">累计评价{{list.pingjia}}</div>
                  </dd>
                </dl>
                <dl class="summary_promotion">
                  <dt>促销</dt>
                  <dd>
                    <em>加购价</em>
                    满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换 购热销商品 详情 》
                  </dd>
                </dl>
                <dl class="summary_support">
                  <dt>支持</dt>
                  <dd>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</dd>
                </dl>
                <dl class="choose_color">
                  <dt>选择颜色</dt>
                  <dd>
                    <ul style="float:left">
                    <li v-for="(item,index) in lists" :key="index"><a href="javascript:;" class="current">{{item.a}}</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl class="choose_version">
                  <dt>选择版本</dt>
                  <dd>
                    <a href="javascript:;" class="current">公开版</a>
                    <a href="javascript:;">移动5g</a>
                  </dd>
                </dl>
                <dl class="choose_type">
                  <dt>购买方式</dt>
                  <dd>
                    <a href="javascript:;" class="current">官方标配</a>
                    <a href="javascript:;">移动优惠购</a>
                  </dd>
                </dl>
                <div class="choose_btns">
                  <a href="#" class="addcar">立即购买</a>
                  <a href="#" class="addcar" @click = "addgouwuche()">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
          <!--产品细节模块product_detail-->
        </div>
        <!--详情页内容部分-->
        <div class="mian" id="t1">
         
          <div class="m-r">
            <div id="tab">
             
              <ul class="tab">
                <li class="tab_nav on">
                  <div class="item">
                   
                    <img src="../assets/detail_img1.jpg" alt="">
                  </div>
                </li>
                <li class="tab_nav">规格与包装</li>
                <li class="tab_nav">售后保障</li>
                <li class="tab_nav">商品(50000)</li>
                <li class="tab_nav">手机社区</li>
              </ul>
            </div>
          </div>
        </div>
        <!--footer开始-->
        </el-main>
      </el-container>
    </div>
</template>
<script>
import '../components/information.less'
import $ from 'jquery'
export default {
  props: {
    middleImgWidth: {
      default: 350,
      type: Number
    }, // 产品图片宽
    middleImgHeight: {
      default: 400,
      type: Number
    }, // 产品图片高
    thumbnailHeight: {
      default: 100,
      type: Number
    }, // 缩略图容器高度
    imgList: Array, // 图片数据
    zoom: {
      default: 2, // 缩略比例,放大比例
      type: Number
    }
  },
  data () {
    return {
      input3: '',
      pictureList: [
        { url: 'http://mp.ofweek.com/Upload/News/Img/member645/201711/17170046839337.jpg' },
        { url: 'http://image.buy.ccb.com/merchant/201703/904919627/1522929521661_4.jpg' },
        { url: 'http://image5.suning.cn/uimg/b2c/newcatentries/0070130691-000000000826244625_5_800x800.jpg' },
        { url: 'http://img12.360buyimg.com/n5/s450x450_jfs/t9952/98/2269407420/279171/6137fe2f/59f28b2bN6959e086.jpg' },
        { url: 'http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2017/1213/A4037864F6728F006B67AAEC51EC8A485F320FD2_size93_w1024_h734.jpeg' },
        { url: 'http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2017/1213/A4037864F6728F006B67AAEC51EC8A485F320FD2_size93_w1024_h734.jpeg' }
      ],
      middleImg: '',
      bigImg: '',
      isShade: false,
      isBig: false,
      initX: 0,
      aaa: true,
      lists: [],
      list: [],
      initY: 0,
      leftX: 0,
      topY: 0,
      middleLeft: 0,
      itemWidth: 80,
      isPC:true,
      qall: '../assets/detail_img2.jpg',
      qallBig: '../assets/floor-1-1.png',
      isShow:false,   //控制遮罩层marks和大图片是否显示"
      left:0,       //marks左移位置
      top:0,         //marks下移位置
      leftLgImg:0,       //大图lgImg移动的位置
      topLgImg:0         //大图lgImg移动的位置
    }
  },
  created () {
    if (this.imgList && this.imgList.length) {
      this.pictureList = this.imgList
    }
    this.middleImg = this.pictureList[0].url
    // 计算缩略图的宽度,默认是显示4张图片,两边箭头的宽度和为50
    this.itemWidth = (this.middleImgWidth - 50) / 4
  },
  mounted () {
    this.get()
    
    this.getphone()
    this.$nextTick(() => {
      // 容器的高
      const imgWidth = this.middleImgHeight + this.thumbnailHeight + 20
      // 设置容器宽高
      $('.magnify').css({
        width: this.middleImgWidth,
        height: imgWidth
      })
      // 设置产品图宽高
      $('.middle_img').css({
        width: this.middleImgWidth,
        height: this.middleImgHeight
      })
      // 设置移动阴影图宽高
      $('.middle_img .shade').css({
        width: this.middleImgWidth / this.zoom,
        height: this.middleImgHeight / this.zoom
      })
      // 设置缩略图容器高
      $('.carousel').css({
        height: this.thumbnailHeight
      })
      // 设置每个缩略图宽
      $('.picture_item').css({
        width: this.itemWidth
      })
      // 设置放大后图片容器的宽高,left
      $('.right_contanier').css({
        left: this.middleImgWidth,
        width: imgWidth,
        height: imgWidth
      })
      // 设置放大图片的宽高(图片的放大倍数)
      $('.right_contanier .big_img').css({
        width: imgWidth * this.zoom,
        height: imgWidth * this.zoom
      })
    })
  },
  methods: {
    getphone(){
      var _this = this;
      _this.$http
        .post("/api/user/phonesorts", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.lists = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get(){
      var _this = this;
      _this.$http
        .post("/api/user/detail", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.list = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gouwuche(){
      this.$router.push('/money')
    },
    shouye() {
      this.$router.push('/')
    },
    addgouwuche(){
        var _this = this
        _this.$router.push({
                      name: 'money',//这里必须有，没有的话传过去的值为undefined
                      path: '/money',
                      params: {
                        Id: '1'
                      }
                  })
  
    },
    // 产品图片鼠标移入事件,显示阴影,显示大图
   getPosition: function(element){ 
            var dc = document, 
            rec = element.getBoundingClientRect(), 
            x = rec.left, // 获取元素相对浏览器视窗window的左、上坐标 
            y = rec.top; 
            // 与html或body元素的滚动距离相加就是元素相对于文档区域document的坐标位置 
            x += dc.documentElement.scrollLeft || dc.body.scrollLeft; 
            y += dc.documentElement.scrollTop || dc.body.scrollTop; 
            return { 
                left: x, 
                top: y 
            }; 
        },
        handleMove(evt) {
            var larger = this.$refs.larger;
            var shadow = this.$refs.shadow;
            var big = this.$refs.big;
            var pos = this.getPosition(this.$refs.choose);
            var shadowRect = shadow.getBoundingClientRect();
            var bigRect = big.getBoundingClientRect();
            var contentRect = this.$refs.content.getBoundingClientRect();
            var maxX = contentRect.width - shadowRect.width;
            var maxY = contentRect.height - shadowRect.height;
 
            var X = evt.pageX - pos.left - shadowRect.width / 2;
            var Y = evt.pageY - pos.top - shadowRect.height / 2;
 
            if (X <= 0) {
                X = 0;
            }
            if (X >= maxX) {
                X = maxX;
            }
            if (Y <= 0) {
                Y = 0;
            }
            if (Y >= maxY) {
                Y = maxY;
            }
            // 防止遮罩层粘滞，跟随鼠标一起滑出大图位置
            var bigX = X * bigRect.width / contentRect.width;
            var bigY = Y * bigRect.height / contentRect.height;
            //  bigX / bigW = X / contentW,主图和遮罩层之间存在两倍关系，放大图和原图之间也有两倍关系
            shadow.style.left = X + "px";
            shadow.style.top = Y + "px";
 
            // console.log(X, Y, bigX, bigY);
 
            big.style.left = -bigX + "px";
            big.style.top = -bigY + "px";
 
            larger.style.display = "block";
            shadow.style.display = "block";
        },
        handleOut(evt) {
            var larger = this.$refs.larger;
            var shadow = this.$refs.shadow;
            larger.style.display = "none";
            shadow.style.top = "-1000px";
        }

  },
  
}
</script>
<style scoped>
    /* @import '../assets/detail.css'; */
    /* @import '../assets/common.css'; */
.choose {
    width: 400px;
    height: 600px;
    float: left;
    margin: 10px 0 0 10px;
}
 
.content {
    width: 400px;
    height: 400px;
    position: relative;
}
 
.content img {
    width: 400px;
    height: 400px;
}
#listshow {
    width: 400px;
    height: 100px;
    margin-top: 20px;
}
 
#listshow li {
    width: 98px;
    height: 100px;
    float: left;
    border: 1px solid #666;
}
 
#listshow li img {
    width: 98px;
    height: 100px;
}
 
#listshow .selected {
    border-color: brown;
}
 
.larger {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 170px;
    left: 260px;
    float: left;
    overflow: hidden;
    display: none;
}
 
.larger img {
    width: 800px;
    height: 800px;
    position: absolute;
    left: 0;
    top: 0;
}
 
.shadow {
    width: 200px;
    height: 200px;
    background-color: rgba(145, 200, 200, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    display: none;
}
</style>
