<template>
  <nav class="menu-wrapper">
    <img src="@/assets/img/header-logo.png" alt="Antivirus Reivew" class="logo">
    <ul class="menu">
        <li>
            <router-link :to="{name: 'home'}" exact class="menu-item">HOME</router-link>
        </li>
        <li>
            <router-link :to="{name: 'comparison'}" class="menu-item">COMPARISON</router-link>
        </li>
        <li class="more">
            <span class="menu-item" @click="handleShowReviews">REVIEWS <span class="icon">&#xe666;</span></span>
            <ul class="more-ul">
                <li v-for="(item,index) in reviewNav" :key="index">
                    <router-link exact :to="{name: 'review', query: {productId: item.productId}}">{{item.product.name}} Antivirus</router-link>
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
    <span :class="{'menu-icon': true, 'iconfont': true, 'active': isActive}" @click="handleShowMenu">&#xe608;</span>
  </nav>
</template>

<script>
import $ from 'jquery'
import { getReview } from '@/api'
export default {
    data() {
        return {
            reviewNav: [],
            isActive: false
        }
    },
    methods: {
        handleShowMenu() {
            this.isActive = !this.isActive;
            this.$nextTick(() => {
                
                $('.menu-wrapper .menu').slideToggle();

                if (!this.isActive) {
                    $('.menu .more .menu-item .icon').removeClass('rotate')
                    $('.menu-wrapper .more-ul').slideUp();
                }
            })
            
        },
        handleShowReviews() {
            this.$nextTick(() => {
                if (window.screen.width <= 750) {
                    $('.menu .more').hover(() => false,() => false)
                    $('.menu .more .menu-item .icon').toggleClass('rotate')
                    $('.menu-wrapper .more-ul').slideToggle();
                } else {
                    return false;
                }
            })
            
        }
    },
    mounted() {
        getReview().then(res => {
            this.reviewNav = res.data.data;
        }).catch(err => {
            console.log(err);
        })

        if (window.screen.width <= 750) {
            
        } else {
            this.$nextTick(() => {

                $('.menu .more').hover(function () {
                    $('.menu .more .menu-item .icon').addClass('rotate')
                    $('.menu .more-ul').stop().slideDown('fast');
                },function () {
                    $('.menu .more .menu-item .icon').removeClass('rotate')
                    $('.menu .more-ul').stop().slideUp('fast');
                })
            })
        }
        
    }
}
</script>

<style lang="less" scoped>
    @import url('./index.less');
</style>