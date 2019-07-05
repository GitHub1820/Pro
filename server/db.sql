#db.sql 数据库脚本文件
USE xz;
CREATE TABLE user_login(
 id INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25),
 upass VARCHAR(32)
);
INSERT INTO user_login VALUES(null,'tom',md5('123'));
INSERT INTO user_login VALUES(null,'jerry',md5('123'));


#商品
CREATE TABLE more_product(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img VARCHAR(255),
 title VARCHAR(255),
 price DECIMAL(10,2)
);
INSERT INTO more_product VALUES(null,'p1.jpg','越南Tipo白巧...',16.00);
INSERT INTO more_product VALUES(null,'p2.jpg','海牌海苔16g',8.00);
INSERT INTO more_product VALUES(null,'p3.jpg','沈师傅鸡蛋干10...',3.00);
INSERT INTO more_product VALUES(null,'p4.jpg','咪咪虾味条20g...',0.40);
INSERT INTO more_product VALUES(null,'p5.jpg','格力高百醇抹茶慕...',5.50);
INSERT INTO more_product VALUES(null,'p6.jpg','维力张君雅小妹妹...',3.00);
INSERT INTO more_product VALUES(null,'p7.jpg','咪咪蟹味粒20g',0.40);
INSERT INTO more_product VALUES(null,'p8.jpg','格力高百醇红酒巧...',5.50);
INSERT INTO more_product VALUES(null,'p9.jpg','维力张君雅巧克力...',6.80);
INSERT INTO more_product VALUES(null,'p10.jpg','康师傅3+2苏打...',4.80);
INSERT INTO more_product VALUES(null,'p11.jpg','AJI尼西亚惊奇...',7.80);
INSERT INTO more_product VALUES(null,'p12.jpg','维力张君雅碳烤鸡...',6.80);





