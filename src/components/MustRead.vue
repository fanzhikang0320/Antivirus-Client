<template>
  <div class="must-read-wrapper">
      <h3 class="title">Must Read</h3>
      <ul class="read-list">
          <li v-for="(item,index) in mustReadData" :key="index">
              <div class="date-box">
                  <span class="day">{{renderTime(item.addTime).day}}</span>
                  <span class="month">{{renderTime(item.addTime).month}}</span>
              </div>
              <img :src="item.picture" alt="" class="pic">
              <p class="question">{{item.title}}</p>
              <p class="desc" v-html="item.desc"></p>
              <p class="more">
                <router-link :to="{name: 'detail',query: {id: item.id}}" class="read-more">Read More</router-link>
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mustReadData: [],
      total: 4,
      currentPage: Math.floor(Math.random() * 2 + 1),
      limit: 3
    }
  },
  methods: {
    getMustRead(currentPage) {
      this.axios.get('/articleApi/getArticle',{params: {offset: (currentPage - 1) * this.limit,limit: this.limit}})
        .then(result => {
            if (result.data.code == 0) {
                
                this.total = result.data.data.count;
                this.mustReadData = result.data.data.rows;
                // window.console.log('must',result.data.data);
            }
        })
        .catch(err => {
            window.console.log(err);
        })
    },
    renderTime(timeString) {
      let Month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
      return {
        day: new Date(timeString.split('T')[0]).getDate() < 10 ? '0' + new Date(timeString.split('T')[0]).getDate() : new Date(timeString.split('T')[0]).getDate(),
        month: Month[new Date(timeString.split('T')[0]).getMonth()] 
      } 
      
    }
  },
  created() {
    this.getMustRead(this.currentPage)
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/Css/MustRead.less');
</style>