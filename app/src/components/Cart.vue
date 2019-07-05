<template>
  <div>
    <div style="margin-top:112px;"></div>
    <div class="header">
      <div class="text">购物车</div>
      <ul class="tbl-type" id="tabs">
        <li id="ls" class="select"><a href="javascript:;">零售</a></li>
        <li id="pf"><a href="javascript:;">批发</a></li>
      </ul>
    </div>
    <div id="box">
      <div><img src="../assets/cart.png"></div>
      <p class="text">购物车空空的，赶紧去挑选商品吧！</p>
      <a href="./home" class="btn">返回首页</a>
    </div>
  </div>
</template>

<script scoped>
export default {
  data(){
    return {
      
    }
  },
}
</script>

<style scoped>
.header .text {
    height: 4rem;
    background: #ff3861;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    line-height: 4rem;
}
.header .tbl-type li a{
    line-height: 4rem;
    display: inline-block;
    height: 100%;
    width: 100%;
    color: #bfbfbf;
    font-size: 1.4rem;
    border-top: .1rem solid #bfbfbf;
}
/* 内容 */
#box{
  width: 100%;
  height:29rem;
  margin-top: 1rem;
  background-color: #f6f6f6;
}
.text {
    /* font-size: 1.4rem; */
    color: #999;
}
a.btn {
    width: 9.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: .5rem;
    background: #ff3861;
    color: #fff;
    display: block;
    text-align: center;
    font-size: 1.3rem;
    margin: 1rem auto;
}
</style>