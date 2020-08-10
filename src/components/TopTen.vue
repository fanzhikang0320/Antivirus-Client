<template>
  <div class="top-ten-wrapper">
      <div class="top-ten-top clearfix">
          <h5 class="title">See Top 10 VPN Collections</h5>
            <a href="" @click="jump('https://vpncollection.com')">Learn More ></a>
      </div>
      <ul class="topTen-list">
          <li v-for="(item,index) in toptenList" :key="index">
              <img :src="item.picture" alt="" class="logo">
              <Star class="star" :score="+item.rate" :max="10"/>
              <span class="score">{{item.rate}}</span>
              <p class="line"></p>
              <a href="" @click="jump(item.link)" class="review">Read Review</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toptenList: []
        }
    },
    methods: {
        getToptenList() {
            this.axios.get('/toptenApi/selectTopten')
                .then(result => {
                    if (result.data.code == 0) {
                        this.toptenList = result.data.data;
                    } 
                })
                .catch(err => {
                    window.console.log(err);
                })
        },
        jump(url) {
            window.open(url,'_blank').location;
        }
    },
    created() {
        this.getToptenList();
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/Css/Top10.less');
</style>