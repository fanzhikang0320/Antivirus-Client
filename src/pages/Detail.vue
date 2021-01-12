<template>
  <div class="detail-wrapper clearfix">
    <div class="main-left" v-for="(item,index) in articleDetail" :key="index">
      <div class="bread-box">
        <span><router-link :to="{name: 'home'}">Home</router-link></span>
        <span>></span>
        <span><router-link to="/article">Article</router-link></span>
        <span>></span>
        <span>{{item.title}}</span>
      </div>
      <div class="top-content clearfix">
        <img :src="item.illustration" alt="" class="pic">
        <h3 class="title">{{item.title}}</h3>
        <div class="data-content" v-html="item.content"></div>
      </div>
      
      
    </div>
    <div class="main-right">
      <div class="topFive-area">
        <TopFive/>
      </div>
      <div class="mustRead-area">
        <MustRead />
      </div>
    </div>
    

  </div>
</template>

<script>
import { getArticleDetail } from '@/api'
import TopFive from '@/components/TopFive'
import MustRead from '@/components/MustRead/index'
export default {
  components: {
    TopFive,
    MustRead
  },
  data() {
    return {
      artilceId: 0,
      articleDetail: []
    }
  },
  watch: {
    $route: {
      handler() {
        this.artilceId = this.$route.query.id;
        this.getArticleContent();
      },
      immediate: true,
      deep: true
    }
  },

  methods: {
    getArticleContent() {
      getArticleDetail(this.artilceId)
        .then(result => {
          if (result.data.code == 0) {
            this.articleDetail = result.data.data;
          }
        })
        .catch(err => {
          window.console.log(err);
        })
    }
  }
  
}
</script>

<style lang="less" scoped>
@import url('../assets/css/Detail.less');
</style>