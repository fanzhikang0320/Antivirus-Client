<template>
  <div class="footer-area">
      <div class="footer-top">
          <img src="@/assets/Image/footerLogo.png" alt="logo" class="logo">
          <nav class="menu-box">
              <ul class="menu clearfix">
                  <li>
                      <router-link :to="{name: 'comparison'}">Comparison</router-link>
                  </li>
                  <li>
                      <router-link :to="{name: 'article'}">Article</router-link>
                  </li>
                  <li>
                      <router-link :to="{name: 'contact'}">Contact</router-link>
                  </li>
                  <li>
                      <router-link :to="{name: 'privacy'}">Privacy</router-link>
                  </li>
                  <li>
                      <router-link :to="{name: 'about'}">About Us</router-link>
                  </li>
              </ul>
          </nav>
      </div>
      <div class="footer-bottom">
          <div class="img-list">
              <a href="#"><img src="@/assets/Image/facebook.png" alt="facebook"></a>
              <a href="#"><img src="@/assets/Image/twitter.png" alt="twitter"></a>
          </div>
          <p class="copyright">Copyright © 2009-2020 Yiliang Technology Co., Ltd. All Rights Reserved.</p>
          <p class="by">By using our content, products & services you agree to our Terms of Service and Privacy Policy</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url('../assets/Css/Footer.less');
</style>