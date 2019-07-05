<template>
<div class="homepage">
    <div style="margin-top:112px;"></div>
    <!-- 顶部nav -->
    <div>
      <div class="header">
        <div class="text">中国零食网</div>
        <div class="search-icon">
          <a href="http://wap.lingshi.com/search">搜索</a>
        </div>
        <ul class="tbl-type"> 
          <li v-for="(task,i) of tasks" :key="i"><a href="javascript:;">{{task}}</a></li>
        </ul>
      </div>
    </div>
    <!-- 首页 -->
    <div>
        <!-- 订单/代金券/批发/浏览记录 -->
        <div class="category">
            <ul class="cate-menu tbl-type">
                <li><a href="javascript:;"><span class="menu1-icon"></span><span class="cate-name">我的订单</span></a></li>
                <li><a href="javascript:;"><span class="menu2-icon"></span><span class="cate-name">代金券</span></a></li>
                <li><a href="javascript:;"><span class="menu3-icon"></span><span class="cate-name">批发</span></a></li>
                <li><a href="javascript:;"><span class="menu4-icon"></span><span class="cate-name">浏览历史</span></a></li>
            </ul>
        </div>
        <div>
            <!--组合优惠-->
            <div class="goods-wrap">
                <div class="title">
                    <span>组合优惠</span>
                    <a href="javascript:;" class="more">更多&gt;&gt;</a>
                </div>
                <div class="tbl-type combination">
                    <div class="tbl-cell width33 snacks"  @click="product">
                        <div class="info">
                            <p class="p1">包邮</p>
                            <p class="p2">咪咪虾味条20g...</p>
                        </div> 
                        <a href="javascript:;" class="img"><img src="http://image.lingshi.com/images/201510/thumb_img/11633_thumb_G_1445572749095.jpg"></a>  
                        <span class="price">¥20.00</span>
                    </div>
                    <div class="tbl-cell width33 snacks" @click="product">
                        <div class="info">
                            <p class="p1">包邮</p>
                            <p class="p2">咪咪蟹味粒20g...</p>
                        </div> 
                        <a href="javascript:;" class="img"><img src="http://image.lingshi.com/images/201510/thumb_img/11634_thumb_G_1445572749902.jpg"></a>  
                        <span class="price">¥20.00</span>
                    </div>
                    <div class="tbl-cell width33 snacks"  @click="product">
                    <div class="info">
                        <p class="p1">包邮</p>
                        <p class="p2">牛浪汉烧烤牛肉6...</p>
                    </div> 
                    <a href="javascript:;" class="img"><img src="http://image.lingshi.com/images/201508/thumb_img/11618_thumb_G_1440404096864.jpg"></a>  
                    <span class="price">¥18.60</span>
                    </div>
                </div>
            </div>
            <!--进口零食-->	
            <div class="goods-wrap">
                <div class="title">
                    <span>进口零食</span>
                    <a href="javascript:;" class="more">更多&gt;&gt;</a>
                </div>
                <div class="import">
                    <ul class="nation tbl-type">
                        <li @click="product"><a href="javascript:;"><span class="nation1-icon"></span><span class="nation-name">欧美</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation2-icon"></span><span class="nation-name">越南</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation3-icon"></span><span class="nation-name">韩国</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation4-icon"></span><span class="nation-name">菲律宾</span> </a></li>
                    </ul> 
                    <ul class="nation tbl-type">
                        <li @click="product"><a href="javascript:;"> <span class="nation5-icon"></span><span class="nation-name">泰国</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation6-icon"></span><span class="nation-name">马来西亚</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation7-icon"></span><span class="nation-name">日本</span></a></li>
                        <li @click="product"><a href="javascript:;"><span class="nation8-icon"></span><span class="nation-name">印尼</span></a></li>
                    </ul>
                </div>
            </div>	
            <!-- 猜你喜欢 -->
            <div class="push-down"><div class="bd-b"></div><p>猜你喜欢</p></div>
            <!--加载更多-->
            <morepro></morepro>
            <!-- <div class="ui-refresh-down"><span class="ui-refresh-label">加载更多</span></div> -->
        </div>
    </div>
    <!-- 批发 -->
    <div></div>
    <!-- 秒杀 -->
    <div></div>
    <!-- 促销 -->
    <div></div>
    <!-- 进口 -->
    <div></div>
</div>
</template>

<script>
import Morepro from "./More.vue"
export default {
  data(){
    return {
        tasks:[
        "首页","批发","秒杀","促销","进口"
        ],
       
    }
  },
  components:{
    "morepro" : Morepro
  },
  methods: {
      product(){
          this.$toast({
            message: '抱歉，该商品已下架！',
            position: 'center',
            duration: 1000
        });
      }
  },
}
</script>

<style scoped>
/* 顶部 */
  .header{
    z-index: 99; 
    width: 100%;
  }
  .header .text {
    height: 4rem;
    width: 100%;
    background: #ff3861;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 1.9rem;
    font-family: "华文琥珀";
    line-height: 4rem;
}
.header .search-icon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1.1rem;
    right: 1.7rem;
}
.header .search-icon a {
    display: block;
    width: 2rem;
    height: 2rem;
    background: url("../assets/icon.png") 0 0 no-repeat;
    text-indent: -9999px;
    background-size: 20rem 20rem;
}
 /* 订单/代金券/批发/浏览记录 */
.category .tbl-type {
    display: table;
    width: 100%;
    height: 5rem;
    background: #fff;
    z-index: 99;
}
.category .tbl-type li {
    width: 25%;
    display: table-cell;
    text-align: center;
}
.category .tbl-type a {
    display: block;
    margin: 1rem auto 0;
    text-align: center;
    width: 5rem;
    height: 5rem;
}
.menu1-icon, .menu2-icon, .menu3-icon, .menu4-icon {
    display: inline-block;
    line-height: 2rem;
    width: 3.2rem;
    height: 3.2rem;
    background: url(../assets/icon.png) 0 -1.5rem no-repeat;
    text-indent: -9999px;
    background-size: 12rem 12rem;
}
.menu2-icon {
    background-position-x: -3.4rem;
}
.menu3-icon {
    background-position-y:-4.8rem;
}
.menu4-icon {
    background-position: -3.4rem -4.8rem;
}
.category .cate-name {
    display: block;
    font-size: 0.8rem;
    color: #999;
    line-height: .8rem;
}
/* 主页面 */
.goods-wrap {
    width: 100%;
    color: #999;
    background-color: #efeff4;
}
/* 组合优惠 */
.goods-wrap .title {
    position: relative;
    float: left;
    width: 20%;
}
.goods-wrap .title span {
    /* font-weight: bolder; */
    width: 50%;
    font-size: 0.92rem;
    margin-left: 5%;
    line-height: 2.6rem;
    color: #555;
}
.goods-wrap .title .more {
    font-size: 0.8rem;
    color: #777;
    position: absolute;
    bottom: .2rem;
    right: -377%;
}
.combination {
    height: 13.5rem;
    background: #fff;
}
.tbl-type {
    display: table;
    width: 100%;
}
.combination .snacks {
    text-align: center;
    vertical-align: middle;
    border-right: .25rem solid #f6f6f6;
}
.width33 {
    width: 30%;
}
.combination .p1 {
    color: #94c740;
    font-size: 1.2rem;
}
.combination .p2 {
    color: #999;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin: 0 auto;
}
.tbl-cell {
    display: table-cell;
}
.combination .img {
    width: 120px;
    height: 120px;
    margin-top: 2rem;
    display: block;
    margin: 0 auto;
}
.combination img {
    width: 100%;
    height: 100%;
}
.main img {
    vertical-align: top;
}
.combination .price {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 500;
    background: #f0506e;
    margin-top: 1rem;
    line-height: 1.4rem;
    padding: .1rem .8rem;
    border-radius: .3rem;
}
/* 进口零食 */
.area {
    height: 7rem;
    border-bottom: .25rem solid #f6f6f6;
}
.import .area li {
    width: 33%;
    display: table-cell;
    text-align: center;
    border-right: .25rem solid #f6f6f6;
}
.import .area a {
    display: block;
    width: 100%;
    height: 7rem;
}
.import1-icon, .import2-icon, .import3-icon {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(../assets/import.jpg) 0 0 no-repeat;
    background-size: 30rem 30rem;
}
.import2-icon {
    background-position: 0 -7rem;
}
.import3-icon {
    background-position: 0 -14rem;
}
/* 欧越韩菲 */
.nation {
    background: #fff;
}
.nation li {
    width: 24%;
    display: table-cell;
}
.nation a {
    display: block;
    padding-top: .5rem;
    margin: 0 auto;
    width: 100%;
    height: 8.5rem;
}
.nation1-icon, .nation2-icon, .nation3-icon, .nation4-icon, .nation5-icon, .nation6-icon, .nation7-icon, .nation8-icon {
    display: inline-block;
    vertical-align: middle;
    line-height: 2rem;
    width: 100%;
    height: 6.5rem;
    background: url(../assets/import.jpg) -12rem 0rem no-repeat;
    text-indent: -9999px;
    background-size: 30rem 30rem;
}
.nation2-icon {
    background-position: -18.5rem 0rem;
}
.nation3-icon {
    background-position: -12rem -7rem;
}
.nation4-icon {
    background-position: -18.5rem -7rem;
}
.nation5-icon {
    background-position: -12rem -14rem;
}
.nation6-icon {
    background-position: -18.5rem -14rem;
}
.nation7-icon {
    background-position: -12rem -21rem;
}
.nation8-icon {
    background-position: -18.5rem -21rem;
}
.nation .nation-name {
    display: block;
    font-size: 0.9rem;
    color: #555;
    /* line-height: 3.2rem; */
    text-align: center;
}
/* 猜你喜欢 */
.push-down {
    margin: .5rem;
    text-align: center;
    font-size: 1.3rem;
    color: #999;
}
/* 加载更多 */
.ui-refresh-down {
    width: 100%;
    background-color: #fff;
    height:5rem;
    padding-top: 14%;
    border-bottom: 1px solid #ccc;
    font-size: 19px;
    color: #888;
    text-align: center;
    line-height: 100%;
}

</style>