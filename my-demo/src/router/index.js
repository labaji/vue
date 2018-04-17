import Vue from 'vue'

//配置路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入home组件 
import Home from '../components/cart/Home.vue'
import Vip from '../components/cart/Vip.vue'
import Cart from '../components/cart/cart.vue'
import Search from '../components/cart/Search.vue'

//导入新闻组件
import NewList from '../components/new/list.vue'
import NewInfo from '../components/new/info.vue'


const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/vip',component:Vip},
    {path:'/cart',component:Cart},
    {path:'/search',component:Search},

    //导入新闻模块
    {path:'/home/newslist',component:NewList},
    {path:'/home/newsinfo/:id',component:NewInfo},

  ],
   //修改默认高亮类名
   linkActiveClass: ' mui-active '
})

export default router