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
            // this.isLoading = true;
            this.$loading.show();
            getArticleList({offset: (currentPage - 1) * this.limit,limit: this.limit})
                .then(result => {
                    // this.isLoading = false;
                    this.$loading.hide();
                    if (result.data.code == 0) {
                        
                        this.total = result.data.data.count;
                        this.thumbnailData =this.thumbnailData.concat(result.data.data.rows);

                        if (result.data.data.count < currentPage * this.limit) {
                            this.haveData = false;
                            // this.$loading.
                            // this.isLoading = true;
                            window.onscroll = ''
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
    },
    mounted() {
        let that = this;
        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
                that.currentPage = that.currentPage + 1;
                that.getArticleThumbnail(that.currentPage);
            }
        }
    },
    destroyed() {
        window.onscroll = '';
    }
}
</script>

<style lang="less">
@import url('../assets/css/Thumbnail.less');
</style>