<template>
  <div class="swiper-container">

          <div class="swiper-main">
            <div class="swiper-item" v-for="(item,index) in list" :style="item.sty" :key="index">
                <div class="img-box">
                  <img :src="item.logo" :alt="item.name" class="logo">
                </div>
                <Rate class="my-rate" disabled allow-half :value="Number(conversionScore(item.rate.score,item.rate.max))" />
                
                <p class="reviews">Based on {{item.reviews}} reviews</p>
              
              
              <a :href="item.link" rel="nofollow" :class="{'btn': true, 'active':item.className}">
                <span class="text">Learn More</span>
                <span class="iconfont">&#xe65a;</span>
              </a>
            </div>
            
          </div>


          <!-- <div class="swiper-bottom">
            <ul class="circle-list">
              <li class="current"></li>
              <li></li>
              <li></li>
            </ul>

            <div class="btn-box">
              <span class="prev iconfont" @click="prev">&#xe65a;</span>
              <span class="next iconfont" @click="next">&#xe65a;</span>
            </div>
          </div> -->
        </div>
</template>

<script>
import {conversionScore} from '@/utils'
export default {
    props: {
        source: {
            type: Array,
            required: true
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 2500
        }
    },
    data() {
        return {
            showIndex: 0,
            list: [],
            timer:null
        }
    },
    watch: {
        source: {
            immediate: true,
            handler(value) {

                this.list = this.computedStyle(this.showIndex,value);
            }
        }
    },
    methods: {
        conversionScore,
        // 计算样式
        computedStyle(nowIndex,source) {
            
            // 确保索引的合法性
            let len = source.length,
                currentIndex = nowIndex < 0 ? 0 : nowIndex >= len ? len - 1: nowIndex,
                temp1 = currentIndex - 1,
                temp2 = currentIndex,
                temp3 = currentIndex + 1;

            temp1 < 0 ? (temp1 = len + temp1) : null;
            temp3 >= len ? (temp3 = temp3 - len) : null;

            // 计算每一项的样式

            return source.map((item,index) => {
                let transform = `translate(-50%,-50%) scale(1)`,
                    zIndex = 0,
                    className = false
                
                switch(index) {
                    case temp1: 
                        zIndex = 1;
                        transform = `translate(-165%,-50%) scale(1)`;
                        break;
                    case temp2: 
                        zIndex = 3;
                        className = true;
                        transform = `translate(-50%,-50%) scale(1.1)`;
                        break;
                    case temp3: 
                        zIndex = 1;
                        transform = `translate(65%,-50%) scale(1)`;
                        break;

                }
                item.sty = {
                    transform,
                    zIndex
                }
                item.className = className;

                return item;
            })
            
        },
        prev() {
            clearInterval(this.timer);
            let len = this.source.length;
            this.showIndex = this.showIndex - 1;
            if (this.showIndex < 0) {
                this.showIndex = len;
            }
            this.list = this.computedStyle(this.showIndex,this.source);
        },
        next() {
            clearInterval(this.timer);
            let len = this.source.length;
            this.showIndex ++;
            if (this.showIndex >= len) {
                this.showIndex = 0;
            }
            this.list = this.computedStyle(this.showIndex,this.source);
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            
            let len = this.source.length;
            this.showIndex ++;
            if (this.showIndex >= len) {
                this.showIndex = 0;
            }
            this.list = this.computedStyle(this.showIndex,this.source);
        },2500)
    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>