<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide card-item" v-for="(item,index) in list" :key="index">
            <img v-lazy="item.logo" :alt="item.name" class="logo">
            <img v-lazy="item.picture" :alt="item.name" class="picture">
            <Rate allow-half disabled :value="5" class="my-rate"/>
            <p class="reviews">Based on {{item.reviews}} reviews</p>
            <p class="describe">{{item.slogan}}</p>
            <a :href="item.link" class="btn">
              <span class="text">Learn More</span>
              <span class="iconfont">&#xe65a;</span>
            </a>
        </div>
    </div>
 </div>
</template>


<script>
import Swiper from 'swiper'

export default {
    props: {
        list: {
            type: Array,
            redirect: true
        }
    },
    methods: {
        initSwiper() {
            this.mySwiper = new Swiper ('.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                slidesPerView : 1.2,  
                centeredSlides : true,
                observer: true, // 必须，否则不会动态设置
                observeParents: true,
                spaceBetween : 50,
                freeMode : true,
                freeModeSticky : true,
                slideActiveClass : 'slide-active',
            })
        }
        
    },
    mounted() {
        this.initSwiper();
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>