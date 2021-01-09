<template>
  <div class="mask-wrapper">
      <div class="mask-content">
          <a :href="mainLink" class="link-box" target="_blank" rel="noopener noreferrer">
             
             <img src="@/assets/Image/totalav-message.png" style="height: 530px" alt="top10antivirus">
             <a :href="mainLink" target="_blank" class="free-btn" rel="noopener noreferrer nofollow">
                 Claim discount Now
             </a>
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
            mainLink: 'https://www.dpbolvw.net/click-100176895-13681576?sid=best',
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
        },15000)

        $('.close').on('click',() => {
            this.closeAlert();
            clearTimeout(this.timer);
        })
        $('body').on('click',() => {
            this.closeAlert();
            clearTimeout(this.timer);
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
@import url('./index.less');
</style>