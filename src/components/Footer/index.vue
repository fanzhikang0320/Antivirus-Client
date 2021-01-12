<template>
  <div class="footer-area">
      <div class="footer-top">
          <img src="@/assets/Image/footer-logo.svg" alt="logo" class="logo">
          <nav class="menu-box">
              <router-link :to="{name: 'home'}">HOME</router-link>
              <router-link :to="{name: 'comparison'}">COMPARISON</router-link>
              <router-link to=/article>ARTICLE</router-link>
              <router-link :to="{name: 'about'}">ABOUT</router-link>
             
          </nav>
          <div class="share-box">
              <div class="iconfont" @click="shareToTwitter('The Top Antivirus Softwares 2021','https://www.thebestantivirus.news/')">&#xecb3;</div>
              <div class="iconfont" @click="shareToFacebook('The Top Antivirus Softwares 2021','https://www.thebestantivirus.news/')">&#xe6e5;</div>
          </div>
      </div>
      <div class="footer-bottom">
          
        <p class="copyright">Copyright © 2009-2020 Yiliang Technology Co., Ltd. All Rights Reserved.</p>
        <div class="nav">
            <!-- <router-link :to="{name: 'home'}">Term & Condition</router-link> -->
            <router-link :to="{name: 'privacy'}">Privacy policy</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import {shareToFacebook,shareToTwitter} from '@/utils/share.js'
export default {
    methods: {
        shareToFacebook,
        shareToTwitter

    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>