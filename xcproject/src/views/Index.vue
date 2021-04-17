<template>
  <div>
    <!-- 未登录状态显示未登录页头 -->
    <my-header v-if="this.$store.state.islogin == 0"></my-header>
    <!-- 登录状态显示登录的页头 -->
    <my-headerlogin v-else></my-headerlogin>
    <!-- 悬浮搜索栏部分 -->
    <div class="container position-relative">
      <!-- 悬浮搜索框 -->
      <div
        class="top_search d-flex align-items-center"
        :style="
          top == 1
            ? 'position:fixed;backgroundColor:#4c558a;top:0;left:50%;transform:translatex(-50%)'
            : ''
        "
      >
        <!-- 搜索栏左边 -->
        <div class="search_left ">
          <!-- 搜索栏左边， 名店购目的地，弹性 -->
          <div
            class="search_left_word d-flex justify-content-around align-items-center"
          >
            <span class="h5 font-weight-bold text-white">名店购目的地</span>
            <a class=" text-white h6" href="javascript:;" v-if="arrow !== 1"
              >全球商户</a
            >
            <a class="hidden_arrow text-white h6" v-else></a>
          </div>
          <!-- 搜索栏左边。当搜索框悬浮在网页头部的时候显示下拉菜单内容，否则只显示标题悬浮在网页顶部。-->
          <div class="address_con" :class="address == 1 ? 'none' : 'block'">
            <div v-for="(item, i) in shopBuy" :key="i">
              <h5 class="text-white font-weight-bold ml-2 pt-3">
                {{ item.title }}
              </h5>
              <div
                class="position_line1 row justify-content-start no-gutters ml-2"
              >
                <a
                  class="text-white font_sm col-3"
                  :class="'text-' + item2.color"
                  href="javascript:;"
                  target="_blank"
                  v-for="(item2, i2) in item.children"
                  :key="i2"
                  >{{ item2.place }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 右搜索栏 -->
        <div class="d-flex dropdown pt-1 ml-1">
          <!-- form表单和下拉 a标签 -->
          <div class="search_right ">
            <input
              class="form-control search_bar  dropdown-toggle"
              data-toggle="dropdown"
              type="text"
              placeholder="请输入商户中/英文名"
            />
            <ul class="dropdown-menu mt-0 reference_menu">
              <li>
                <span class="reference_search reference_title ml-1"
                  >热门搜索</span
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >DFS旗下T广场（澳门四季名店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >雅丽—国际品牌免税店（威尼斯人购物中心店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >卡地亚（澳门永利皇宫店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >蒂芙尼（永利名店街店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >江诗丹顿（永利皇宫店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >莎莎（新威尼斯人店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >雅婷—国际品牌免税店（巴黎人购物中心店）</a
                >
              </li>
              <li>
                <a class="reference_search ml-1 d-block w-100 py-1" href="#"
                  >伯爵（永利皇宫）</a
                >
              </li>
            </ul>
          </div>
          <a class="search_btn text-white h5" href="#">搜索</a>
        </div>
      </div>
    </div>

    <div class="container-fluid bg_col">
      <!-- 搜索轮播图 -->
      <div id="demo1" data-ride="carousel" class="carousel ">
        <div class="carousel-inner main_carousel">
          <div class="carousel-item active">
            <img class="h-100" src="../../public/img/banner1.jpg" alt="" />
          </div>
          <div class="carousel-item">
            <img class="h-100" src="../../public/img/banner2.jpg" alt="" />
          </div>
          <div class="carousel-item">
            <img class="h-100" src="../../public/img/banner3.jpg" alt="" />
          </div>
          <div class="carousel-item">
            <img class="h-100" src="../../public/img/banner4.jpg" alt="" />
          </div>
        </div>
        <ul
          class="carousel-indicators search_lunbo justify-content-end mr-5 mb-0"
        >
          <li data-target="#demo1" data-slide-to="0" class="active"></li>
          <li data-target="#demo1" data-slide-to="1"></li>
          <li data-target="#demo1" data-slide-to="2"></li>
          <li data-target="#demo1" data-slide-to="3"></li>
        </ul>
      </div>

      <div class="container">
        <!-- 全球名店强推 -->
        <div class="shopping_recommend mt-5">
          <div class="row no-gutters">
            <div class="col-sm-12 col-lg-9 world_shop">
              <h4>全球名店强推</h4>
              <div class="row no-gutters">
                <!-- 全球购轮播图 文字随动轮播不会-->
                <div class="col-sm-12 col-lg-8 ">
                  <div class="carousel" data-ride="carousel" id="demo2">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          class="w-100"
                          src="../../public/img/worldbanner1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="w-100"
                          src="../../public/img/worldbanner2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="w-100"
                          src="../../public/img/worldbanner3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <ul class="carousel-indicators world_shop">
                      <li
                        data-slide-to="0"
                        data-target="#demo2"
                        class="active"
                      ></li>
                      <li data-slide-to="1" data-target="#demo2"></li>
                      <li data-slide-to="2" data-target="#demo2"></li>
                    </ul>
                    <a
                      href="#demo2"
                      data-slide="prev"
                      class="carousel-control-prev worldshop_prev"
                    >
                      <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a
                      href="#demo2"
                      data-slide="next"
                      class="carousel-control-next worldshop_next"
                    >
                      <span class="carousel-control-next-icon"></span>
                    </a>
                  </div>
                </div>
                <!-- 全球购商品页面 -->
                <div class="col-sm-12 col-lg-4">
                  <div class=" ml-3 ">
                    <div class="w260h130">
                      <a href="#"
                        ><img
                          class="h-100 w-100"
                          src="/img/worldshop1.jpg"
                          alt=""
                      /></a>
                    </div>
                    <div class="bg-white">
                      <a class="text-muted font_sm shop_name" href="#"
                        >Concourse D（Perfumes and Cosmetics）</a
                      >
                      <a class="text-muted font_sm shop_name" href="#"
                        >迪拜国际机场T1航站楼D出发区（香水化妆品区店）</a
                      >
                    </div>
                  </div>
                  <div class=" ml-3 mt-3">
                    <div class="w260h130">
                      <a href="#"
                        ><img
                          class="h-100 w-100"
                          src="img/worldshop2.jpg"
                          alt=""
                      /></a>
                    </div>
                    <div class="bg-white">
                      <a class="text-muted font_sm shop_name" href="#">
                        Tiffany & Co.（Macau - Wynn Esplanade）</a
                      >
                      <a class="text-muted font_sm shop_name" href="#"
                        >蒂芙尼（永利名店街店）</a
                      >
                    </div>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-3 myself_own pl-3">
              <h4 class="mb-2">我的名店购</h4>
              <div class="text-center border_btm bg-white py-3">
                <img src="/img/refound.jpg" alt="" />
                <a class="ml-1 font_sm text-muted" href="#">返现明细</a>
              </div>
              <div class="text-center border_btm bg-white py-3">
                <img src="/img/introduction.jpg" alt="" />
                <a class="ml-1 font_sm text-muted" href="#">使用说明</a>
              </div>
              <div class="text-center border_btm bg-white py-3">
                <img src="/img/problems.png" alt="" />
                <a class="ml-1 font_sm text-muted" href="#">常见问题</a>
              </div>
              <div class="text-center bg-white py-1">
                <img src="/img/shoppingerweicode.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- 奢品大牌 三图轮播图不会写 hover显示不同文字-->
        <div class="mt-5">
          <h4>奢品大牌</h4>
          <!-- 奢牌轮播图-->
          <div class="luxary">
            <vue-slick-carousel
              infinite
              :initialSlide="2"
              :slidesToShow="3"
              autoplay
              :speed="2000"
              :slidesToScroll="1"
              swipeToSlide
            >
              <div><img src="img/luxary1.jpg" /></div>
              <div><img src="img/luxary2.jpg" /></div>
              <div><img src="img/luxary3.jpg" /></div>
              <div><img src="img/luxary4.jpg" /></div>
              <div><img src="img/luxary5.jpg" /></div>
              <div><img src="img/luxary6.jpg" /></div>
            </vue-slick-carousel>
          </div>
        </div>
        <!-- 精选享返礼 -->
        <div class="ret_gift mt-5">
          <div class="row no-gutters">
            <div class="col-sm-12 col-lg-9">
              <h4>精选享返礼</h4>
              <div class="row no-gutters" >
                <div class="col-8">
                  <div class="row no-gutters">
                    <div class="col-sm-6 pr-2 mb-2" @click="toDetails('isa')">
                      <a href="javascript:;"><img class="w-100 " src="img/gift1.jpg" alt=""/></a>
                    </div>
                    <div class="col-sm-6 pr-2 mb-2" @click="toDetails('鲁尔德奥莱')">
                      <a href="javascript:;"
                        ><img class="w-100 " src="img/gift2.jpg" alt=""
                      /></a>
                    </div>
                    <div class="col-sm-6 pr-2 mt-3" @click="toDetails('dubai')">
                      <a href="javascript:;"
                        ><img class="w-100 " src="img/gift3.jpg" alt=""
                      /></a>
                    </div>
                    <div class="col-sm-6 pr-2 mt-3" @click="toDetails('chic')">
                      <a href="javascript:;"
                        ><img class="w-100 " src="img/gift4.jpg" alt=""
                      /></a>
                    </div>
                  </div>
                </div>
                <div class="col-4 border border-primary" @click="toDetails('sasa')">
                  <div>
                    <a href="javascript:;"
                      ><img class="w-100 h-100" src="img/gift5.jpg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-3">
              <div class="d-flex justify-content-around align-items-end">
                <h4>购物攻略</h4>
                <a class="font_sm mb-1 text-muted" href="#"
                  >更多<img class="ml-1" src="img/arrow.png" alt=""
                /></a>
              </div>
              <div class="bg-white h-80 p-2 mx-4">
                <div>
                  <div>
                    <img class="w-100" src="img/shoppingstrategy.png" alt="" />
                  </div>
                  <a class="shop_strategy pl-2 " href="#">爱意圣诞，点亮新年</a>
                </div>
                <ul class="list-unstyled mb-0 pt-2 shop_list">
                  <li class="d-flex py-1_5">
                    <b class="shop_dot mr-1 "></b
                    ><a class="shop_name" href="#">澳门购物“薅羊毛”大全;</a>
                  </li>
                  <li class="d-flex py-1_5">
                    <b class="shop_dot mr-1 "></b
                    ><a class="shop_name" href="#">澳门必逛珠宝店铺优惠合集;</a>
                  </li>
                  <li class="d-flex py-1_5">
                    <b class="shop_dot mr-1 "></b
                    ><a class="shop_name text-truncate" href="#"
                      >佛罗伦萨小镇：体验意式风情·尽享精致生活;</a
                    >
                  </li>
                  <li class="d-flex py-1_5">
                    <b class="shop_dot mr-1 "></b
                    ><a class="shop_name" href="#">海南免税额度提高至10万元;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 热门目的地 标签页选项卡-->
        <div class="h_dextinations mt-5 row no-gutters">
          <div class="col-9">
            <div class="d-flex align-items-end tab_nav position-relative">
              <h4 class="mr-2 ">热门目的地</h4>
              <ul class="nav nav_places">
                <li class="places_item">
                  <a
                    href="javascript:;"
                    class="places_link pb-0"
                    v-for="(v, i) of places"
                    :key="i"
                    @mouseover="Hot(i)"
                  >
                    {{ v.places }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="">
              <div class=" mt-2">
                <div class="row no-gutters">
                  <div
                    class=" col-3 p-1"
                    v-for="(value, index) of destionation"
                    :key="index"
                  >
                    <div class="position-relative">
                      <div><img class="w-100" :src="value.image" alt="" /></div>
                      <span
                        :style="value.img_url2"
                        v-if="value.img_url2 != null"
                        class="font_sm text-white img_icon position-absolute"
                        >{{ value.discount_name2 }}</span
                      >
                      <span
                        :style="value.img_url1"
                        v-if="value.img_url1 != null"
                        class="font_sm text-white img_icon2 position-absolute"
                        >{{ value.discount_name1 }}</span
                      >
                    </div>
                    <div class="details w-100 px-2 bg-white text-left">
                      <a class="text-truncate text-muted font-sm" href="#">{{
                        value.bname
                      }}</a>
                      <a class="text-truncate shop_address" href="#">{{
                        value.location
                      }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
/* 背景颜色 */
.container-fluid {
  margin-top: 6rem;
}

.bg_col {
  background-color: #f1f1f1;
}
/*左右总搜索栏样式*/
.top_search {
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 10;
}
/* 左搜索栏样式 */
.search_left {
  width: 250px;
  height: 44px;
}
.search_left_word {
  width: 250px;
  height: 44px;
  background-color: #4c558a;
  position: relative;
}
.address_con {
  width: 250px;
  height: 400px;
  background-color: #626a9e;
  z-index: 20 !important;
}
/*左边搜索栏悬浮箭头样式 */
.hidden_arrow {
  border-width: 10px;
  border-style: solid;
  border-color: white transparent transparent transparent;
  position: absolute;
  top: 15px;
  right: 20px;
}
/*悬浮搜索栏悬浮式 */
.none {
  display: none !important;
}
.block {
  display: block;
}
.search_left:hover > .address_con {
  display: block !important;
}
.search_left:hover .hidden_arrow {
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
  position: absolute;
  top: 5px;
  right: 20px;
}

/* 右搜索栏样式 */
.search_right {
  width: 785px;
  height: 40px;
}
.search_bar {
  border: 2px solid #4c558a;
  border-radius: 0px;
}
.search_bar:focus {
  box-shadow: 0 0 0 0 #ffffff;
  border-color: #4c558a;
}
.search_btn {
  display: block;
  width: 140px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #4c558a;
}
.search_btn:hover {
  text-decoration: none;
}
/* 输入框下拉菜单样式 */
.reference_search {
  text-decoration: none;
  color: #595959;
  font: 0.8rem "Microsoft yahei";
}
.reference_menu li a:hover {
  text-decoration: none;
  color: white;
  background-color: #626a9e;
}
.reference_title {
  color: #ff5613;
}
.reference_menu {
  width: 785px;
}
/* 搜索轮播指示器样式更改 */
.main_carousel {
  height: 400px;
} /*设置主轮播图高度*/
.search_lunbo li {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: rgba(f, f, f, 0.5);
}
.search_lunbo .active {
  width: 0.8rem;
  height: 0.4rem;
  border-radius: 30%;
  background-color: #ffffff;
}
/* 全球购轮播指示器样式更改 */
.world_shop li {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 0.3rem;
}
.world_shop .carousel-indicators .active {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #4c558a;
}
/* 全球购轮播箭头样式更改 */
.worldshop_prev,
.worldshop_next {
  width: 4%;
  height: 10%;
  background: gray;
  border-radius: 0.25rem;
  top: 40%;
}
/* 全球购商铺图片样式 */
.w260h130 {
  width: 260px;
  height: 105px;
}
/* 名店购样式 */
.border_btm {
  border-bottom: 2px dotted gray;
}
/* 奢品大牌 轮播图 */
.luxary {
  height: 180px;
}
/* 奢牌 轮播箭头样式更改 */
.luxary_prev,
.luxary_next {
  width: 4%;
  height: 10%;
  background: gray;
  border-radius: 0.25rem;
  top: 40%;
}
/* 购物攻略样式 */
.h-85 {
  height: 80%;
}
.shop_strategy {
  height: 50px;
  line-height: 50px;
  display: block;
  background-color: #4c558a;
  text-align: left;
  color: white;
  font-size: 14px;
}
.shop_strategy:hover {
  color: white;
}
.py-1_5 {
  padding: 5px 0px;
}
.shop_dot {
  display: block;
  width: 4px;
  height: 4px;
  margin-top: 10px;
  background-color: #8a8a8a;
}
.shop_name {
  font-size: 14px;
  color: #333333;
}
.shop_name:hover {
  color: black;
}
/* 热门目的地样式 */
.nav_places {
  list-style: none;
  padding-top: 1px;
  position: absolute;
  top: -4px;
  left: 130px;
}
.places_link {
  float: left;
  font-size: 14px;
  color: #595959;
  text-decoration: none;
  width: 74px;
  height: 39px;
  padding: 0px 15px;
  text-align: center;
  line-height: 39px;
  margin-top: 1px;
}
.nav_places > li > a:hover {
  border: 1px solid #6a6a6a;
  border-bottom-color: #f1f1f1;
}
.tab_nav {
  border-bottom: 1px solid #a6a6a6;
} /*设置地区下边框*/
.details a {
  display: block;
  width: 150px;
}
.shop_address {
  color: #595959;
  font-size: 14px;
}
.img_icon {
  width: 54px;
  height: 24px;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
  right: 5px;
  bottom: 5px;
  display: block;
}
.img_icon2 {
  width: 54px;
  height: 24px;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
  right: 65px;
  bottom: 5px;
  display: block;
}
</style>
<script>
export default {
  data() {
    return {
      //名店购目的地列表
      shopBuy: {},
      //控制搜索框左边箭头的隐藏显示
      arrow: 0,
      //控制搜索框的悬浮
      top: 0,
      //控制搜索框左边的悬浮
      address: 0,
      //热门目的地城市列表
      places: [],
      //热门目的地列表
      destionation: [],
      did: 30,
    };
  },
  mounted() {
    //获取名店购目的地信息
    this.Shopping();
    //获取热门目的地信息
    this.Hot(0);
    //获取热门目的地城市信息
    this.HotCity();
    //监听页面滚动事件
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    //鼠标离开搜索栏左边箭头菜单隐藏
    // notShowMenu(){
    // this.address=1;
    // },
    //鼠标悬浮搜索栏左边箭头菜单显示
    // showMenu(){
    // this.address=0;
    // },
    //页面滚动函数
    scroll() {
      //定义页面向上滚出的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < 400) {
        //不发生变化
        this.arrow = 0;
        this.top = 0;
        this.address = 0;
      } else if (scrollTop > 400) {
        //悬浮搜索框
        this.arrow = 1;
        this.top = 1;
        this.address = 1;
      }
    },
    Hot(i) {
      let object = {
        id: i + 30,
      };
      this.instance
        .get("/hot_destinations?" + this.qs.stringify(object))
        .then((res) => {
          this.destionation = [];
          res.data[0].results.forEach((item) => {
            if (item.image != null) {
              item.image = require("../../public/img/" + item.image);
            }
            this.destionation.push(item);
          });
          // this.destionation=res.data[0].results;
          console.log(res.data[0].results);
        });
    },
    Shopping(){
      this.instance.get("/index").then((res) => {
      // console.log(res.data);
      this.shopBuy = res.data;
    });
    },
    HotCity(){
      this.instance.get("/places").then((res) => {
      this.places = res.data;
      // console.log(res.data);
    });
    },
    toDetails(name){
      this.$router.push(`/details/${name}`)
    }
  },
};
</script>
