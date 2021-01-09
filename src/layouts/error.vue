<template>
  <div class="notfound-wrapper">
    <img src="@/assets/Image/404.png" alt="404">
    <h3 class="title">Whoops!</h3>
    
    <p>we couldn't find the page you were looking for.</p>
    <p class="goback">Let's get you <router-link :to="{name: 'home'}">Back</router-link></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.notfound-wrapper {
  margin: auto;
  margin-top: 70px;
  .min_max_width();
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 100px;
  }
  .title {
    margin-top: 60px;
    font-size: 30px;
    color: rgb(71,91,106);
    margin-bottom: 20px;
    
  }
  p {
    color: rgb(151,164,174);
    font-size: 18px;
    line-height: 30px;
    &.goback {
      margin-bottom: 100px;
    }
    a {
      color: rgb(85,159, 253);
      text-decoration: none;
      border-bottom: 1px solid rgb(85,159, 253);
    }
  }
  
}
</style>