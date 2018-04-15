<template>
  <div class="home">
    <mt-swipe :auto="4000"  class="home_swipe">
      <mt-swipe-item v-for="(item,i) in list" :key="i">
        <img :src="item.img" :alt="item.url">
      </mt-swipe-item>
    </mt-swipe>
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
      this.$http.get("api/getlunbo")
          .then(res => {
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
</style>
