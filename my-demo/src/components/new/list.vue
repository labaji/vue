<template>
  <div class="new-list">

   <ul class="mui-table-view mui-table-view-chevron">
				<li @click="getnewslist(item.id)" class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
              <h4 class="mui-ellipsis new-title" v-text="item.title"></h4>
							<p class="new-desc">
                <span>发表时间:{{item.add_time | date }}</span>
                <span>点击次数: {{item.click}}次</span>
              </p>
						</div>
					</a>
				</li>

			</ul>
  </div>
</template>

<script>
export default {
  //钩子函数
  created(){
    this.getList()
  },

  //数据

  data(){
    return {
        list : [ ]
    }
  },

  methods:{
    //拿到轮播图方法
    getList(){
      this.$http.get('/api/getnewslist').then(res=>{
      console.log(res);
      const data = res.data
      if(data.status===0){
        this.list = data.message  
        console.log(this.list);
      }
    })
    },

    //拿到新闻详情方法
    getnewslist(id){
      console.log(id);
      this.$router.push(`/home/newsinfo/${id}` )
    }
  }

};
</script>

<style lang="scss">
.new-list {
  .new-title {
    font-weight: 400;
  }

  .new-desc {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #26a2ff;
  }

  .mui-table-view-chevron .mui-table-view-cell {
    padding-right: 52px;
  }

  .mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 11px 13px;
    -webkit-touch-callout: none;
  }
}


</style>
