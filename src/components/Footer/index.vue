<template>
  <div class="footer-area">
      <div class="footer-top">
          <img src="@/assets/Image/footer-logo.svg" alt="logo" class="logo">
          <nav class="menu-box">
              <router-link :to="{name: 'home'}">HOME</router-link>
              <router-link :to="{name: 'comparison'}">COMPARISON</router-link>
              <router-link :to="{name: 'article'}">ARTICLE</router-link>
              <router-link :to="{name: 'about'}">ABOUT</router-link>
             
          </nav>
          <div class="share-box">
              <div class="iconfont">&#xecb3;</div>
              <div class="iconfont">&#xe6e5;</div>
          </div>
      </div>
      <div class="footer-bottom">
          
        <p class="copyright">Copyright © 2009-2020 Yiliang Technology Co., Ltd. All Rights Reserved.</p>
        <div class="nav">
            <router-link :to="{name: 'home'}">Term & Condition</router-link>
            <router-link :to="{name: 'privacy'}">Privacy policy</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>