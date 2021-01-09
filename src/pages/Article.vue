<template>
  <div class="article-wrapper">
    <div class="banner-area">
      <div class="banner-content">
        <h1 class="title">{{bannerData.title}}</h1>
        <div class="desc" v-html="bannerData.content"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getArticleBanner } from '@/api'
export default {
  data() {
    return {
      bannerData: {
        title: '',
        content: ''
      }
    }
  },
  created() {
    // 获取banner内容
    getArticleBanner()
        .then(result => {
          if (result.data.code == 0) {
            this.bannerData = result.data.data[0];
          }
        })
        .catch(err => {
          window.console.log(err);
        })
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/Article.less');
</style>