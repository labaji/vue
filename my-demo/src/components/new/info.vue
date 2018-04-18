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
    <Comment :commentId="info.id" v-if="Loding" ></Comment>
  </div>
</template>

<script>
//导入评论组件
import Comment from '../common/comment.vue'

export default {
  created() {
    //加载新闻详情
     this.getNewsInfoId()
   
  
  },
  data() {
    return {
      info: {},  //新闻详情
      Loding : false
    };
  },
  methods: {
      //根据id获取新闻详情
    getNewsInfoId() {
        this.$http.get(`/api/getnew/${this.$route.params.id}`).then(res=>{
                const data = res.data
              if(data.status===0){
                  this.info = data.message[0]
                  // console.log(this.info);
                  this.Loding = true
              }
            })
    },

   
  },

  components:{ Comment }
};
</script>

<style lang="scss">
.news-info {
  padding: 45px  5px 55px 5px;
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



  img {
  width: 100%;
}
</style>
