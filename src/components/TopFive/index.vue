<template>
  <div class="topFive-wrapper">
      <h3 class="title">TOP5 Antivirus Software</h3>
      <ul class="topfive-list">
          <li v-for="(item,index) in topfiveData" :key="index">
              <div class="item-left">
                  <img :src="item.logo" alt="" class="logo">
                  <div class="rate">
                      <div class="rate-left">
                          <p class="our">Our Score</p>
                          <Star :max="+item.rate.max" :score="+item.rate.score"/>
                      </div>
                      <span class="score">{{item.rate.score}}</span>
                  </div>
              </div>
              <div class="item-right">
                  <a :href="item.link" @click="execute" class="btn" target="_blank">Visit Site</a>
                 <!-- <router-link :to="{name: 'review',query: {productId: item.id}}" target="_blank" class="readReview">Read Review</router-link> -->
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {getProduct} from '@/api'

export default {
    data() {
        return {
            topfiveData: []
        }
    },
    methods: {
        execute() {
            window.execute();
        },
        getTopFive() {
            
            getProduct()
                .then(result => {

                    this.topfiveData = result.data.data.slice(0,5);
                })
                .catch(err => {
                    window.console.log(err);
                })
        }
    },
    created() {
        this.getTopFive();
    }
}
</script>

<style lang="less" scoped>
    @import url('./index.less');
</style>