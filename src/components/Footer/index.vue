<template>
  <div class="footer-area">
      <div class="footer-top">
          <img src="@/assets/Image/footer-logo.svg" alt="logo" class="logo">
          <nav class="menu-box">
              <router-link :to="{name: 'home'}"><span class="text">HOME</span><span class="iconfont">&#xe65a;</span></router-link>
              <router-link :to="{name: 'comparison'}"><span class="text">COMPARISON</span><span class="iconfont">&#xe65a;</span></router-link>
              <router-link to=/article><span class="text">ARTICLE</span><span class="iconfont">&#xe65a;</span></router-link>
              <router-link :to="{name: 'about'}"><span class="text">ABOUT</span><span class="iconfont">&#xe65a;</span></router-link>
             
          </nav>
          <div class="share-box">
              <div class="iconfont" @click="shareToTwitter('The Top Antivirus Softwares 2021','https://www.thebestantivirus.news/')">&#xecb3;</div>
              <div class="iconfont" @click="shareToFacebook('The Top Antivirus Softwares 2021','https://www.thebestantivirus.news/')">&#xe6e5;</div>
          </div>
      </div>
      <div class="footer-bottom">
          
        <p class="copyright">Copyright © 2009-2021 Westwin Technologies Co.,Ltd. All Rights Reserved.</p>
        <div class="nav">
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