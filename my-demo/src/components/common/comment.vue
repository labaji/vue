<template>
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
</template>

<script>


export default {
//接受父组件传递过来的值 评论id
props:['commentId'],
    
  created() {
      console.log(this.commentId);
    //加载评论
    this.getCommentId();
  },
  data() {
    return {
      comment: [], //评论列表数据
      pageIndex: 1, //分页功能，表示当前加载第几页
      content: "" //评论框数据
    };   
  },
  methods: {
    //根据id获取评论内容
    getCommentId() {
      this.$http
        .get(
          `/api/getcomments/${this.commentId}?pageindex=${
            this.pageIndex
          }`        
        )
        .then(res => {
          const data = res.data;
          if (data.status === 0) {
            this.comment = [...this.comment, ...data.message];
            console.log(this.comment);
          }
        });
    },

    //在加评论功能
    more() {
      //让页数增加
      this.pageIndex++;
      //加载下一页数据
      this.getCommentId();
    },

    //发表评论功能
    add() {
      if (this.content.trim() === "") {
        return false;
      }

      this.$http
        .post(
          `/api/postcomment/${this.$route.params.id}`,
          `content=${this.content}`
        )
        .then(res => {
          console.log(res);
          const data = res.data;
          if (data.status === 0) {
            this.comment.unshift({
              add_time: new Date(),
              content: this.content,
              user_name: "匿名用户"
            });
            // 立即清空评论框信息
            this.content = "";
          }
        });
    }
  }
};
</script>

<style lang="scss">
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
</style>
