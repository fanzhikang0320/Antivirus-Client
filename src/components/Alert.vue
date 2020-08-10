<template>
  <div class="mask-wrapper">
      <div class="mask-content">
          <a href="https://track.totalav.com/5f030579e4a47/click" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/Image/alert-ad.jpg" alt="" class="alert-ad">
          </a>
          <span class="close"></span>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Alert',
    data() {
        return {
            timer: null,
            count: 0
        }
    },
    methods: {
        showAlert() {
            $('.mask-wrapper').css({
                display: 'block'
            })
            $('.mask-content').animate({
                top: '50%',
                opacity: 1
            },300)

        },
        closeAlert() {
            $('.mask-wrapper').css({
                display: 'none'
            })
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            if (this.count == 0) {
                this.showAlert();
            }
            this.count++;
            clearTimeout(this.timer);
        },20000)

        $('.close').on('click',() => {
            this.closeAlert();
        })
        $('body').on('click',() => {
            this.closeAlert();
        })
    },
    beforeDestroy() {
        clearTimeout(this.timer);
        $('.close').off('click');
        $('body').off('click');
    }
}
</script>

<style lang="less" scoped>
.mask-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    .mask-content {
        position: absolute;
        left: 50%;
        top: 38%;
        transform: translate(-50%,-50%);
        width: 590px;
        height: 320px;
        opacity: 0;
        a {
            display: block;
            width: 100%;
            height: 100%;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .close {
            position: absolute;
            right: -30px;
            top: -30px;
            width: 25px;
            height: 25px;
            background-image: url('../assets/Image/cha.svg');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            cursor: pointer;
        }
    }
}
</style>