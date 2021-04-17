<template>
  <header id="header">
    <div class="container-fluid px-0">
      <!--第一行 栅格，水平导航 -->
      <div class="bg_color">
        <div
          class="container row no-gutters align-items-center justify-content-center m-auto"
        >
          <div class="col-2">
            <div class="d-flex align-items-center">
              <div class="">让旅行更幸福</div>
              <div class="lan_list1 ml-4">
                <a class="text-muted d-inline-block" href="#"
                  ><i class="_spirit1"></i>Language</a
                >
                <div class="lan_list2">
                  <div class="row no-gutters">
                    <div class="col-4">
                      <a class="text-muted" href="#"
                        ><i class="lan_spirit1"></i>简体中文</a
                      >
                    </div>
                    <div class="col-4">
                      <a class="text-muted" href="#"
                        ><i class="lan_spirit2"></i>English(United States)</a
                      >
                    </div>
                    <div class="col-4">
                      <a class="text-muted" href="#"
                        ><i class="lan_spirit3"></i>English(United Kindom)</a
                      >
                    </div>
                    <div class="col-4">
                      <a class="text-muted" href="#"
                        ><i class="lan_spirit4"></i>繁體中文 (中國香港)</a
                      >
                    </div>
                    <div class="col-4">
                      <a class="text-muted" href="#"
                        ><i class="lan_spirit5"></i>English(Hong Kong,China)</a
                      >
                    </div>
                    <div class="col-4">
                      <a class="text-white" href="#"
                        ><i class="lan_spirit6"></i>韩语版</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-7 offset-3">
            <!-- 水平导航 -->
            <ul class="nav">
              <li class="nav-item">
                <a href="#" class="nav-link"
                  >你好{{ this.$store.state.username.data }}</a
                >
              </li>
              <li class="nav-item">
                <el-button @click="logout" size="mini" class="nav-link"
                  >退出</el-button
                >
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-muted right_bor"
                  ><i class="pic_msg"></i>消息</a
                >
              </li>
              <li class="nav-item">
                <div class="my_xc">
                  <a href="#" class="nav-link text-muted right_bor">我的携程</a>
                  <div class="my_xc2">
                    <div class="py-2">我的收藏</div>
                    <div class="py-2">我的优惠券</div>
                    <div class="py-2">常用信息</div>
                    <div class="py-2">我的钱包</div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="my_order">
                  <a href="#" class="nav-link text-muted right_bor">我的订单</a>
                  <ul class="my_order2 list-unstyled">
                    <li class="py-2">机票+相关订单</li>
                    <li class="py-2">酒店订单</li>
                    <li class="py-2">旅游订单</li>
                    <li class="py-2">火车票订单</li>
                    <li class="py-2">全部订单</li>
                    <li class="py-2">手机号查订单</li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-muted right_bor">客服中心</a>
              </li>
              <li class="nav-item phone_qrcode">
                <a href="#" class="nav-link px-1 mx-3"
                  ><i class="pic_phone"></i
                ></a>
                <div class="phone_qrcode2 bg-white p-1 text-center">
                  <img
                    class="pt-2"
                    src="../../public/img/phoneerweima.jpg"
                    alt=""
                  />
                  <p class="font_12px my-2">手机扫码快速下载</p>
                  <a class="d-inline-block w-100 text-white font_12px" href="#"
                    >携程旅行手机版</a
                  >
                </div>
              </li>
              <li class="nav-item wechat_qrcode">
                <a href="#" class="nav-link px-1 mx-3"
                  ><i class="pic_wechat"></i
                ></a>
                <div class="wechat_qrcode2 bg-white p-1 text-center">
                  <img
                    class="pt-2"
                    src="../../public/img/wechaterweima_.jpg"
                    alt=""
                  />
                  <p class="font_12px mb-0">扫一扫</p>
                  <p class="font_12px mt-0">了解爆款旅行好货</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- hd_count 第二行logo-->
      <div
        class="container pre_ d-flex justify-content-between align-items-center position-relative px-0"
      >
        <div>
          <img class="w-50" src="../../public/img/c_logo2020.png" alt="" />
        </div>
        <!-- 电话号常规下显示两行，hover显示完整，不会写-->
        <ul class="list-unstyled py-2 mt-2 text-right _hiddenphone">
          <li class="font_sm text-muted px-1">境内:95010</li>
          <li class="font_sm text-muted px-1">（或）400-830-6666</li>
          <li class="font_sm text-muted px-1 _hiddenphone2">
            香港（中国）：+ 852-3008-3295
          </li>
          <li class="font_sm text-muted px-1 _hiddenphone2">
            境外：+ 86-21-3406-4888
          </li>
        </ul>
      </div>

      <!-- base_nav -->
      <!-- 不带数字的col和选项卡嵌套？ -->
      <div class="base_nav">
        <ul class="nav nav-tabs bg-primary _title justify-content-center">
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">首页</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">酒店</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">旅游</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">跟团游</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">自由行</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">机票</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">火车</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white"
              >汽车.船</a
            >
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">用车</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">门票</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">攻略</a>
          </li>
          <li class="nav-item">
            <a href="#d12" data-toggle="tab" class="nav-link active text-white"
              >全球购</a
            >
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">礼品卡</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">商旅</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">目的地</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">金融</a>
          </li>
          <li class="nav-item">
            <a href="#" data-toggle="tab" class="nav-link text-white">更多</a>
          </li>
        </ul>
        <!-- subway_internal 预留位置 -->
        <div
          class="tab-content container subway_internal border border-primary "
        >
          <div id="d12" class="tab-pane active">
            <ul class="breadcrumb bg-transparent pt-0">
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">名店购</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">旅游购物商城</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">退税</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">银联特惠</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">万千赏</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="#">外币兑换</a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* 第一行样式 */
.bg_color {
  background-color: #f4f4f4;
  font-size: 12px;
  color: #333;
  height: 36px;
} /* 设置背景颜色 */
/* 添加水平导航栏 */
._spirit1 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/spirit20190918.png) no-repeat -5px -5px;
} /* Language图标设置 */
/* 多国语言下拉菜单设置 */
.lan_list2 {
  display: none;
} /* 下拉菜单隐藏状态*/
.lan_list1 > a {
  text-decoration: none;
  position: relative;
} /* 调整A标签样式 */
.lan_list1:hover {
  background-color: white;
  line-height: 36px;
  width: 88px;
  height: 36px;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
} /* Language悬停状态样式 */
.lan_list1:hover .lan_list2 {
  display: block;
  position: absolute;
  top: 34px;
  left: 100px;
  z-index: 10;
  background-color: white;
  color: #4c4c4c;
  width: 500px;
} /* 下拉菜单显示状态 */
.lan_spirit1 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px 0px;
} /* 下拉菜单中文精灵图 */
.lan_spirit2 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px -300px;
} /* 下拉菜单美国精灵图 */
.lan_spirit3 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px -397px;
} /* 下拉菜单英国精灵图 */
.lan_spirit4 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px -27px;
} /* 下拉菜单香港精灵图 */
.lan_spirit5 {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px -27px;
} /* 下拉菜单香港英文精灵图 */
.lan_spirit6 {
  display: inline-block;
  width: 60px;
  height: 20px;
  vertical-align: middle;
  background: url(../../public/img/language.png) no-repeat 0px -51px;
} /* 下拉菜单韩语精灵图 */
/* 第一行右侧水平导航栏 */
.right_bor {
  border-right: 1px solid #dddddd;
} /* 右边框整体样式 */
/* 精灵图位置样式 */
.pic_msg,
.pic_phone,
.pic_wechat {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.pic_msg {
  background: url(../../public/img/spirit20190918.png) no-repeat -9px -64px;
}
.pic_phone {
  background: url(../../public/img/spirit20190918.png) no-repeat -43px -7px;
}
.pic_wechat {
  background: url(../../public/img/spirit20190918.png) no-repeat -43px -35px;
}
/* my_xc下拉菜单样式 */
.my_xc {
  position: relative;
} /* 相对定位调整菜单位置 */
.my_xc2 {
  display: none;
} /* 下拉菜单隐藏 */
.my_xc:hover {
  display: inline-block;
  width: 86px;
  height: 36px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 3px;
} /* 标题悬停样式 */
.my_xc:hover .my_xc2 {
  display: block;
  width: 86px;
  background-color: white;
  font-size: 12px;
  position: absolute;
  top: 33px;
  left: -1px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 3px;
} /* 下拉菜单悬浮显示 */
/* my_order下拉菜单样式 */
.my_order {
  position: relative;
} /* 相对定位调整菜单位置 */
.my_order2 {
  display: none;
} /* 下拉菜单隐藏 */
.my_order:hover {
  display: inline-block;
  width: 86px;
  height: 36px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 3px;
} /* 标题悬停样式 */
.my_order:hover .my_order2 {
  display: block;
  width: 86px;
  background-color: white;
  font-size: 12px;
  position: absolute;
  top: 35px;
  left: -1px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 3px;
} /* 下拉菜单悬浮显示 */
/* 电话图标下拉菜单样式 */
.phone_qrcode {
  position: relative;
} /* 相对定位调整菜单位置 */
.phone_qrcode2 > a {
  line-height: 36px;
  background: #2477e3;
  opacity: 0.5;
  text-decoration: none;
} /* 调整A标签样式 */
.phone_qrcode2 {
  width: 144px;
  position: absolute;
  top: 35px;
  left: -98px;
  display: none;
} /* 相对定位调整菜单位置,下拉菜单隐藏  */
.phone_qrcode:hover .phone_qrcode2 {
  display: block;
  border: 1px solid #f4f4f4;
  border-top: 0px;
  z-index: 50;
} /* 下拉菜单悬浮样式 */
.phone_qrcode:hover a:first-child {
  background: white;
  border: 1px solid #f4f4f4;
  border-bottom: 0px;
} /* 精灵图标悬浮样式 */
/* 微信图标下拉菜单样式 */
.wechat_qrcode {
  position: relative;
} /* 相对定位调整菜单位置 */
.wechat_qrcode2 {
  width: 144px;
  position: absolute;
  top: 35px;
  left: -98px;
  display: none;
} /* 相对定位调整菜单位置,下拉菜单隐藏  */
.wechat_qrcode:hover .wechat_qrcode2 {
  display: block;
  border: 1px solid #f4f4f4;
  border-top: 0px;
  z-index: 50;
} /* 下拉菜单悬浮样式 */
.wechat_qrcode:hover a:first-child {
  background: white;
  border: 1px solid #f4f4f4;
  border-bottom: 0px;
} /* 精灵图标悬浮样式 */

/* 第二行样式 */
.pre_ {
  height: 80px;
}
.base_nav_height {
  height: 40px;
}
.subway_internal {
  height: 38px;
  padding-left: 650px;
  line-height: 38px;
  margin: 0 auto;
  font-size: 14px;
}
/*调整面包屑导航的样式*/
.breadcrumb-item + .breadcrumb-item::before {
  content: "|";
}
/* 下拉电话菜单样式 */
._hiddenphone {
  position: absolute;
  top: 10px;
  right: 0px;
}
._hiddenphone2 {
  display: none;
} /* 下拉菜单隐藏 */
._hiddenphone:hover {
  display: inline-block;
  width: 190px;
  background-color: white;
  border: 1px solid #dddddd;
} /* 标题悬停样式 */
._hiddenphone:hover ._hiddenphone2 {
  display: block;
  background-color: white;
  font-size: 12px;
  width: 190px;
} /* 下拉菜单悬浮显示 */

.nav-link:focus {
  background-color: #0aa1ed;
}
.nav-link.active {
  background-color: #0aa1ed !important;
}

._title {
  margin: 0 auto;
}
.base_nav {
  height: 40px;
}
.el-button {
  margin-top: 3px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      window.sessionStorage.clear("token");
      window.localStorage.clear("token");
      this.$router.push("/login");
    },
  },
};
</script>
