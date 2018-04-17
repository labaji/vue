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
    <div class="comment">
      <h3>发表评论</h3>
      <textarea cols="30" rows="10" placeholder="请输入评论内容"></textarea>
      <mt-button size="large" type="primary">发表评论</mt-button>
      <ul class="comment-list">
        <li class="comment-item">
          <h5>
            <span>第一楼</span>
            <span>用户:匿名用户</span>
            <span>发表时间:2018-1-1 12:12:12</span>
          </h5>
          <p>
            沙发!!!
          </p>
        </li>
      </ul>
      <mt-button size="large" plain type="primary">加载更多</mt-button>
    </div>
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
 .comment {
   .comment-list{
    h5{
      display: flex;
      justify-content:space-between;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 400;
      background-color: #eee;
      color: #000;
    }

    p {
      padding: 5px 10px;
      color: #000;
    }
   }

}


  img {
  width: 100%;
}
</style>
