<template>
  <div class="main_box" id="main_box">
    <a class="back backOff" href="javascript:;">back</a>
    <div class="slider-wrap"><!--轮播图-->
      <img src="http://image.lingshi.com/images/201503/thumb_img/654_thumb_G_1426581263337.jpg" alt="" style="width:375px;">
    </div>	
    <div class="snacks_wrap">
      <ul class="fixed">
        <li class="noborder"><h5>越南Tipo白巧克力面包干鸡蛋饼300g</h5></li>
        <li class="noborder">
          <p class="price">¥16.00</p>
          <p class="price2">市场价：<del>¥22.00</del></p>
        </li>
        <li><div class="left">优惠</div><div class="right red">满68元98折，满88元96折，满118元94折，满158元92折，满208元90折，满298元88折</div></li>
        <li><div class="left">数量</div><div class="right black"><a class="num" href="javascript:;" id="number">1件<div class="go-icon"></div></a></div></li> 
        <li class="lh"><div class="left">配送</div><div class="right black"><p>广东省&gt;广州市&gt;天河区</p><p class="red">有货</p></div></li> 
		    <li class="lh"><div class="left">提示</div><div class="right black"><p>免邮政策</p><p class="red lh2">全国满88元包邮(除去代金券的净值)</p></div></li> 
	    </ul>
    </div> 
    <div class="comment_wrap"> 
      <div class="comment_title"><a href="javascript:;">商品评价<span>372人评论&gt;</span></a></div> 
      <div class="comment_content" id="main_comment">
      <div class="group fixed"><div class="left"><img src="/images/head.jpg" alt=""><div class="name">1761*</div></div><div class="right"><ul><li><span class="star5">5星</span><span class="date">2016-07-25</span></li><li class="comment">鸡蛋饼好好吃</li></ul> </div> </div><div class="group fixed"><div class="left"><img src="/images/head.jpg" alt=""><div class="name">1892*</div></div><div class="right"><ul><li><span class="star5">5星</span><span class="date">2016-07-23</span></li><li class="comment">真好吃，好吃的不得了。</li></ul> </div> </div><div class="group fixed"><div class="left"><img src="/images/head.jpg" alt=""><div class="name">1529*</div></div><div class="right"><ul><li><span class="star5">5星</span><span class="date">2016-07-25</span></li><li class="comment">做早餐，真的很不错。</li></ul> </div> </div><div class="group fixed"><div class="left"><img src="/images/head.jpg" alt=""><div class="name">1529*</div></div><div class="right"><ul><li><span class="star5">5星</span><span class="date">2016-07-25</span></li><li class="comment">做早餐，真的很不错。</li></ul> </div> </div><div class="group fixed"><div class="left"><img src="/images/head.jpg" alt=""><div class="name">1529*</div></div><div class="right"><ul><li><span class="star5">5星</span><span class="date">2016-07-17</span></li><li class="comment">真好吃，好吃的不得了。</li></ul> </div> </div></div>
    </div>
    <div class="goods-wrap3">
      <div class="title"><a href="javascript:;">看了又看</a></div>
      <div class="tbl-type goods-content" style="">
        <div style="width: 365px;" class="goods-content1">
          <div style="width: 365px;" class="goods-content2">
            <ul style="width: 365px;">
              <li>
                <a href="http://wap.lingshi.com/goods/index/819" class="img"><img src="http://image.lingshi.com/images/201305/thumb_img/819_thumb_G_1369728370819.jpg"></a>
                <div class="info"><p class="name">海牌海苔16g</p><p class="price">¥8.00</p></div>
              </li>
              <li>  
                <a href="http://wap.lingshi.com/goods/index/4800" class="img">
                  <img src="http://image.lingshi.com/images/201509/thumb_img/4800_thumb_G_1441866048031.jpg">
                </a>
                <div class="info"><p class="name">咪咪虾味条20g</p><p class="price">¥0.40</p></div>
              </li>
              <li>  
                <a href="http://wap.lingshi.com/goods/index/11618" class="img"><img src="http://image.lingshi.com/images/201508/thumb_img/11618_thumb_G_1440404096233.jpg"></a>
                <div class="info"><p class="name">牛浪汉烧烤牛肉60g*3包</p><p class="price">¥18.60</p></div>
              </li>
              <li>  
                <a href="http://wap.lingshi.com/goods/index/654" class="img"><img src="http://image.lingshi.com/images/201503/thumb_img/654_thumb_G_1426581263337.jpg"></a>
                <div class="info"><p class="name">越南Tipo白巧克力面包干鸡蛋饼300g</p><p class="price">¥16.00</p></div>
              </li>
				    </ul>
			    </div>
		    </div>
	    </div>
    </div>
    <div class="fixed"></div>
    <div class="all" id="up_more"><span>上拉查看图文详情</span></div>
    <div class="cart-wrap2" style="">
      <a href="javascript:;" id="add_cart" class="cart-btn">加入购物车</a>
      <a href="javascript:;" id="add_collect" class="collection1"></a>
      <a href="http://wap.lingshi.com/cart/" class="cart"><span id="suc_num">0</span></a>
    </div>
    <!--已经收藏的零食样式为-->
    <div id="backtotop" style="bottom: 7rem;"><a href="javascript:;" class="bttbg"></a></div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.main_box {
  overflow-y: auto;
  height: 100%;
  z-index: 10000;
}
a.back {
    display: block;
    width: 3rem;
    height: 3rem;
    position: fixed;
    left: 1.1rem;
    top: 1.1rem;
    background: url(../assets/back-icon.png) no-repeat;
    background-size: 3rem 3rem;
    text-indent: -9999rem;
    z-index: 10001;
}
a:link, a:visited {
    text-decoration: none;
    color: #333;
}
/* 轮播 */
.ui-slider {
    min-width: 240px;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.snacks_wrap {
    position: relative;
    background: #fff;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dbdbdb;
}
.fixed {
    display: block;
    min-height: 1%;
}
.snacks_wrap li.noborder {
    border-top: none;
}
.snacks_wrap li {
    position: relative;
    border-top: 1px solid #dbdbdb;
    display: block;
    line-height: 4rem;
    font-size: 1.3rem;
    margin: 0 1rem;
    color: #999;
    display: block;
    clear: both;
    position: relative;
}
.snacks_wrap h5 {
    color: #555;
    font-size: 1.5rem;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 500;
    font-family: "\5fae\8f6f\96c5\9ed1","Microsoft YaHei",s Arial, Helvetica, sans-serif;
}
/* 价格 */
.snacks_wrap .price {
    color: #ff304d;
    font-size: 2.5rem;
    position: relative;
    left: -.4rem;
}
/* 市场价 */
.snacks_wrap .price2 {
    color: #bbb;
    font-size: 1.2rem;
}
/* 优惠 */
.snacks_wrap .left {
    box-sizing: border-box;
    float: left;
    width: 15%;
}
.snacks_wrap .right {
    box-sizing: border-box;
    float: left;
    width: 75%;
}
.snacks_wrap .red {
    color: #e61952;
}
/* 数量 */
.snacks_wrap .black {
    color: #555;
}
.snacks_wrap .num {
    display: block;
}
.snacks_wrap .go-icon {
    position: absolute;
    top: 0;
    right: -1rem;
    display: block;
    width: 4rem;
    height: 4rem;
    background: url(../assets/icon.png) -17.2rem -5rem no-repeat;
    background-size: 20rem 20rem;
}
</style>