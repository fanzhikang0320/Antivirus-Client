<template>
  <nav class="menu-wrapper">
    <img src="@/assets/Image/footer-logo.svg" alt="Antivirus Reivew" class="logo">
    <ul class="menu">
        <li>
            <router-link :to="{name: 'home'}" exact class="menu-item">HOME</router-link>
        </li>
        <li>
            <router-link :to="{name: 'comparison'}" class="menu-item">COMPARISON</router-link>
        </li>
        <li class="more">
            <span class="menu-item">REVIEWS <span class="icon">&#xe666;</span></span>
            <ul class="more-ul">
                <li v-for="(item,index) in reviewNav" :key="index">
                    <router-link :to="{name: 'review', query: {productId: item.productId}}">{{item.product.name}} Antivirus</router-link>
                </li>
            </ul>
        </li>
        <li>
            <router-link to="/article" class="menu-item">ARTICLE</router-link>
        </li>
        <li>
            <router-link :to="{name: 'contact'}" class="menu-item">GET HELP</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import $ from 'jquery'
import { getReview } from '@/api'
export default {
    data() {
        return {
            reviewNav: []
        }
    },
    mounted() {
        getReview().then(res => {
            this.reviewNav = res.data.data;
        }).catch(err => {
            console.log(err);
        })

        $('.menu .more').hover(function () {
            $('.menu .more-ul').stop().slideDown('fast');
        },function () {
            $('.menu .more-ul').stop().slideUp('fast');
        })
    }
}
</script>

<style lang="less" scoped>
    @import url('./index.less');
</style>