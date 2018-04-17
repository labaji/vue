<template>
  <div>
      <!-- 顶部固定导航栏 -->
      <mt-header fixed title="前端18期">
         <mt-button icon="back" slot="left">返回</mt-button>
         <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
		

		<router-view class="pd"></router-view>

      <!-- 底部导航菜单 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/vip" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pd {
    padding: 40px 0 50px 0;
}
</style>
