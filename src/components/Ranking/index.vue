<template>
  <div class="ranking-wrapper">
      <div :class="{'ranking-item': true, 'first-ranking': index == 0}" v-for="(item,index) in rankingList" :key="index">
          <div class="ranking-top clearfix">
            <div class="corner"> 
                <span v-if="index == 0" class="text">Editor’s Choice</span>
                <span v-else class="text">No.{{index+1}}</span>
                <span class="trangle"></span>
            </div>
            <img :src="item.logo" alt="" class="logo">
            <div class="star-box">
                <span class="score">{{item.rate}}</span>
                <span class="star">
                    <Star :max="10" :score="+item.rate"></Star>
                </span>
            </div>
          </div>
          <div class="ranking-bottom">
            <div class="ranking-left">
                <img :src="item.picture" alt="" class="img">
            </div>
            <div class="ranking-center">
                <p v-show="index < 3" class="desc" v-html="item.desc"></p>
                <ul class="list">
                    <li v-for="(content,ind) in JSON.parse(item.contentList)" :key="ind">
                        <img src="@/assets/Image/right.png" alt="">
                        <p>{{content.value}}</p>
                    </li>
                </ul>
                <a :href="item.downloadLink" class="download" target="_blank">Download {{item.name}}</a>
            </div>
            <div class="ranking-right">
                <p class="price free">{{item.price == 0 ? 'FREE' : '$'+item.price}}</p>
                <a :href="item.link" class="btn" target="_blank">Visit Antivirus</a>
                <router-link v-if="item.isShowRead" :to="{name: 'review',query: {productId: item.id}}" class="read">Read Review</router-link>
            </div>
          </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name: 'Ranking',
    props: ['ranking'],
    data() {
        return {
        }
    },
    computed: {
        rankingList() {
            return this.ranking;
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>