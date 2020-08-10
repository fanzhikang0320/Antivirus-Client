<template>
  <div class="question-wrapper">
      <h3 class="title">FAQ</h3>
      <div class="question-list">
          <div :class="{'question-item': true,'current': index == clickIndex}" ref="questionItem" v-for="(item,index) in questionData" :key="index" @click="showMore(index)">
              <div class="item-top">
                <p class="question-name">{{item.title}}</p>
                <span class="icon">&#xe666;</span>
              </div>
              <div class="item-content" v-html="item.content" ref="askContent"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            questionData:[],
            clickIndex: -1
        }
    },
    methods: {
        showMore(index) {
            this.$nextTick(() => {
                if (index === this.clickIndex) {
                    this.clickIndex = -1;
                    this.$refs['questionItem'][index].style.height = this.$refs['questionItem'][index].offsetHeight - this.$refs['askContent'][index].offsetHeight + 'px';
                } else {
                    if (this.clickIndex != -1) {
                        this.$refs['questionItem'][this.clickIndex].style.height = this.$refs['questionItem'][this.clickIndex].offsetHeight - this.$refs['askContent'][this.clickIndex].offsetHeight + 'px';
                    }
                    this.clickIndex = index;
                    this.$refs['questionItem'][index].style.height = this.$refs['questionItem'][index].offsetHeight + this.$refs['askContent'][index].offsetHeight + 'px';
                }
            })
            
        },
        getQuestion() {
            this.axios.get('/questionApi/getAllQuestion')
                .then(result => {
                    if (result.data.code == 0) {
                        this.questionData = result.data.data
                    }
                })
                .catch(err => {
                    window.console.log(err);
                })
        }
    },
    created() {
        this.getQuestion();
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/Css/Question.less');
</style>