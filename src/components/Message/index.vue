<template>
  <div class="mask-wrapper">
      <div class="mask-content">
          <div class="link-box" target="_blank" rel="noopener noreferrer">
             
             <img :src="src" style="height: 530px;min-width:850px;" alt="thebestantivirus">
             <div class="link-box-container">
                <a :href="link" target="_blank" rel="noopener noreferrer nofollow" class="btn">
                    <span class="text">Claim 80% off Now</span>
                    <span class="iconfont">&#xe602;</span>
                </a>
                <p class="small">not sure yet ......? You can also</p>
                <a :href="freeLink" target="_blank" rel="noopener noreferrer nofollow"  class="btn free-btn">
                    <span class="text">Get the free Trail</span>
                    <span class="iconfont">&#xe602;</span>
                </a>
                <span class="close-text" @click="closeAlert">I don't need PC protect, thanks</span>
                </div>
            </div>
          <span class="close" @click="closeAlert"></span>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Message',
    props: {
        src: {
            type: String
        },
        link: {
            type: String
        },
        freeLink: {
            type: String
        },
        duration: {
            type: Number,
            default: 20000
        }
    },
    data() {
        return {
            // mainLink: 'https://www.dpbolvw.net/click-100176895-13681576?sid=best',
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
                top: '45%',
                opacity: 1
            },300)

        },
        closeAlert() {
            $('.mask-wrapper').css({
                display: 'none'
            })
            clearTimeout(this.timer);
        }
    },
    mounted() {

        let that = this;
        this.timer = setTimeout(() => {
            $('body').on('mouseenter',function () {

                $(this).one('mouseleave', () => {
                    if (that.count == 0) {
                        that.showAlert();
                    }
                    that.count++;
                })
            })
            // clearTimeout(this.timer);
        },this.duration)

    },
    beforeDestroy() {
        clearTimeout(this.timer);
        $('.close').off('click');
        $('body').off('click');
    }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>