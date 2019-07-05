<template>
  <div id=login_reg>
    <div class="header">
	    <div class="text2">
        <ul class="cutover">
          <li><a href="javascript:;" @click="Selected1" :class="onlogin">登录</a></li>
          <li><a href="javascript:;" @click="Selected2" :class="onreg">注册</a></li>
        </ul>
        <div class="back-icon"><a href="javascript:;" class="back">&lt;</a></div>
      </div>  
      <!-- 登录 -->
      <div class="loginpage" v-show="isSelected==true">
        <div class="login">
          <ul>
            <li><input class="email" name="username" id="username" type="text" placeholder="邮箱/手机号"></li>
            <li><input class="password" name="password" id="password" type="password" placeholder="密码"></li>
          </ul>    
          <a href="javascript:;" class="login_btn" id="login">立即登录</a>
          <p class="forget"><a href="/user/send_code">忘记密码？</a></p>
          <div class="tips" style="display:none;" id="errorinfo"></div>
        </div>
        <div class="other-login">
          <div class="txt">使用第三方登录</div>
          <ul class="tbl-type">
            <li>
              <a href="/api/callback/union/qq.php?action=login">
                <span class="nav1-icon"></span>
                <span class="cate-name">QQ</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 注册 -->
      <div class="regpage" v-show="isSelected==false">
        <div class="login">
          <ul>
            <li><input class="email" name="username" id="username" type="text" placeholder="手机号"></li>
            <li><input class="password" name="password" id="password" type="password" placeholder="密码（长度不小于6位）"></li>
            <li><input class="verify" id="repassword" name="repassword" type="password" placeholder="确认密码"></li>
          </ul>    
          <a href="javascript:;" class="login_btn" id="register">注册</a>
          <div class="tips" style="width:22rem;display:none;" id="errorinfo"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      isSelected:true,
      onlogin:{
        color:"#f0506e",borderBottom: "2px solid #f0506e",
      },
      onreg:{color: "",borderBottom: "",},
    }
  },
  methods: {
    Selected1(){
      this.isSelected=true;
      this.onlogin.color="#f0506e";
      this.onlogin.borderBottom="2px solid #f0506e";
      this.onreg={color:"",borderBottom: ""};
    },
    Selected2(){
      this.isSelected=false;
      this.onlogin={color:"",borderBottom: ""};
      this.onreg={color:"#f0506e",borderBottom: "2px solid #f0506e"};
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
    height: 5.2rem;
    border-bottom: 1px solid #bfbfbf;
    background: #f8f8f8;
    position: relative;
    text-align: center;
    color: #333;
    font-size: 1.9rem;
    line-height: 5rem;
  }
  .header .cutover {
    width: 16rem;
    margin: 0 auto;
    font-size: 1.4rem;
 }
 .header .cutover li {
    box-sizing: border-box;
    float: left;
    width: 50%;
    text-align: center;
  }

  .header .cutover li a {
    display: inline-block;
    height: 4rem;
    color: #777;
  }
  a:link, a:visited {
    text-decoration: none;
    color: #333;
  }
  /* 返回键 */
  a.back {
    display: block;
    width: 3rem;
    height: 3rem;
    position: fixed;
    left: 1.1rem;
    top: 1.1rem;
    background: url("../assets/back-icon.png") no-repeat;
    background-size: 3rem 3rem;
    text-indent: -9999rem;
    z-index: 10001;
  }
  .header .back-icon {
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 1.1rem;
    left: 1.1rem;
}
/* login */
.login {
    background: #fff;
    margin-top: 1rem;
}
.login li {
    padding-left: .5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 18px;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}
.login .email {
    background: url(../assets/s_icon.png) 2.65rem 0.8rem no-repeat;
    background-size: 18rem 18rem;
}
.login input {
    border: none;
    height: 3.3rem;
    line-height: 3.3rem;
    width: 100%;
    color: #666;
    text-indent: 4.65rem;
}
input, button, textarea, select {
    font-size: 100%;
}
.login .password {
    background: url(../assets/s_icon.png) 2.65rem -3rem no-repeat;
    background-size: 18rem 18rem;
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
    z-index: 9999;
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
    width: 4rem;
    height: 4rem;
    margin: .5rem 0 0;
    background: url(../assets/login.png) 0 0 no-repeat;
    background-size: 15rem 15rem;
    text-indent: -9999px;
    position: relative;
}
.other-login .cate-name {
    display: block;
    font-size: 1rem;
    color: #999;
    line-height: 1rem;
}
.login .verify {
    background: url(../assets/s_icon.png) 2.65rem -8.5rem no-repeat;
    background-size: 15rem 15rem;
}
</style>