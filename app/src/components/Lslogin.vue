<template>
  <div id=login_reg>
    <div class="header" v-show="!islogin">
	    <div class="text2">
        <ul class="cutover">
          <li><a href="javascript:;" @click="Selected1" :style="salestyle[0]">登录</a></li>
          <li><a href="javascript:;" @click="Selected2" :style="salestyle[1]">注册</a></li>
        </ul>
      </div>  
      <!-- 登录 -->
      <div class="loginpage" v-show="isSelected==true">
        <div class="login">
          <div class="text">
            <mt-field placeholder="邮箱/手机号" v-model="uname"></mt-field>
            <mt-field type="password" placeholder="密码" v-model="upass"></mt-field>
          </div>    
          <a href="javascript:;" class="login_btn" @click="Login">立即登录</a>
          <p class="forget"><a href="javascript:;">忘记密码？</a></p>
        </div>
        <div class="other-login">
          <div class="txt">使用第三方登录</div>
          <ul class="tbl-type">
            <li>
              <a href="javascript:;">
                <span class="nav1-icon"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 注册 -->
      <div class="regpage" v-show="isSelected==false">
        <div class="login">
          <div>
            <mt-field placeholder="手机号" v-model="uname"></mt-field>
            <mt-field type="password" placeholder="密码（长度不小于3位）" v-model="upass"></mt-field>
            <mt-field type="password" placeholder="确认密码"></mt-field>
          </div>    
          <a href="javascript:;" class="login_btn" @click="Reg">注册</a>
          <div class="tips"></div>
        </div>
      </div>
    </div>
    <div v-show="islogin">
     <userpage></userpage>
    </div>
  </div>
</template>

<script>
import userpage from "./User.vue"
export default {
  data(){
    return {
      islogin:false,
      isSelected:true,
      salestyle:[
        {borderBottom: ".2rem solid #ff3861",color: "#f0506e !important"},{}
      ],
      uname:"",
      upass:""
    }
  },
  components:{
    "userpage":userpage
  },
  methods: {
    Selected1(){
      this.isSelected=true;
      this.salestyle[0]={borderBottom: ".2rem solid #ff3861",color: "#f0506e !important"};
      this.salestyle[1]={};
    },
    Selected2(){
      this.isSelected=false;
      this.salestyle[1]={borderBottom: ".2rem solid #ff3861",color: "#f0506e !important"};
      this.salestyle[0]={};
    },
    Reg(){
      console.log(111);
      var n=this.uname;
      var p=this.upass;
      var nreg=/^[a-zA-Z0-9]{3,10}$/;
      var preg=/^[a-zA-Z0-9]{3,8}$/;
      var url="reg";
      var obj={name:n,pwd:p};
      console.log(obj.name);
      if(!nreg.test(n)||!preg.test(p)){
        this.$messagebox("账号或密码格式错误！");
      }else{
        this.axios.get(url,{params:obj}).then(result=>{
          console.log(obj.name);
          //跳转指定组件
          if(result.data.code==1){
            // this.$router.push("./home");
            this.$toast("注册成功！",result.data.msg);
          }else{
            this.$messagebox("提示",result.data.msg);
          }
        });
      }
    },
    Login(){
      var n=this.uname;
      var p=this.upass;
      var url="login";
      var obj={name:n,pwd:p};
      this.axios.get(url,{params:obj}).then(result=>{
        // console.log(111);
        //跳转指定组件
        if(result.data.code==1){
          // this.$router.push("./home");
          this.$toast("登陆成功！",result.data.msg);
          this.islogin=true;
        }else{
          this.$messagebox("提示",result.data.msg);
        }
      });
    }
  },
}
</script>

<style scoped>
  *{
    background-color: #fff;
  }
  #login_reg{
    font-size: 20px;
  }
  .header .text2 {
    height: 4rem;
    border-bottom: 1px solid #bfbfbf;
    background: #f8f8f8;
    position: relative;
    text-align: center;
    color: #333;
    font-size: 1.9rem;
    line-height: 5rem;
  }
  .header .cutover {
    height: 99%;
    width: 100%;
    margin: 0 auto;
    font-size: 1.4rem;
 }
 .header .cutover li {
    box-sizing: border-box;
    float: left;
    height: 99%;
    width: 50%;
    text-align: center;
    line-height: 62px;
  }

  .header .cutover li a {
    display: inline-block;
    height: 100%;
    color: #777;
  }
  a:link, a:visited {
    text-decoration: none;
    color: #333;
  }
/* login */
.login {
    background: #fff;
    margin-top: 2.2rem;
}
button, textarea, select {
    font-size: 100%;
}
.login .login_btn {
    width: 90%;
    height: 3rem;
    line-height: 3rem;
    border-radius: 2.25rem;
    background: #ff3861;
    color: #fff;
    display: block;
    text-align: center;
    font-size: 1.6rem;
    text-indent: 0;
    margin-left: 5%;
    margin-top: 3rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.login .forget {
    text-align: right;
    padding-right: 5%;
    font-size: 1rem;
}
/* 第三方登录 */
.other-login {
    border: .05rem solid #e8e8e8;
    /* z-index: 99; */
    margin-top: 3rem;
}
.other-login .txt {
    width: 13.3rem;
    height: 2.65rem;
    line-height: 2.65rem;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: -1.4rem;
    background: #fff;
    font-size: 15px;
    color: #bbb;
}
.other-login ul {
    position: relative;
    top: -1rem;
}
.tbl-type {
    display: table;
    width: 100%;
}
.other-login .tbl-type li {
    width: 50%;
    display: table-cell;
    text-align: center;
}
.other-login .tbl-type a {
    display: block;
    text-align: center;
    width: 100%;
    height: 5rem;
    color: #999;
}
.other-login .nav1-icon, .other-login .nav2-icon {
    display: inline-block;
    width: 100%;
    height: 9rem;
    margin: 1rem 4.5rem;
    background: url(../assets/login.png) 0 0 no-repeat;
    background-size: 15rem 15rem;
    text-indent: -9999px;
    position: relative;
}
.other-login{
  height: 5rem;
    display: block;
    font-size: 1rem;
    color: #999;
    line-height: 1rem;
}
.login .verify {
    background: url(../assets/s_icon.png) 2.65rem -8.5rem no-repeat;
    background-size: 15rem 15rem;
}
.login .tips{
  width: 100%;
  height:14.5rem;
}
</style>