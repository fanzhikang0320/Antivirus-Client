<template>
  <nav class="menu-wrapper clearfix">
    <img src="@/assets/Image/logo.svg" alt="Antivirus Reivew" class="logo">
    <ul class="menu clearfix">
        <li>
            <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name: 'comparison'}">Comparison</router-link>
        </li>
        <li class="more">
            <router-link :to="{name: 'review',query: {productId: 1}}">Review <span class="icon">&#xe666;</span></router-link>
            <ul class="more-ul clearfix">
                <li v-for="(item,index) in reviewNav" :key="index">
                    <router-link :to="{name: 'review', query: {productId: item.productId}}">{{item.product.name}} Antivirus</router-link>
                </li>
            </ul>
        </li>
        <li>
            <router-link :to="{name: 'article'}">Article</router-link>
        </li>
        <li>
            <router-link :to="{name: 'contact'}">Contact</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            reviewNav: []
        }
    },
    methods: {
        getReviewNav() {
            this.axios.get('/reviewApi/selectReviewNav')
                .then(result => {
                    this.reviewNav = result.data.data;
                    
                })
                .catch(err => {
                    window.console.log(err);
                })
        }
        
    },
    created() {
        this.getReviewNav()
    }
}
</script>

<style lang="less" scoped>
    @import url('../assets/Css/Nav.less');
</style>