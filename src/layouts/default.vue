<template>
  <div class="app">
    <header>
        <Nav/>
    </header>
    <main >
        <router-view></router-view>
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
        link: 'https://track.totalav.com/5f3e31dcba9f9/click',
        freeLink: 'https://track.totalav.com/5f030579e4a47/click'
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
}
footer {
  background-color: #132036;
}
</style>