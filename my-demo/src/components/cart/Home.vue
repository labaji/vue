<template>
  <div class="home">
    <mt-swipe :auto="4000"  class="home_swipe">
      <mt-swipe-item v-for="(item,i) in list" :key="i">
        <img :src="item.img" :alt="item.url">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon "></span>
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon"></span>
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 	
  </div>
</template>

<script>
export default {
  created() {
    this.getLunbo();
  },
  data() {
    return {
      list: []
    };
  },

  methods: {
    getLunbo() {
      this.$http.get("api/getlunbo").then(res => {
        console.log(res);
        const data = res.data;
        if (data.status === 0) {
          this.list = data.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" >
.home_swipe {
  height: 180px;
}

img {
  width: 100%;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;

  .mui-table-view-cell {
    border: none;
  }

  .mui-icon {
    height: 60px;
    width: 60px;
    background-size: cover;
  }

  li:nth-child(1) .mui-icon {
    background-image: url(../../assets/images/menu1.png);
  }

  li:nth-child(2) .mui-icon {
    background-image: url(../../assets/images/menu2.png);
  }

  li:nth-child(3) .mui-icon {
    background-image: url(../../assets/images/menu3.png);
  }

  li:nth-child(4) .mui-icon {
    background-image: url(../../assets/images/menu4.png);
  }

  li:nth-child(5) .mui-icon {
    background-image: url(../../assets/images/menu5.png);
  }

  li:nth-child(6) .mui-icon {
    background-image: url(../../assets/images/menu6.png);
  }

  li:nth-child(1) .mui-icon {
    background-image: url(../../assets/images/menu1.png);
  }
}
</style>
