<template>
  <div class="top-ten-wrapper">
      <div class="top-ten-top clearfix">
          <h5 class="title">See Top 10 VPN Collections</h5>
          <a href="https://vpncollection.com/best-vpn/" target="_blank" rel="noopener noreferrer nofollow">Learn More ></a>
      </div>
      <ul class="topTen-list">
          <li v-for="(item,index) in toptenList" :key="index">
              <img :src="item.picture" alt="" class="logo">
              <Star class="star" :score="+item.rate" :max="10"/>
              <span class="score">{{item.rate}}</span>
              <p class="line"></p>
              <a :href="item.link" rel="noopener noreferrer nofollow" target="_blank"  class="review">Read Review</a>
          </li>
      </ul>
  </div>
</template>

<script>
import {getTopVPNs} from '@/api'
export default {
    data() {
        return {
            toptenList: []
        }
    },
    methods: {
        getToptenList() {
            getTopVPNs()
                .then(result => {
                    if (result.data.code == 0) {
                        this.toptenList = result.data.data;
                    } 
                })
                .catch(err => {
                    window.console.log(err);
                })
        }
    },
    created() {
        this.getToptenList();
    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>