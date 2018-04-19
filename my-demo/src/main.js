//1.导入vue

import Vue from 'vue'

//导入app根组件
import App from './App.vue'




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

//导入路由模块
import router from './router'
asdasddasd

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