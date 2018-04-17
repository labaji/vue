<template>
  <div class="news-info">
    <h4>{{info.title}}</h4>
    <p class="new-desc">
        <span>发表时间:{{info.add_time | date}}</span>
        <span>点击次数:{{info.click}}</span>
    </p>
    <!-- 内容区域 -->
    <div class="content" v-html="info.content">
        
    </div>

    <!-- 评论组件 -->
  </div>
</template>

<script>
export default {
  created() {
     this.getNewsInfoId()
  },
  data() {
    return {
      info: {}
    };
  },
  methods: {
      //根据id获取新闻详情
    getNewsInfoId() {
        this.$http.get(`/api/getnew/${this.$route.params.id}`).then(res=>{
                const data = res.data
              if(data.status===0){
                  this.info = data.message[0]
                  console.log(this.info);
              }
            })
    }
  }
};
</script>

<style lang="scss">
.news-info {
  padding: 5px;
  .new-desc {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #26a2ff;
    border-bottom: 1px solid #ccc;
  }

  .content {
    border-bottom: 1px solid #ccc;
  }
}
</style>
