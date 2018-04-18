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
      <textarea cols="30" rows="10" placeholder="请输入评论内容" v-model="content"></textarea>
      <mt-button size="large" type="primary" @click="add">发表评论</mt-button>
      <ul class="comment-list">
        <li class="comment-item" v-for="(item,i) in comment" :key="i">
          <h5>
            <span>第{{i+1}}楼</span> 
            <span>用户:{{item.user_name}}</span>
            <span>发表时间:{{item.add_time | date }}</span>
          </h5>
          <p>
            {{item.content}}
          </p>
        </li>
      </ul>
      <mt-button size="large" plain type="primary" @click="more">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    //加载新闻详情
     this.getNewsInfoId(),
     //加载评论
     this.getCommentId()
  },
  data() {
    return {
      info: {},  //新闻详情
      comment:[], //评论列表数据
      pageIndex : 1, //分页功能，表示当前加载第几页
      content: ''  //评论框数据
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
              }
            })
    },

    //根据id获取评论内容
    getCommentId(){
      this.$http.get(`/api/getcomments/${this.$route.params.id}?pageindex=${this.pageIndex}`).then(res=>{
        const data =res.data
          if(data.status===0){
              this.comment=[...this.comment,...data.message]
              console.log(this.comment);
          }
      })
    },

    //在加评论功能
    more(){
      //让页数增加
        this.pageIndex++
        //加载下一页数据
        this.getCommentId()
    },

    //发表评论功能
    add(){
      if(this.content.trim() === ''){
        return false
      }

      this.$http.post(`/api/postcomment/${this.$route.params.id}`,`content=${this.content}`).then(res=>{
        console.log(res);
        const data =res.data
        if(data.status ===0){

          this.comment.unshift({
            add_time : new Date,
            content : this.content,
            user_name:'匿名用户'

          })
          // 立即清空评论框信息
          this.content = ''

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

   h3 {
     margin-top: 20px;
   }
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
