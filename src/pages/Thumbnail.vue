<template>
  <div class="thumbnail-wrapper clearfix">
       <div class="clearfix">
       <div :class="{'thumbnail-item': true}" v-for="(item,index) in thumbnailData" :key="index">
          <div class="top-content">
                <span class="corner"></span>
                <h3 class="title">{{item.title}}</h3>
                <div class="img-box">
                    <div class="bg"></div>
                    <img :src="item.picture" alt="" class="pic">
                </div>
          </div>
          
          
          <div class="content-box">
            <div class="content" v-html="item.desc"></div>
            <p class="btn-box">
                <router-link :to="{name: 'detail',query: {id: item.id}}">Read More</router-link>
            </p>
          </div>

          <p></p>
      </div>
      </div>
      <div class="loading" v-show="isLoading">
          <div class="loading-box" v-if="haveData"></div>
          <div class="loading-text" v-else>
              <p class="line"></p>
              <span class="text">Loading completed</span>
          </div>
      </div>
  </div>
</template>

<script>
import { getArticleList } from '@/api'
export default {
    data() {
        return {
            thumbnailData: [],
            limit: 6,
            total: 0,
            currentPage: 1,
            haveData: true,
            isLoading: false
        }
    },
    methods: {
        //获取
        getArticleThumbnail(currentPage) {
            getArticleList({offset: (currentPage - 1) * this.limit,limit: this.limit})
                .then(result => {
                    if (result.data.code == 0) {
                        
                        this.total = result.data.data.count;
                        this.thumbnailData =this.thumbnailData.concat(result.data.data.rows);

                        if (result.data.data.count < currentPage * this.limit) {
                            this.haveData = false;
                            return;
                        } else {
                            this.currentPage = currentPage + 1;
                            this.getArticleThumbnail(this.currentPage);
                        }
                    }
                })
                .catch(err => {
                    
                    window.console.log(err);
                })
        }
    },
    created() {
        this.getArticleThumbnail(this.currentPage);
    }
}
</script>

<style lang="less">
@import url('../assets/css/Thumbnail.less');
</style>