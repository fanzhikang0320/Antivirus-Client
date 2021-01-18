<template>
  <div class="app">
    <header>
        <Nav/>
    </header>
    <main >
        <router-view></router-view>
        <BackTop/>
        <Message :src="imgSrc" :link="link" :freeLink="freeLink" :duration="20000"/>
    </main>
    <footer>
        <Footer/>
    </footer>
  </div>
</template>

<script>

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Message from '@/components/Message'
export default {
    components: {
        Nav,
        Footer,
        Message
    },
    data() {
      return {
        imgSrc: '/public/client/data/img/Message.png',
        link: 'https://hotsale.featuredproduct.news/2d477833-27ba-47e1-a835-b737c7bab2f3',
        freeLink: 'https://track.totalav.com/5fc0ba7489e8d/click'
      }
    }
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
}
header {
  position: fixed;
  top: 0;
  z-index: 9;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  background-color: #132036;
  box-shadow: 0px 2px 8px rgba(0,0,0,.16);
}
main {
  padding-top: 90px;
  min-height: 100%;
  width: 100%;
  // min-height: ~ 'calc(100% - 286px)';
  background-color: #f7fafc;

  @media screen and (max-width: 750px) {
    padding-top: 64px;
  }
}
footer {
  background-color: #132036;
}
</style>