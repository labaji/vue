<template>
  <div>
    <div class="mui-slider mui-fullscreen">
			<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
          <a href="#" class="mui-control-item mui-active" @click.prevent="getId(0)">
						全部
					</a>
          <a v-for="item in list" :key="item.id" @click="getId(item.id)" href="#" class="mui-control-item">
						{{item.title}}
					</a>
        </div>
			</div>
		</div>

		<!-- 图片列表 -->
		<ul class="category-img-list">
      <li v-for="img in images" :key="img.id" class="img-list-item">
        <img v-lazy="img.img_url"> 
        <div>
          <h2>{{img.title}}</h2>
          <p>{{img.zhaiyao}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui";

export default {
  //操作dom
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    this.getPhotoList(), this.getImages(0);
  },
  data() {
    return {
      list: [],
      images: [],
      id: []
    };
  },
  methods: {
    //获取分类列表
    getPhotoList() {
      this.$http.get("/api/getimgcategory").then(res => {
        const data = res.data;
        if (data.status === 0) {
          this.list = data.message;
        }
      });
    },

    //获取图片列表数据
    getImages(id) {
      this.$http.get(`/api/getimages/${id}`).then(res => {
        const data = res.data;
        if (data.status === 0) {
          this.images = data.message;
        }
      });
    },

    //获取分类列表id
    getId(id) {
      this.getImages(id);
    }
  }
};
</script>

<style lang="scss">
.mui-slider-indicator.mui-segmented-control {
  background-color: #fff;
}

.mui-fullscreen {
  position: fixed;
  top: 40px;
  height: 38px;
}

/* scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667 */
* {
  touch-action: none;
}

.category-img-list {
  list-style: none;
  padding: 5px;
  padding-top: 30px;

  .img-list-item {
    position: relative;
    margin-bottom: 5px;

    div {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;

      h2 {
        font-size: 16px;
      }

      p {
        color: #fff;
        margin-bottom: 0px;
      }
    }

    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>