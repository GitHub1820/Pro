//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"xz",
  connectionLimit:15
})
//3:创建express对象
var server = express();
//4.指定静态目录
server.use(express.static("public"));
//5:处理跨域请求
const cors = require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));
//9:绑定监听端口
server.listen(3000);
//注册
server.get("/reg",(req,res)=>{
  //1:接收脚手架参数 uname upass
  var name = req.query.name;
  //console.log(name);
  var pwd = req.query.pwd;
  //console.log(pwd);
  var sql =" INSERT INTO user_login VALUES(null,?,md5(?));";
  //3:返回结果 
  pool.query(sql,[name,pwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      res.send({code:1,msg:"注册成功"});
    }
  });
});
//功能一：接收用户登录请求
server.get("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var name = req.query.name;
   //console.log(name);
   var pwd = req.query.pwd;
   //console.log(pwd);
   var sql =" SELECT id FROM t_login";
      sql+=" WHERE name = ?";
       sql+=" AND pwd = md5(?)";
   //3:返回结果 
   pool.query(sql,[name,pwd],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       //result=[{id:1}]
       req.session.uid = result[0].id 
       //console.log(req.session.uid);
       res.send({code:1,msg:"登录成功"});
     }
   });
});
//功能二:商品列表 66~85
server.get("/product",(req,res)=>{
  // console.log("req="+req);
  // console.log("res="+res);
  //1:参数 pno pageSize
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //2:默认值 
  // console.log("pno="+pno);
  // console.log("ps="+ps);
  if(!pno){pno=1}
  if(!ps){ps=4}
  //2:sql
  var sql = " SELECT id,img,title,price";
  sql+=" FROM more_product";
  sql+=" LIMIT ?,?";
  var offset = (pno-1)*ps;
  ps = parseInt(ps);
  //3:json
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});
