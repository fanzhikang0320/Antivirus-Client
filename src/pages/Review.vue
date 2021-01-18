<template>
  <div class="review-wrapper">
    <div v-for="(item,index) in reviewData" :key="index">

      <div class="banner-area">
        <div class="banner-content">
          <h2 class="sub">Best Antivirus Software of 2021</h2>
          <h1 class="title">{{item.product.name}} Antivirus Review</h1>
        </div>
      </div>
      <div class="main clearfix">
        <div class="main-left">
          <div class="product">
            <img :src="item.product.logo" :alt="item.product.name" class="logo">
            <div class="score-box">
              <p class="score">{{item.product.rate}}</p>
              <Star :max="10" :score="+item.product.rate"/>
            </div>
            <a :href="item.product.link" @click="execute" target="_blank" class="btn">Visit Antivirus</a>
          </div>
          <div id="overview" v-if="item.overview">
            <h3 class="title">Overview</h3>
            <div class="content" v-html="item.overview"></div>
          </div>
          <div id="PAC">
            <h3 class="title">Pros and Cons</h3>
            <div class="content" v-html="item.prosTop"></div>
            <div class="PC">

              <ul class="pros-box">
                <li>Pros</li>
                <li v-for="(pros,ind) in JSON.parse(item.pros)" :key="ind">
                  <img src="@/assets/Image/true.png" alt="true">
                  <p>{{pros.value}}</p>
                </li>
              </ul>
               <ul class="cons-box">
                 <li>Cons</li>
                <li v-for="(cons,ind) in JSON.parse(item.cons)" :key="ind">
                  <img src="@/assets/Image/false.png" alt="false">
                  <p>{{cons.value}}</p>
                </li>
              </ul>
               
            </div>
           
            <div class="content" v-html="item.prosBottom"></div>
            <a :href="item.product.link" @click="execute" target="_blank" class="btn">Visit {{item.product.name}}</a>
          </div>
          <div id="security" v-if="item.security">
            <h3 class="title">Security</h3>
            <div class="content" v-html="item.security"></div>
          </div>
          <div id="PDC" v-if="item.plat">
            <h3 class="title">Platform and Devices Compatibility</h3>
            <div class="content" v-html="item.plat"></div>
          </div>
          <div id="expreience" v-if="item.userExperience">
            <h3 class="title">User Experience</h3>
            <div class="content" v-html="item.userExperience"></div>
          </div>
          <div id="support" v-if="item.support">
            <h3 class="title">Support and Customer services</h3>
            <div class="content" v-html="item.support"></div>
          </div>
          <div id="pricing" v-if="item.pricing">
            <h3 class="title">Pricing</h3>
            <div class="content" v-html="item.pricing"></div>
          </div>
          <div id="conclusion" v-if="item.conclusion">
            <h3 class="title">Conclusion</h3>
            <div class="content" v-html="item.conclusion"></div>
            <a :href="item.product.link" @click="execute" target="_blank" class="btn">Visit {{item.product.name}}</a>
          </div>
          <div class="aboutAuthor">
            <h3 class="title">About Author</h3>
            <img :src="item.author.headImg" :alt="item.author.name" class="headImg">
            <div class="author-info">
              <p class="info-top">
                <span class="author-name">{{item.author.name}}</span>
                <span class="text">{{item.author.position}}</span>

              </p>
              <p class="desc" v-html="item.author.desc"></p>
            </div>
          </div>
        </div>
        <div class="main-right">
          <div class="fixed-box">
            <div class="quickAccess-area">
              <h3 class="title">Quick Access</h3>
              <ul class="quick-list">
                <li>
                  <span class="icon"></span>
                  <a href="#overviews" class="link">Overview</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#PAC" class="link">Pros and Cons</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#security" class="link">Security</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#PDC" class="link">Platform and Devices </a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#expreience" class="link">User Experience</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#support" class="link">Customer Services</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#pricing" class="link">Princing</a>
                </li>
                <li>
                  <span class="icon"></span>
                  <a href="#conclusion" class="link">Conclusion</a>
                </li>
              </ul>
            </div>
            <div class="TopFive-area">
              <TopFive/>
            </div>
            <div class="mustRead-area">
              <MustRead />
            </div>
          </div>
        </div>
      </div>
      <div class="TopTen-area">
        <TopTen/>
      </div>
    </div>
  </div>
</template>

<script>
import { getReviewInfo } from '@/api'
import TopTen from '@/components/TopTen/index'
import MustRead from '@/components/MustRead/index'
import TopFive from '@/components/TopFive'
export default {
  components: {
    TopTen,
    MustRead,
    TopFive
  },
  data() {
    return {
      reviewData: []
    }
  },
  watch: {
    $route: {
      handler() {
        
        const productId = this.$route.query.productId;
        getReviewInfo(productId)
          .then(result => {
            if (result.data.code == 0) {
              this.reviewData = result.data.data;
            } else {
              this.$router.push({name: 'error'});
            }
          })
          .catch(err => {
            this.$router.push({name: 'error'});
            window.console.log(err);
          })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    execute() {
        window.execute();
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('../assets/css/review.less');
</style>