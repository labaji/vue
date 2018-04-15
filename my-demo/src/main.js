//1.导入vue

import Vue from 'vue'

//导入app根组件
import App from './App.vue'

//导入home组件 
import Home from './components/cart/Home.vue'
import Vip from './components/cart/Vip.vue'
import Cart from './components/cart/cart.vue'
import Search from './components/cart/Search.vue'


//配置路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'./home'},
    {path:'/home',component:Home},
    {path:'/vip',component:Vip},
    {path:'/cart',component:Cart},
    {path:'/search',component:Search},
    
  ]
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

Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://www.escook.cn:3000';

//2.创建vue实例
new Vue({
   el:'#app',
    router,
   //渲染根组件
   render: c => c(App)
}) 