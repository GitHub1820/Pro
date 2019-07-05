<template>
  <div>
    <div class="user">
	    <div class="head"><img src="http://wap.lingshi.com/images/user-head.png"></div>
	    <div class="info1"><span>用户94725</span><span class="member">普通会员</span></div>
    </div>
    <div class="info2">
      <div class="tbl-type fixed">
        <div class="tbl-cell width50 border-r">我的余额：<span>¥0.00</span></div>
        <div class="tbl-cell width50">我的积分：<span>510</span></div>
      </div>
    </div>
    <div class="userList">
      <ul class="fixed">
        <li><a href="javascript:;"><span class="user-icon1"></span>我的订单</a></li>
        <li><a href="javascript:;"><span class="user-icon2"></span>收货地址</a></li>
        <li><a href="javascript:;"><span class="user-icon3"></span>领代金券</a></li>
        <li><a href="javascript:;"><span class="user-icon4"></span>我的收藏</a></li>
        <li><a href="javascript:;"><span class="user-icon5"></span>浏览历史</a></li>
        <li><a href="javascript:;"><span class="user-icon6"></span>去购物车</a></li>
        <li><a href="javascript:;"><span class="user-icon7"></span>我的信息</a></li>
        <li><a href="javascript:;"><span class="user-icon8"></span>反馈意见</a></li>
      </ul>
    </div>
    <a href="javascript:;" class="user_btn logout">退出</a>
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
.user {
  background: url(../assets/user-bg.png) repeat;
  background-size: 37.5rem 16.4rem;
  height: 10rem;
  color: #fff;
  position: relative;
  font-size: 1.2rem;
  line-height: 0.4rem;
  padding-top: 1rem;
  top: 0%;
}
.user .head {
    display: block;
    width: 6.4rem;
    height: 6.4rem;
    margin: 0 auto;
}
.user .head img {
    width: 100%;
}
fieldset, img {
    border: 0;
}
.user .info1 {
    text-align: center;
    margin-top: 1rem;
}
.user .member {
    background: #ffac41;
    border-radius: 6px;
    padding: 1px 4px;
}
/* 余额积分 */
.info2 .tbl-cell {
    height: 3rem;
    line-height: 3rem;
    font-size: 0.8rem !important;
    background: #fff;
    border-bottom: 1px solid #dbdbdb;
}
.info2 .border-r {
    border-right: 1px solid #dbdbdb;
}
.width50 {
    width: 50%;
}
.tbl-cell {
    display: table-cell;
}
/* 列表 */
.userList {
    position: relative;
    background: #fff;
    margin-bottom: 1rem;
}
.userList li {
    position: relative;
    display: block;
    line-height: 3rem;
    font-size: 0.9rem;
    text-indent: -58%;
    border-bottom: 1px solid #dbdbdb;
    color: #666;
    background: url(../assets/arrow-r.png) right no-repeat;
    background-size: 1.75rem 1.35rem;
}
.userList li a {
    display: block;
    color: #333;
}
.user-icon1, .user-icon2, .user-icon3, .user-icon4, .user-icon5, .user-icon6, .user-icon7, .user-icon8, .user-icon9 {
    background: url(../assets/user-icon.png) no-repeat;
    border:1px solid red;
    background-size: 2rem 37rem;
    margin-right: .5rem;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 0.5rem;
}
.user-icon2 {
    background-position: 0 -3rem;
}
.user-icon3 {
    background-position: 0 -6rem;
}
.user-icon4 {
    background-position: 0 -9rem;
}
.user-icon5 {
    background-position: 0 -12.7rem;
}
.user-icon6 {
    background-position: 0 -15.7rem;
}
.user-icon7 {
    background-position: 0 -18.7rem;
}
.user-icon8 {
    background-position: 0 -21.7rem;
}
.user-icon9 {
    background-position: 0 -24.7rem;
}
a.user_btn {
    width: 55%;
    height: 2rem;
    line-height: 2rem;
    border-radius: .5rem;
    background: #ff3861;
    color: #fff;
    display: block;
    text-align: center;
    text-indent: 0;
    margin: 0 auto;
}
</style>