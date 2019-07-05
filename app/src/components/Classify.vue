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
				<li  @click="retail"><a href="javascript:;" :style="salestyle[0]">零售</a></li>
				<li  @click="wholesale"><a href="javascript:;" :style="salestyle[1]">批发</a></li>
			</ul>
		</div>
    <!-- 零售 -->
    <div v-show="isretail">
      <div style="position: relative;">
        <ul class="sort" id="ls">
          <li v-for="(task,i) of tasks" :key="i" @click="active(i)" :style="on[i]">{{task}}</li>
        </ul>
        <!-- 坚果炒货 -->
        <div class=" ui-panel" :style="mystyle[0]">
            <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462635335851217.png"></span>
                  <span class="name">瓜子</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462651008354793.png"></span>
                  <span class="name">花生</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462691507143663.png"></span>
                  <span class="name">栗子</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805615415638918.png"></span>
                  <span class="name">坚果</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
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
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444461948069218241.png"></span>
                  <span class="name">饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462094523091863.png"></span>
                  <span class="name">威化饼</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462122421055456.png"></span>
                  <span class="name">曲奇</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462172439141108.png"></span>
                  <span class="name">苏打/夹心饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462185379011895.png"></span>
                  <span class="name">涂层饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462192729911887.png"></span>
                  <span class="name">中式糕点</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462201762843935.png"></span>
                  <span class="name">蛋卷/酥/松塔/糕点</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805419060655477.png"></span>
                  <span class="name">蛋糕</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="../assets/break.png"></span>
                  <span class="name">面包</span>
                </a>
              </li>
            </ul>
        </div>
        <!-- 糖果巧克力 -->
        <div class=" ui-panel" :style="mystyle[2]">
          <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462427499510063.png"></span>
                  <span class="name">软糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462436667236319.png"></span>
                  <span class="name">硬糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462446629995029.png"></span>
                  <span class="name">棒棒糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462481626603011.png"></span>
                  <span class="name">含片</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462492781349315.png"></span>
                  <span class="name">果冻布丁</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462503822911460.jpg"></span>
                  <span class="name">龟苓膏</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805443826503961.png"></span>
                  <span class="name">巧克力</span>
                </a>
              </li>
          </ul>
        </div>
        <!-- 蜜饯果干 -->
        <div class=" ui-panel" :style="mystyle[3]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462529927980543.png"></span>
                <span class="name">梅类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462540052761158.png"></span>
                <span class="name">枣类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462553324650613.png"></span>
                <span class="name">葡萄干</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462570115542118.png"></span>
                <span class="name">山楂类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462586150899152.png"></span>
                <span class="name">水果干</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462597864910265.png"></span>
                <span class="name">芒果类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805549445711383.png"></span>
                <span class="name">果干/蔬菜干/枣</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 肉类制品 -->
        <div class=" ui-panel" :style="mystyle[4]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462339134883822.png"></span>
                <span class="name">鸡肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462352082932992.png"></span>
                <span class="name">鸭肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462365297849330.png"></span>
                <span class="name">牛肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462377164929878.png"></span>
                <span class="name">猪肉制品</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 海味零食 -->
        <div class=" ui-panel" :style="mystyle[5]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462910501050956.png"></span>
                <span class="name">鱼类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462924847403088.png"></span>
                <span class="name">海苔类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462958864058431.png"></span>
                <span class="name">鱿鱼类</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 膨化零食 -->
        <div class=" ui-panel" :style="mystyle[6]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805652526286217.png"></span>
                <span class="name">锅巴</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463010848953206.png"></span>
                <span class="name">米饼/米卷类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463033686131194.png"></span>
                <span class="name">虾片类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463085847841401.png"></span>
                <span class="name">脆脆条/尖角酥</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462986760306719.png"></span>
                <span class="name">薯片类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463068326156938.png"></span>
                <span class="name">爆米花/其他</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 饮料/罐头/牛奶 -->
        <div class=" ui-panel" :style="mystyle[7]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462765154308019.png"></span>
                <span class="name">咖啡</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462816271442025.png"></span>
                <span class="name">奶茶冲饮</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462832682743794.png"></span>
                <span class="name">冲饮</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462864336075056.png"></span>
                <span class="name">花果茶</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/milk.png"></span>
                <span class="name">牛奶</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/tin.png"></span>
                <span class="name">罐头</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/wangzai.png"></span>
                <span class="name">饮料</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/beer.png"></span>
                <span class="name">啤酒</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 豆菌笋类 -->
        <div class=" ui-panel" :style="mystyle[8]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463158998001342.png"></span>
                <span class="name">豆干/豆制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463172079245215.png"></span>
                <span class="name">竹笋/菌/菇</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 速食/方便面 -->
        <div class=" ui-panel" :style="mystyle[9]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805678964077906.png"></span>
                <span class="name">肠/肠仔</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463245677980653.png"></span>
                <span class="name">蛋类制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463255934972262.png"></span>
                <span class="name">方便面</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463268962828770.png"></span>
                <span class="name">速食品</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 进口零食 -->
        <div class=" ui-panel" :style="mystyle[10]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456911869631194300.jpg"></span>
                <span class="name">日本</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912296404938279.png"></span>
                <span class="name">韩国</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912312238116170.png"></span>
                <span class="name">马来西亚</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912326386607793.jpg"></span>
                <span class="name">菲律宾</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912342362492423.png"></span>
                <span class="name">印尼</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912354523819364.png"></span>
                <span class="name">泰国</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912375477396949.png"></span>
                <span class="name">越南</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912393458232813.png"></span>
                <span class="name">欧美</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912410634014790.png"></span>
                <span class="name">港澳台</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912429987029127.jpg"></span>
                <span class="name">德国</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 品牌零食 -->
        <div class=" ui-panel" :style="mystyle[11]">
          <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/brandlogo/1496384159172620773.jpg"></span>
                  <span class="name">有友</span>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
		<!-- 批发 -->
    <div v-show="!isretail">
      <div style="position: relative;">
        <ul class="sort" id="ls">
          <li v-for="(task,i) of tasks" :key="i" @click="active(i)" :style="on[i]">{{task}}</li>
        </ul>
        <!-- 坚果炒货 -->
        <div class=" ui-panel" :style="mystyle[0]">
            <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462635335851217.png"></span>
                  <span class="name">瓜子</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462651008354793.png"></span>
                  <span class="name">花生</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462691507143663.png"></span>
                  <span class="name">栗子</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805615415638918.png"></span>
                  <span class="name">坚果</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
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
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444461948069218241.png"></span>
                  <span class="name">饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462094523091863.png"></span>
                  <span class="name">威化饼</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462122421055456.png"></span>
                  <span class="name">曲奇</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462172439141108.png"></span>
                  <span class="name">苏打/夹心饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462185379011895.png"></span>
                  <span class="name">涂层饼干</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462192729911887.png"></span>
                  <span class="name">中式糕点</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462201762843935.png"></span>
                  <span class="name">蛋卷/酥/松塔/糕点</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805419060655477.png"></span>
                  <span class="name">蛋糕</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="../assets/break.png"></span>
                  <span class="name">面包</span>
                </a>
              </li>
            </ul>
        </div>
        <!-- 糖果巧克力 -->
        <div class=" ui-panel" :style="mystyle[2]">
          <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462427499510063.png"></span>
                  <span class="name">软糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462436667236319.png"></span>
                  <span class="name">硬糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462446629995029.png"></span>
                  <span class="name">棒棒糖</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462481626603011.png"></span>
                  <span class="name">含片</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462492781349315.png"></span>
                  <span class="name">果冻布丁</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462503822911460.jpg"></span>
                  <span class="name">龟苓膏</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805443826503961.png"></span>
                  <span class="name">巧克力</span>
                </a>
              </li>
          </ul>
        </div>
        <!-- 蜜饯果干 -->
        <div class=" ui-panel" :style="mystyle[3]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462529927980543.png"></span>
                <span class="name">梅类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462540052761158.png"></span>
                <span class="name">枣类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462553324650613.png"></span>
                <span class="name">葡萄干</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462570115542118.png"></span>
                <span class="name">山楂类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462586150899152.png"></span>
                <span class="name">水果干</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462597864910265.png"></span>
                <span class="name">芒果类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805549445711383.png"></span>
                <span class="name">果干/蔬菜干/枣</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 肉类制品 -->
        <div class=" ui-panel" :style="mystyle[4]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462339134883822.png"></span>
                <span class="name">鸡肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462352082932992.png"></span>
                <span class="name">鸭肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462365297849330.png"></span>
                <span class="name">牛肉制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462377164929878.png"></span>
                <span class="name">猪肉制品</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 海味零食 -->
        <div class=" ui-panel" :style="mystyle[5]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462910501050956.png"></span>
                <span class="name">鱼类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462924847403088.png"></span>
                <span class="name">海苔类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462958864058431.png"></span>
                <span class="name">鱿鱼类</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 膨化零食 -->
        <div class=" ui-panel" :style="mystyle[6]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805652526286217.png"></span>
                <span class="name">锅巴</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463010848953206.png"></span>
                <span class="name">米饼/米卷类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463033686131194.png"></span>
                <span class="name">虾片类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463085847841401.png"></span>
                <span class="name">脆脆条/尖角酥</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462986760306719.png"></span>
                <span class="name">薯片类</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463068326156938.png"></span>
                <span class="name">爆米花/其他</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 饮料/罐头/牛奶 -->
        <div class=" ui-panel" :style="mystyle[7]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462765154308019.png"></span>
                <span class="name">咖啡</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462816271442025.png"></span>
                <span class="name">奶茶冲饮</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462832682743794.png"></span>
                <span class="name">冲饮</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444462864336075056.png"></span>
                <span class="name">花果茶</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/milk.png"></span>
                <span class="name">牛奶</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/tin.png"></span>
                <span class="name">罐头</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/wangzai.png"></span>
                <span class="name">饮料</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="../assets/beer.png"></span>
                <span class="name">啤酒</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 豆菌笋类 -->
        <div class=" ui-panel" :style="mystyle[8]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463158998001342.png"></span>
                <span class="name">豆干/豆制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463172079245215.png"></span>
                <span class="name">竹笋/菌/菇</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 速食/方便面 -->
        <div class=" ui-panel" :style="mystyle[9]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1472805678964077906.png"></span>
                <span class="name">肠/肠仔</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463245677980653.png"></span>
                <span class="name">蛋类制品</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463255934972262.png"></span>
                <span class="name">方便面</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1444463268962828770.png"></span>
                <span class="name">速食品</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 进口零食 -->
        <div class=" ui-panel" :style="mystyle[10]">
          <ul class="panel-dir">
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456911869631194300.jpg"></span>
                <span class="name">日本</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912296404938279.png"></span>
                <span class="name">韩国</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912312238116170.png"></span>
                <span class="name">马来西亚</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912326386607793.jpg"></span>
                <span class="name">菲律宾</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912342362492423.png"></span>
                <span class="name">印尼</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912354523819364.png"></span>
                <span class="name">泰国</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912375477396949.png"></span>
                <span class="name">越南</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912393458232813.png"></span>
                <span class="name">欧美</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912410634014790.png"></span>
                <span class="name">港澳台</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="icon"><img src="http://image.lingshi.com/data/afficheimg/cat_thumb/1456912429987029127.jpg"></span>
                <span class="name">德国</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 品牌零食 -->
        <div class=" ui-panel" :style="mystyle[11]">
          <ul class="panel-dir">
              <li>
                <a href="javascript:;">
                  <span class="icon"><img src="http://image.lingshi.com/brandlogo/1496384159172620773.jpg"></span>
                  <span class="name">有友</span>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
	</div>
</template>

<script scoped>
import { setInterval, clearInterval } from 'timers';
export default {
  data(){
    return {
      isretail:true,
      salestyle:[
        {borderBottom: ".2rem solid #ff3861",color: "#f0506e !important"},{}
      ],
      on:[
        {color:"red",background:"white"},
        {},{},{},{},{},{},{},{},{},{},{}
      ],
      tasks:[
        "坚果炒货","饼干糕点","糖果巧克力","蜜饯果干","肉类制品","海味零食",
        "膨化零食","饮料/罐头/牛奶","豆菌笋类","速食/方便面","进口零食","品牌零食"
        ],
      mystyle:[
        {width:"100%",zIndex:"100"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},
        {width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"},{width:"-1%",zIndex:"1"}
      ]
    }
  },
  methods:{
    retail(){
      this.isretail=true;
      this.salestyle[0]={borderBottom: ".2rem solid #ff3861",color: "red !important"};
      this.salestyle[1]={};
    },
    wholesale(){
      this.isretail=false;
      this.salestyle[1]={borderBottom: ".2rem solid #ff3861",color: "red !important"};
      this.salestyle[0]={};
    },
    active(i){
      for(var nav in this.on){
        if(nav!=i){
          this.on[nav]={};
        }else{
          this.on[nav]={color:"red",background:"white"}
        }
      }
      var n=0;
      var m=100;
      var timer1=setInterval(()=>{
        m-=10;
        for(var j in this.mystyle){
          if(j!=i){
            this.mystyle[j].width=m+"%";
            if(m<=-1){
              this.mystyle[j].width="-1%";
              this.mystyle[j].zIndex="1";
              clearInterval(timer1);
            }
          }
        }
        
      },10);
      var timer2=setInterval(()=>{
        n+=10;
        this.mystyle[i].width=n+"%";
        if(n>=100){
          this.mystyle[i].zIndex="100";
          clearInterval(timer2);
        }
      },10);
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
    border-bottom: 1px solid #666;
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
  /* border-top: 1px solid #666; */
	border-right: 1px solid #666;
	width: 105px;
  height:465px;
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
    font-size: 0.2rem;
}
</style>