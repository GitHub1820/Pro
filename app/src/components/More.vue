<template>
  <div class="container">
    <!--商品 start-->
    <div class="goods-item" v-for="(item,index) of list" :key="index" >
      <img :src="'http://127.0.0.1:3000/img/'+item.img   "/>
      <div class="title">{{item.title}}</div>
      <div class="price">￥{{item.price}}</div>
    </div>
    <!--商品 end-->
    <div class="snack_wrap"> 
			<div class="ui-refresh-down"><span class="ui-refresh-label" @click="loadMore">点击加载更多</span></div>
		</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       list:[], 
       pno:0,   
       pageSize:4
    }
  },
  created() {
     this.loadMore();
  },
  methods: {
    loadMore(){  
      this.pno++;
      var url = "product";
      var obj = {pno:this.pno,pageSize:this.pageSize};
      this.axios.get(url,{params:obj}).then(result=>{
        var rows = this.list.concat(result.data.data);
        this.list = rows;
      }) 
    }
  },
}
</script>

<style scoped>
 .container{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding:4px;
 }
 .container .goods-item{
  background-color: #fff;
  width:47%;
  /* border:1px solid #ccc; */
  margin:5px 5px;
  padding:2px;
  display: flex;
  flex-direction: column;
  min-height: 247px;
  border-radius: 5px;
 }
 .container .goods-item .info{
   color:darkgray;
   font-size: 1rem;
 }
.price {
  width:50%;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
  font-weight: 500;
  background: #f0506e;
  margin:  auto;
  line-height: 1.4rem;
  padding: .1rem .8rem;
  border-radius: .3rem;
}
 /*商品图片*/
 .container .goods-item img{
   width:100%;
 }

.snack_wrap {
    width: 100%;
}
.ui-refresh-down {
    background: #fff;
    padding: 1em 10px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    color: #888;
    text-align: center;
}

.ui-refresh-down .ui-refresh-label {
    display: inline-block;
    vertical-align: middle;
    color: #2E435D;
}
</style>
