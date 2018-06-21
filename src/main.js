// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Users from './components/Users'
import Test from './components/Test'
//自己创建的要./找到路径，系统有的不用
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueResource)
//设置路由
const router=new VueRouter({
	mode:"history",
	base:__dirname,//注意是两个_
	routes:[
	{path:"/",component:Users},
	{path:"/test",component:Test}
	]
})
/* eslint-disable no-new */
new Vue({
	router,
	components: {
		App
	},
	template: `
  <div id="app">
  <ul>
  <li>
  <router-link to="/">Users</router-link>
  <router-link to="/est">Test</router-link>
  </li>
  </ul>
  <router-view></router-view>
  </div>
  `
}).$mount("#app")
