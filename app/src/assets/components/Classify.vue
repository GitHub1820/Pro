<template>
  <div class="header">
    <div class="search-wrap">
      <div class="search">
        <form action="http://wap.lingshi.com//search/ls" id="tosearch" method="get">
          <div class="ui-suggestion-mask">
            <input name="keyword" type="text" placeholder="请输入查找的零食" id="keyword" autocomplete="off">
          </div>
        </form>
      </div>
    </div>
    <div id="tabs" class="ui-tabs">
			<ul class="tbl-type ui-tabs-nav">
				<li class="on" style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">
          <a href="javascript:;">零售</a></li>
				<li style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);"><a href="javascript:;">批发</a></li>
			</ul>
		</div>
		<div style="position: relative;">
				<ul class="sort" id="ls">
					<li class="on" v-for="(task,i) of tasks" :key="i" @click="active(i)" >{{task}}</li>
				</ul>
        <!-- 坚果炒货 -->
        <div class=" ui-panel" :style="mystyle[0]">
					<ul class="panel-dir">
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=87">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462635335851217.png"></span>
								<span class="name">瓜子</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=83">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462651008354793.png"></span>
								<span class="name">花生</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=78">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462691507143663.png"></span>
								<span class="name">栗子</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=282">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805615415638918.png"></span>
								<span class="name">坚果</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=257">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462706561709255.png"></span>
								<span class="name">豆类</span>
							</a>
						</li>
					</ul>
				</div>
        <!-- 饼干糕点 -->
        <div class=" ui-panel" :style="mystyle[1]">
					<ul class="panel-dir">
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=53">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444461948069218241.png"></span>
								<span class="name">饼干</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=230">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462094523091863.png"></span>
								<span class="name">威化饼</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=51">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462122421055456.png"></span>
								<span class="name">曲奇</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=205">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462172439141108.png"></span>
								<span class="name">苏打/夹心饼干</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=231">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462185379011895.png"></span>
								<span class="name">涂层饼干</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=232">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462192729911887.png"></span>
								<span class="name">中式糕点</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=192">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462201762843935.png"></span>
								<span class="name">蛋卷/酥/松塔/糕点</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=283">
								<span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805419060655477.png"></span>
								<span class="name">蛋糕</span>
							</a>
						</li>
						<li>
							<a href="http://wap.lingshi.com/search/ls?typeid=299">
								<span class="icon"><img src="http://wap.lingshi.com/images/fenlei_default.png"></span>
								<span class="name">面包</span>
							</a>
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script scoped>
import { setInterval, clearInterval } from 'timers';
export default {
  data(){
    return {
      tasks:[
        "坚果炒货","饼干糕点","糖果巧克力","蜜饯果干","肉类制品","海味零食",
        "膨化零食","饮料/罐头/牛奶","豆菌笋类","速食/方便面","进口零食","品牌零食"
        ],
        mystyle:[
          {width:"100%"},{width:"-1%"},{width:"-1%"},{width:"-1%"},{width:"-1%"},{width:"-1%"},
          {width:"-1%"},{width:"-1%"},{width:"-1%"},{width:"-1%"},{width:"-1%"},{width:"-1%"}
        ]
    }
  },
  methods:{
    active(i){
      // console.log(i);
      // console.log(this.mystyle[i].width);
      var n=0;
      var m=100
      for(var j in this.mystyle){
        if(j!=i){
          var timer1=setInterval(()=>{
            m-=1;
            this.mystyle[j].width=m+"%";
            console.log(this.mystyle[j].width);
            if(m<=0){
              clearInterval(timer1);
            }
          },2);
        }else{
          var timer2=setInterval(()=>{
            n+=5;
            this.mystyle[i].width=n+"%";
            if(n>=100){
              clearInterval(timer2);
            }
          },20);
        }
      }
    }
  }
}
</script>

<style scoped>
/* 搜索 */
.search-wrap {
    border-bottom: 1px solid #bfbfbf;
}
.search {
    border: 1px solid #dbdbdb;
    border-radius: 4rem;
    background: #fff;
    margin: 1rem;
    height: 1.9rem;
}
.ui-suggestion-mask {
    position: relative;
    z-index: 100;
    display: -webkit-box;
}
.ui-suggestion-mask input {
    -webkit-box-flex: 1;
    display: block;
}
.search input {
    border: none;
    width: 100%;
    border-radius: 4rem;
    height: 1.9rem;
    line-height: 1.9rem;
    text-indent: 3rem;
    background: url(../assets/icon.png) -14.35rem .1rem no-repeat;
    background-size: 17rem 17rem;
    font-size: 0.9rem;
}

/* nav */
.ui-tabs-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.tbl-type {
    display: table;
    width: 100%;
}

.header .tbl-type li {
    width: 50%;
    height: 4rem;
    display: table-cell;
    text-align: center;
    background: #fff;
}
.header .tbl-type li.on a {
    border-bottom: .2rem solid #ff3861;
    color: #f0506e !important;
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
/* 侧边栏 */
.sort {
  overflow-y: auto;
  overflow-y:none;
  overflow-x: hidden;
  background: #eee;
	border-right: 1px solid #666;
	width: 105px;
  height:465px;
}
.sort li.on {
    background: #fff;
}
.sort li {
    border-bottom: 1px #dbdbdb solid;
		width: 100%;
    height: 10%;
    line-height: 53px;
     color: #777;
    font-size: 0.6rem;
}
/* 右侧商品 */
.ui-panel {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 105px;
    top: 0rem;
    padding: 10px;
    background: #fff;
    color: #666;
    border-left: 1px solid #ccc;
    transition: transform 350ms ease;
}
.panel-dir {
    width: 76%;
}
.panel-dir li {
    box-sizing: border-box;
    width: 32%;
    text-align: center;
    margin: 1rem auto 0;
    float: left;
}
.panel-dir li .icon {
    width: 100%;
    display: block;
    margin: 0 auto;
}
.panel-dir li img {
    width: 100%;
}
.panel-dir li .name {
    color: #999;
    font-size: 1.1rem;
}
</style>