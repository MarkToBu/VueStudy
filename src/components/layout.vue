<template>
  <div>
		<div class="app-head">
			<div class="app-head-inner">
				<router-link :to="{ path:'/' }">  <img src="../assets/logo.png"></router-link>
				<div class="head-nav">
				  <ul class="nav-list">
				  	<li >{{ name }}</li>
						<li v-if="name !== ''" class="nav-pile">|</li>

            <li v-if="name !== ''" >退出</li>
            <li v-if="name === ''" @click="openLogin" >登录</li>
						<li class="nav-pile">|</li>
				  	<li @click="openRegist">注册</li>
						<li class="nav-pile">|</li>
				  	<li @click="about">关于</li>
				  </ul>	
				</div>
			</div>
				
		</div>
		<div class="app-content">
       <keep-alive>
         <router-view></router-view>
       </keep-alive>

    </div>
		<div class="app-footer">
			<p>@ 2016 hopeman MIT</p>
		</div>
  </div>
</template>

<script>
  import  myLogin from  '../myLogin'
  import  myRegist from  '../myLogin'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data : {},
      name : ''
    }
  },
  methods: {
    openLogin(){
      this.$dlg.modal(myLogin, {
        title:'Login',
        width: 350,
        height: 230,
        //send params to inner component
        params: {
          name: 'Terry Zeng'
        },
        callback: data=>{
          this.data = data;
          this.$http.get('http://localhost:8000/getLoginInfo').then(
            (res) => {
                 // this.$emit('login-success',res.data)
                this.check(res.data);
            },(error) => {
               console.log(error)
            }
          )
        }
      });
    },
    checkLogin (data){
      if(res.data.username == this.data.name && res.data.password == this.data.password){
         this.name = res.data.username;
      }else{
          this.$dlg.alert('You Enterd Error Info');
      }
    },
    openRegist (){
      this.$dlg.modal(myRegist, {
        width: 350,
        height: 230,
        title: 'Regist',
        //send params to inner component
        params: {
          name: 'Terry Zeng'
        },
        //modal dialog close callback
        //data: inner component call 'this.$emit.('close', data)'
        //to close modal and return data
        callback: data=>{
          //alert selected result
          this.$dlg.alert(`You selected ${data.companyName} company`);
        }
      });
    },
    about(){
      this.$dlg.alert('本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。', {
        width: 350,
        height: 300,
        messageType: 'info',
        language: 'en'
      });
    }
  }
}
</script>


<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 70px;
  line-height: 70px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-footer {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
