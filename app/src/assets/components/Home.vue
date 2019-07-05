<template>
  <div class="home">
    
    <!-- 内容 -->
    <!-- <div style="margin-top:112px;"></div> -->
    <div class="">
      <mt-tab-container v-model="selected" class="page-tabbar-container">
        <mt-tab-container-item id="homepage">
          <homepage></homepage>
        </mt-tab-container-item>
        <mt-tab-container-item id="classify">
          <classify></classify>
        </mt-tab-container-item>
        <mt-tab-container-item id="cart">
          <cart></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <me></me>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div style="margin-bottom: 70px;"></div>
    <!-- 底部nav -->
    <div>
      <mt-tabbar v-model="selected" class="mt-h" fixed>
        <mt-tab-item id="homepage" @click.native="changeState(0)" >
          <ul>
            <li id="nav1-icon" class="nav-icon"></li>
            <li class="cate-name">首页</li>
          </ul>	
        </mt-tab-item>
        <mt-tab-item id="classify" @click.native="changeState(1)">
          <ul>
            <li id="nav2-icon" class="nav-icon"></li>
            <li class="cate-name">分类</li>
          </ul>				
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="changeState(2)">
          <ul>
            <li id="nav3-icon" class="nav-icon"></li>
            <li class="cate-name">购物车</li>
          </ul>	
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <ul>
            <li id="nav4-icon" class="nav-icon"></li>
            <li class="cate-name">用户中心</li>
          </ul>			
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import lsLogin from './Lslogin.vue' 
import Homepage from './Homepage.vue'
import Classify from './Classify.vue' 
import Cart from './Cart.vue' 
import Me from './Me.vue' 
export default {
  data(){
    return {
      selected:"homepage",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  components: {
    "homepage":Homepage,
    "lslogin":lsLogin,
    "classify":Classify,
    "cart":Cart,
    "me":Me,
  },
  methods: {
    changeState(n){
      //console.log(n);
      for(var i=0;i<this.currentIndex.length;i++){
        if(i==n){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      } 
    },
  },
  
}
</script>

<style>
div.home{
  overflow: auto; /*溢出显示滚动条 */
}
 *{
    padding: 0px;
    margin: 0px;
  }
  div {
    display: block;
  }
  ul {
    list-style: none;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  
/* ul */
.tbl-type {
    display: table;
    width: 100%;
}
.header .tbl-type li {
    width: 20%;
    height: 3rem;
    display: table-cell;
    text-align: center;
    background: #fff;
}
.header .tbl-type li a {
    line-height: 3rem;
    display: inline-block;
    height: 3rem;
    padding: 0 .5rem;
    color: #f0506e;
}
.header .tbl-type li a.on {
    border-bottom: .2rem solid #ff3861;
}
/* 底部 */
.mt-h{
  height: 70px;
  
}
#nav1-icon, #nav2-icon, #nav3-icon, #nav4-icon {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background: url(../assets/icon.png) 0 -15rem no-repeat;
    background-size: 20rem 20rem;
    text-indent: -9999px;
    position: relative;
}
#nav1-icon {
    background-position: 0 -15rem;
}
#nav2-icon {
    background-position: -2.5rem -15rem;
    /* -2.5rem -17.5rem; */
}
#nav3-icon {
    background-position: -5rem -15rem;
    
}
#nav4-icon {
    background-position: -7.5rem -15rem;
}
/* 文字 */
.cate-name {
    display: block;
    text-align: center;
    width: 100%;
    height: 4.85rem;
    color: #999;
    background: #f8f8f8;
}
.mint-tabbar>.mint-tab-item.is-selected .cate-name{
    background-color:transparent;
    color: red !important;
}
.mint-tabbar>.mint-tab-item.is-selected .nav-icon{
    background-position-y:-17.5rem !important;
}
</style>