<template>
  <div>
    <!-- 未登录状态显示未登录页头 -->
    <my-header v-if="this.$store.state.islogin == 0"></my-header>
    <!-- 登录状态显示登录的页头 -->
    <my-headerlogin v-else></my-headerlogin>
    <div class="container p-0" id="app">
      <!-- 详情页轮播图 -->
      <div
        class="carousel position-relative detail_lumbo"
        data-ride="carousel"
        id="detail_lumbo"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img class="w-100" src="/img/detaillunbo1.jpg" alt="" />
          </div>
          <div class="carousel-item">
            <img class="w-100" src="/img/detaillunbo2.jpg" alt="" />
          </div>
        </div>
        <ul class="carousel-indicators position-absolute">
          <li data-slide-to="0" data-target="#detail_lumbo" class="active"></li>
          <li data-slide-to="1" data-target="#detail_lumbo"></li>
        </ul>
      </div>
      <!-- 搜索栏 -->
      <div class="search_bar row no-gutters align-items-center">
        <!-- 面包屑导航 -->
        <div class="bread_nav col-sm-12 col-lg-6 ">
          <ul class="breadcrumb  bg-transparent mb-0">
            <li class="breadcrumb-item">
              <a class="font_sm" href="#">名店购</a>
            </li>
            <li class="breadcrumb-item">
              <span class="font_sm"
                >全球（找到<span class=" text-warning">124</span>家商户）</span
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-lg-4 offset-2 search_frame">
          <div
            class="border border-primary d-flex justify-content-end align-items-center"
          >
            <div class="dropdown">
              <input
                data-toggle="dropdown"
                class="form-control font_sm border-0 rounded-0 w-350"
                type="text"
                placeholder="请输入商户中/英文名"
              />
              <ul class="dropdown-menu w-100">
                <li class="pl-2">
                  <a class="py-1 text-warning" href="#">热门搜索</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">DFS旗下T广场（澳门四季名店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">蒂芙尼（永利名店街店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">卡地亚（澳门永利皇宫店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">江诗丹顿（永利皇宫店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">伯爵（永利皇宫）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">ISA时装（澳门旗舰店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">宝珀（澳门银河店）</a>
                </li>
                <li class="pl-2">
                  <a class="py-1 " href="#">周大福（澳门银河分行店）</a>
                </li>
              </ul>
            </div>
            <a href="#"><img src="/img/search.png" alt=""/></a>
          </div>
        </div>
      </div>
      <!--搜索条件框  -->
      <div class="search_list ">
        <div
          class="search_listcontent d-flex justify-content-between align-items-center"
        >
          <div class="pl-2 position-relative">
            <div class="tiaojian">
              <span class="font_sm text-muted">条件</span>
              <a
                class="font_sm _isa text-align-left text-white pl-1 ml-2"
                href="#"
                >搜索"{{ name }}"
                <span class="_chahao position-absolute"></span>
              </a>
            </div>
          </div>
          <div><a class="font_sm pr-2" href="#">清除条件</a></div>
        </div>
      </div>
      <!-- 内容页 -->
      <div class="d-flex">
        <!-- 左边导航栏及详情内容部分 -->
        <div class="top_nav">
          <!-- 导航栏 -->
          <div class="top_navcontent mt-3 row no-gutters">
            <div
              class="col-2 text-center h-100 nav_block position-relative"
              style="line-height:50px"
            >
              <span id="global" class="_navName">所在地:全球</span>
              <span class="_arr1"></span>
              <ul id="country" class="country_menu pl-1 pb-2">
                <!-- 所在地大洲菜单 -->
                <li v-for="(item, i) of containent" :key="item.id">
                  <div
                    class="d-flex align-items-center mt-2 _target open"
                    @click="Country(i)"
                  >
                    <span class="country_font mt-3 ml-3">{{
                      item.containent
                    }}</span>
                    <span class="ml-3 mt-2 arrowup"></span>
                  </div>
                  <div class="font_sm" v-show="countryshow == i ? true : false">
                    <a
                      class="text-center mt-1"
                      v-for="(item2, i2) of item.children"
                      :key="i2"
                      @click="placeShow(item2)"
                      >{{ item2 }}</a
                    >
                  </div>
                </li>
              </ul>

              <!-- 所在地城市菜单 -->
              <div id="places" class="places_menu">
                <div style="z-index:10">
                  <a
                    class="text-muted ml-4 d-inline-block my-2"
                    href="javascript:;"
                    >{{ placesList.name }}</a
                  >
                  <ul
                    class="d-flex flex-wrap justify-content-between places_city px-2"
                  >
                    <li>
                      <a
                        href="#"
                        class="text-center m-1"
                        v-for="(item3, i3) of placesList.children"
                        :key="i3"
                        >{{ item3 }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-2 text-center h-100 nav_block position-relative"
              style="line-height:50px"
            >
              <span class=" _navName shopping_type">商户类型</span>
              <span class="_arr1"></span>
              <div class="shop_menu bg-white position-absolute">
                <div
                  class="d-flex justify-content-around align-items-center border-0 mb-0"
                >
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 1 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i1"
                      :checked="i == 1 ? 'true' : ''"
                      @click="input(1)"
                      type="checkbox"
                      name="shoptype"
                      value="1"
                    /><label for="i1">不限</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 2 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i2"
                      :checked="i == 2 ? 'true' : ''"
                      @click="input(2)"
                      type="checkbox"
                      name="shoptype"
                      value="2"
                    /><label for="i2">综合商场</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 3 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i3"
                      :checked="i == 3 ? 'true' : ''"
                      @click="input(3)"
                      type="checkbox"
                      name="shoptype"
                      value="3"
                    /><label for="i3">品牌店</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 4 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i4"
                      :checked="i == 4 ? 'true' : ''"
                      @click="input(4)"
                      type="checkbox"
                      name="shoptype"
                      value="4"
                    /><label for="i4">奥特莱斯</label>
                  </div>
                </div>
                <div class="border-0 ">
                  <button class="shop_btn ">确定</button>
                  <button class="shop_btn ml-5">取消</button>
                </div>
              </div>
            </div>
            <div
              class="col-2 text-center h-100 nav_block position-relative"
              style="line-height:50px"
            >
              <span class="_navName"> 优惠类型</span>
              <span class="_arr1"></span>
              <div class="shop_menu discount_type bg-white position-absolute">
                <div class="d-flex flex-wrap align-items-center border-0 mb-0">
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 21 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i21"
                      :checked="i == 21 ? 'checked' : ''"
                      @click="input(21)"
                      type="checkbox"
                      name="discount_type"
                      value="1"
                      style="margin-left:-10px;"
                    /><label for="i21">不限</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 22 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i22"
                      :checked="i == 22 ? 'checked' : ''"
                      @click="input(22)"
                      type="checkbox"
                      name="discount_type"
                      value="2"
                    /><label for="i22">立减券</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 23 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i23"
                      :checked="i == 23 ? 'checked' : ''"
                      @click="input(23)"
                      type="checkbox"
                      name="discount_type"
                      value="3"
                    /><label for="i23">返现券</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 24 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i24"
                      :checked="i == 24 ? 'checked' : ''"
                      @click="input(24)"
                      type="checkbox"
                      name="discount_type"
                      value="4"
                    /><label for="i24">赠礼券</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 25 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i25"
                      :checked="i == 25 ? 'checked' : ''"
                      @click="input(25)"
                      type="checkbox"
                      name="discount_type"
                      value="4"
                    /><label for="i25">代金券</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 26 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i26"
                      :checked="i == 26 ? 'checked' : ''"
                      @click="input(26)"
                      type="checkbox"
                      name="discount_type"
                      value="4"
                    /><label for="i26">万千赏</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 27 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i27"
                      :checked="i == 27 ? 'checked' : ''"
                      @click="input(27)"
                      type="checkbox"
                      name="discount_type"
                      value="1"
                    /><label for="i27">兑换券</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 28 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i28"
                      :checked="i == 28 ? 'checked' : ''"
                      @click="input(28)"
                      type="checkbox"
                      name="discount_type"
                      value="2"
                    /><label for="i28">银联特惠</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 29 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i29"
                      :checked="i == 29 ? 'checked' : ''"
                      @click="input(29)"
                      type="checkbox"
                      name="discount_type"
                      value="3"
                    /><label for="i29">会员卡</label>
                  </div>
                </div>
                <div class="border-0 ">
                  <button class="shop_btn ">确定</button>
                  <button class="shop_btn ml-5">取消</button>
                </div>
              </div>
            </div>
            <div
              class="col-2 text-center h-100 nav_block position-relative"
              style="line-height:50px"
            >
              <span class="_navName">免退税</span>
              <span class="_arr1"></span>
              <div class="shop_menu no_tax bg-white position-absolute">
                <div
                  class="d-flex justify-content-around align-items-center border-0 mb-0"
                >
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 31 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i31"
                      :checked="i == 31 ? 'checked' : ''"
                      @click="input(31)"
                      type="checkbox"
                      name="tax_type"
                      value="1"
                    /><label for="i31">不限</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 32 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i32"
                      :checked="i == 32 ? 'checked' : ''"
                      @click="input(32)"
                      type="checkbox"
                      name="tax_type"
                      value="2"
                    /><label for="i32">免税</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 33 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i33"
                      :checked="i == 33 ? 'checked' : ''"
                      @click="input(33)"
                      type="checkbox"
                      name="tax_type"
                      value="3"
                    /><label for="i33">退税</label>
                  </div>
                  <div
                    class="border-0 w-25 py-2 font_12px"
                    :style="
                      i == 34 ? 'background-color:#2577e2;color:white' : ''
                    "
                  >
                    <input
                      id="i34"
                      :checked="i == 34 ? 'checked' : ''"
                      @click="input(34)"
                      type="checkbox"
                      name="tax_type"
                      value="4"
                    /><label for="i34">携程退税</label>
                  </div>
                </div>
                <div class="border-0 ">
                  <button class="shop_btn ">确定</button>
                  <button class="shop_btn ml-5">取消</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 详情页部分 -->
          <div
            class="detail_content d-flex flex-column justify-content-between"
          >
            <div v-for="(value, i) of details" :key="i">
              <div class="detail_page d-flex ">
                <!-- 图片部分 -->
                <div class="detail_img">
                  <a href="#"
                    ><img style="width:267px;height:200px;" :src="value.image"
                  /></a>
                </div>
                <!-- 信息部分 -->
                <div class="d-flex flex-column justify-content-between ml-3">
                  <!-- 信息上半部分 -->
                  <div class="mt-2">
                    <p class="mb-0">
                      <a class="detail_text" href="#">{{ value.brand }}</a>
                    </p>
                    <p class="mb-0">
                      <a class="detail_text" href="#">{{ value.bname }}</a>
                    </p>
                    <p class="mb-0 detail_location">
                      <span>{{ value.country }}</span
                      ><span>{{ value.city }}</span>
                    </p>
                  </div>
                  <!-- 信息下半部分 -->
                  <div>
                    <div class="d-flex align-items-cneter my-2">
                      <span class="detail_discount" :style="value.img_url1">{{
                        value.others_1.discount_name
                      }}</span>
                      <div class="detail_hidetext position-relative">
                        <span class="ml-2 text-truncate detail_discount_text">{{
                          value.others_1.discount_content
                        }}</span>
                        <!-- 气泡对话框 -->
                        <div class="detail_hide1" v-show="value.img_url1 != ''">
                          <span class="_arrows1"></span>
                          <span class="_arrows2"></span>
                          <div>
                            {{ value.others_1.discount_content }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 背景图片尝试用json-server里的图片地址代替，背景属性用:绑定变量-->
                    <div class="d-flex align-items-cneter my-2">
                      <span class="detail_discount" :style="value.img_url2">{{
                        value.others_2.discount_name
                      }}</span>
                      <div class="detail_hidetext position-relative">
                        <span class="ml-2 text-truncate detail_discount_text">{{
                          value.others_2.discount_content
                        }}</span>
                        <!-- 气泡对话框 -->
                        <div class="detail_hide2" v-show="value.img_url2 != ''">
                          <span class="_arrows1"></span>
                          <span class="_arrows2"></span>
                          <div>
                            {{ value.others_2.discount_content }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--分页选择部分  -->
          <div class="mt-3 d-flex justify-content-end align-items-center">
            <!-- 分页部分 -->
            <div class="mr-3">
              <ul class="page_count mb-0 font_sm position-relative">
                <li>
                  <a href="javascript:;"
                    ><i class="page_arrow  position-absolute"></i
                  ></a>
                </li>
                <li v-for="i of page" :key="i" @click="change(i)">{{ i }}</li>
                <li>
                  <a href="javascript:;" class="ml-1"
                    >下一页<i class="page_arrow arrow2 position-absolute"></i
                  ></a>
                </li>
              </ul>
            </div>
            <!-- 页数选择部分 -->
            <div class="font_sm">
              <span>到</span>
              <input class="page_num text-center" type="text" placeholder="1" />
              <span>页</span>
              <button class="_btn ml-3">确定</button>
            </div>
          </div>
        </div>
        <!-- 右边图片链接部分 -->
        <div class="top_img d-flex align-items-center ml-3">
          <div>
            <img class="w-100" src="/img/detail_img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!--页脚 -->
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
/* 详情页轮播图样式 */
.detail_lumbo {
  margin-top: 50px;
}

.carousel-indicators {
  right: -1000px;
  top: 100px;
}

.carousel-indicators li {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}
.carousel-indicators .active {
  width: 1.2rem;
  height: 0.5rem;
  border-radius: 5px;
  background-color: #ffffff;
}

/* 搜索栏面包屑样式 */
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

/* 搜索框样式 */
.w-350 {
  width: 350px;
}

.form-control:focus {
  box-shadow: 0 0 0 0 #ffffff;
}

/* 搜索框下拉菜单样式 */
.dropdown-menu li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  color: #1c1c1a;
  font-size: 12px;
}

.dropdown-menu li:hover > a {
  background-color: #007aff;
  color: white;
}
/* 搜索条件框样式 */
.search_listcontent {
  border: 1px solid #c9c9c9;
  height: 50px;
}

._isa {
  display: inline-block;
  width: 95px;
  height: 20px;
  background: #5e6aa8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

._isa:hover {
  text-decoration: none;
}

.tiaojian {
  display: flex;
  align-items: center;
}

._chahao {
  display: inline-block;
  width: 8px;
  height: 8px;
  top: 6px;
  right: 5px;
  background: url(/img/chahao.png) no-repeat 0px 0px;
}

/* 左边导航栏及详情内容部分 */
.top_nav {
  width: 85%;
  position: relative;
}

.top_navcontent {
  height: 50px;
  border: 1px solid #c9c9c9;
}

.top_navcontent > div {
  border: 1px solid #c9c9c9;
}

.top_navcontent > div:hover {
  border-top: 2px solid #636a9e;
  border-bottom: 2px solid #fbfbfb;
}
/*导航栏三角样式 */
.arrowup {
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #5e6aa8 transparent;
} /*设置上三角样式*/

.arrowdown {
  border-width: 5px;
  border-style: solid;
  border-color: #5e6aa8 transparent transparent transparent;
} /*设置下三角样式*/

._arr1 {
  border-width: 5px;
  border-style: solid;
  position: absolute;
  top: 17px;
  left: 128px;
  border-color: transparent transparent #5e6aa8 transparent;
} /*设置导航栏三角形标识*/

._navName:hover + span {
  border-width: 5px;
  border-style: solid;
  position: absolute;
  top: 21px;
  border-color: #5e6aa8 transparent transparent transparent;
}
/* 全球 大洲下拉菜单整体样式 */
#country {
  z-index: 50;
  position: absolute;
  top: 46px;
  left: -1px;
  line-height: 20px;
  background-color: white;
  width: 300px;
  margin-top: 0px;
} /*整体位置背景样式*/

#country li {
  list-style: none;
}

#country li a {
  display: inline-block;
  width: 60px;
  height: 20px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#country li div:nth-child(2) {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
#country li a:hover {
  background-color: rgb(76, 85, 138);
  color: white;
  text-decoration: none;
}

.country_font {
  font-size: 18px;
  color: #5e6aa8;
}

.country_menu {
  display: none;
}
.places_menu {
  display: none;
  text-align: left;
  line-height: 20px;
}
.nav_block:hover > .country_menu {
  display: block;
}
.nav_block:hover > .places_menu {
  display: block;
}

/* 所在地城市菜单整体样式 */
#places {
  z-index: 20;
  background-color: white;
}

#places div {
  width: 200px;
  height: 100px;
  position: absolute;
  top: 48px;
  left: 299px;
  background-color: white;
  border: 2px solid #c9c9c9;
  font-size: 14px;
  width: 553px;
  height: 512px;
} /*设置国家对应地区的样式*/

#places > div > a:first-child {
  border-left: 3px solid #5e6aa8;
}

.places_city {
  list-style: none;
  border-top: 1px solid #c9c9c9;
}

.places_city a {
  display: inline-block;
  width: 63px;
  height: 20px;
  color: #333333;
}

.places_city a:hover {
  background-color: rgb(76, 85, 138);
  color: white;
  text-decoration: none;
}

/* 二级菜单默认隐藏 */
.country_menu li div:nth-child(2) {
  transition: all 0.5s linear;
} /*设置隐藏以及过度效果*/

.country_menu li .open + div {
  display: block;
  height: 58px;
} /*设置第一个div打开时的高度*/

.country_menu li:nth-child(2) .open + div {
  height: 48px;
} /*设置第二个div打开时的高度*/

.country_menu li:nth-child(3) .open + div {
  height: 38px;
} /*设置第三个div打开时的高度*/

.country_menu li:nth-child(4) .open + div {
  height: 48px;
} /*设置第四个div打开时的高度*/

.country_menu li:nth-child(5) .open + div {
  height: 48px;
} /*设置第五个div打开时的高度*/

.country_menu li:nth-child(6) .open + div {
  height: 48px;
} /*设置第六个div打开时的高度*/

.open span:last-child {
  border-width: 5px;
  border-style: solid;
  border-color: #5e6aa8 transparent transparent transparent;
} /*利用css兄弟关系样式动态设置三角符号的更改

/* 商户类型 下拉菜单样式 */
.shop_menu {
  width: 600px;
  top: 46px;
  left: -2px;
  border: 1px solid #c9c9c9;
  background-color: white;
  z-index: 10;
  border-top: 2px solid #fbfbfb;
  display: none;
} /*设置整体宽度,正常隐藏*/

.shop_menu div div {
  line-height: 20px;
} /*控制每个选项的高度*/

.navName:hover div {
  display: block;
} /*设置鼠标悬浮显示，鼠标移除隐藏*/

.shop_btn {
  outline: 0;
  line-height: 28px;
  width: 76px;
  height: 28px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #007aff;
  border-radius: 5px;
}
.shop_btn:hover {
  background-color: #007aff;
  opacity: 0.6;
}

.discount_type {
  width: 400px;
} /*调整优惠类型下拉框的宽度 */

.no_tax {
  width: 400px;
} /*调整免退税下拉框的宽度 */

.nav_block:hover > .shop_menu {
  display: block;
}

/* 内容详情页样式 */
.detail_content > div + div {
  margin-top: 30px;
} /*设置详情页的上外边距*/

.detail_page {
  height: 200px;
  border: 1px solid #c9c9c9;
} /*设置每个详情页的高度*/

.detail_img {
  width: 267px;
  height: 200px;
  display: block;
} /*说控制图片尺寸*/

.detail_text {
  font-size: 18px;
  color: #333333;
} /*设置详情页字体*/

.detail_location {
  font-size: 14px;
  color: #666666;
} /*设置地点字体样式*/

.detail_discount {
  font-size: 14px;
  display: inline-block;
  width: 64px;
  height: 24px;
  vertical-align: middle;
  color: white;
  text-align: center;
} /*优惠样式*/

.detail_discount_text {
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  color: #999999;
  display: inline-block;
  width: 180px;
} /*优惠字体背景样式*/

.detail_hide1,
.detail_hide2 {
  display: none;
  border: 1px solid #d2d2d2;
  width: 130px;
  height: 50px;
  color: #333333;
  font-size: 12px;
  background-color: white;
  word-break: break-all;
  z-index: 20;
} /*隐藏文字样式*/

.detail_hide1 {
  position: absolute;
  top: 25px;
  left: 90px;
}

.detail_hide2 {
  position: absolute;
  top: 25px;
  left: 100px;
}

.detail_hidetext:hover div {
  display: block;
}

/* 详情页气泡对话框样式 */
._arrows1 {
  border: 10px solid transparent;
  border-bottom: 10px solid #d2d2d2;
  position: absolute;
  top: -20px;
  left: 50px;
} /*带颜色部分*/

._arrows2 {
  border: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
  position: absolute;
  top: -19px;
  left: 50px;
} /*空白遮盖部分*/

/* 右边图片链接部分 */
.top_img {
  width: 15%;
}

/* 分页样式调整 */
.page_arrow {
  border-style: solid;
  border-width: 5px;
  top: 6px;
  left: 47px;
  border-color: transparent #ccc transparent transparent;
} /*分页箭头样式*/

.page_count {
  list-style: none;
  display: flex;
}

.page_count > li {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid #555;
  margin-left: 5px;
}

.page_count > li:last-child {
  width: 60px;
  height: 20px;
  text-align: left;
}

.arrow2 {
  top: 6px;
  left: 270px;
  border-color: transparent transparent transparent #0aa1ed;
}

.page_count > li:hover {
  cursor: pointer;
  background-color: lightskyblue;
  color: #fff;
  border: 0;
}

/* 页数选择部分 */
.page_num {
  width: 30px;
}

._btn {
  background-color: #eeeeee;
  border: solid 1px #aaa;
}
</style>
<script>
export default {
  data() {
    return {
      isAgree: false,
      //城市列表
      placesList: {
        name: "中国",
        children: [
          "全部",
          "北京",
          "上海",
          "南京",
          "天津",
          "河北",
          "武汉",
          "广州",
          "深圳",
          "重庆",
          "哈尔滨",
          "西安",
          "宝鸡",
          "河南",
          "贵州",
          "杭州",
          "苏州",
          "合肥",
          "长沙",
          "广西",
          "云南",
          "桂林",
          "东北",
        ],
      },
      //设置大洲和国家名称的列表
      containent: [],
      //控制大洲列表显示和隐藏
      countryshow: 0,
      continent: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      page: 6,
      count: 6,
      i: 0,
      details: [],
    };
  },
  props: ["name"],
  methods: {
    Country(id) {
      this.countryshow = id;
    },
    ContinentShow() {
      this.continent = true;
    },
    input(x) {
      this.i = x;
    },
    Show(x) {
      if (x == 2) {
        this.isShow2 = true;
      } else if (x == 3) {
        this.isShow3 = true;
      } else if (x == 4) {
        this.isShow4 = true;
      }
    },
    None(x) {
      if (x == 1) {
        this.continent = false;
      } else if (x == 2) {
        this.isShow2 = false;
      } else if (x == 3) {
        this.isShow3 = false;
      } else if (x == 4) {
        this.isShow4 = false;
      }
    },
    change(i) {
      this.instance.get(`/data${i}`).then((result) => {
        this.details = result.data;
      });
    },
    //点击国家显示对应城市菜单
    placeShow(item2) {
      //控制城市菜单的显示与否
      this.placesShow = true;
      //发送请求获取对应城市名称
      console.log(item2);
      this.instance.get(`/countryandplaces?name=${item2}`).then((res) => {
        let [data] = res.data;
        this.placesList = data;
        // console.log(this.placesList);
      });
    },
  },
  mounted() {
    //axios的post请求插入数据，做测试
    // this.instance.post("/data",
    // "brand=ISA&bname=ISA时装(中港城店)&country=中国&city=香港&image=/img/detailisa.jpg"
    // ).then(result=>{
    //   console.log(result.data);
    // });
    //axios删除请求,接口后面直接接id "/data/2"

    //详情列表信息
    this.instance.get("/data1").then((result) => {
      this.details = result.data;
      // console.log(result.data);
    });

    //大洲城市列表信息
    this.instance.get("/containentandplaces").then((res) => {
      //打印测试
      // console.log(res.data);
      this.containent = res.data;
    });
  },
};
</script>
