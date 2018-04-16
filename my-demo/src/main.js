//1.导入vue

import Vue from 'vue'

//导入app根组件
import App from './App.vue'

//导入home组件 
import Home from './components/cart/Home.vue'
import Vip from './components/cart/Vip.vue'
import Cart from './components/cart/cart.vue'
import Search from './components/cart/Search.vue'

//导入新闻组件
import NewList from './components/new/list.vue'
 

//配置路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/vip',component:Vip},
    {path:'/cart',component:Cart},
    {path:'/search',component:Search},

    //导入新闻模块
    {path:'/home/news',component:NewList},

  ],
   //修改默认高亮类名
   linkActiveClass: ' mui-active '
})

//导入mint-ui组件
import { Header,Button,Swipe, SwipeItem  } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

//导入mui 
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入自己的样式
import './assets/index.css'

//引入axios
import axios from "axios";

//给vue原型上增加axios的方法
Vue.prototype.$http = axios;

//设置公共路径
axios.defaults.baseURL = 'http://www.escook.cn:3000';

//导入日期过滤器
import './filters' 

//2.创建vue实例
new Vue({
   el:'#app',
    router,
   //渲染根组件
   render: c => c(App)
}) 