<template>
  <div class="about-wrapper">
    <h1 class="title">About Us</h1>
    <p class="subhead">Top Antivirus Review</p>
    <div class="content-area clearfix">
      <div class="content">
        <P>Online reviews and information regarding the pros and cons of Antivirus software providers will help you to find a service that best suits your needs. That’s where we come in.</P>
        <P>The internet is a mine of information on all subjects imaginable and can prove more a real headache and as such our service will help to extract all the most important information on the relevant brands. We at top10antivirus.org do the work so you don’t have to.</P>
        <P>Our online reviews provide in-depth information, comparing features and services provided by all the best Antivirus software providers.</P>
        <P>As well as offering you this information we also have expert customer service representatives to help offer additional advice, all to help you make the best possible decision when it comes to making your Anti Virus software purchase.</P>
      </div>
      <ul class="author-list" v-if="authorData.length != 0">
        <li v-for="(item,index) in authorData" :key="index">
          <img :src="item.headImg" :alt="item.name" class="author-img">
          <div class="item-right">
            <p class="author-name">{{item.name}}</p>
            <p class="author-desc">{{item.position}}</p>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import {getAuthor} from '@/api'
export default {
  data() {
    return {
      authorData: []
    }
  },
  methods: {
    getAuthorFunc() {
      getAuthor()
        .then(result => {
          if (result.data.code == 0) {
            this.authorData = result.data.data;
          }
          
        })
        .catch(err => {
          window.console.log(err);
        })
    }
  },
  created() {
    this.getAuthorFunc();
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/about.less');
</style>