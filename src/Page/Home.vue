<template>
  <div class="home-wrapper">
    
    <div class="banner-area">
      <img :src="bannerData.picture" alt="" class="bg">
      <div class="banner-content">
        <h1 class="title">{{bannerData.title}}</h1>
        <div class="content" v-html="bannerData.content"></div>
      </div>
    </div>
    <div class="system-area">
      <div class="system-content">
        <span class="title">Operating System</span>
        <ul class="options clearfix">
          <li>
            <span :class="{'circle-box': true, 'current': clickNow == 'windows'}" @click="handleSelect('windows')"></span>
            <span class="circle-right"  @click="handleSelect('windows')">
              <img v-if="clickNow == 'windows'" src="@/assets/Image/windowsColor.png" alt="windows" class="system-logo">
              <img v-else src="@/assets/Image/windows.png" alt="windows" class="system-logo">
              <span class="system-name">Windows</span>
            </span>
          </li>
         
          <li>
            <span :class="{'circle-box': true, 'current': clickNow == 'macos'}" @click="handleSelect('macos')"></span>
            <span class="circle-right" @click="handleSelect('macos')">
              <img v-if="clickNow == 'macos'" src="@/assets/Image/macOSColor.png" alt="macos" class="system-logo">
              <img v-else src="@/assets/Image/macOS.png" alt="macos" class="system-logo">
              <span class="system-name">Mac OS</span>
            </span>
          </li>
          <li>
            <span :class="{'circle-box': true, 'current': clickNow == 'ios'}" @click="handleSelect('ios')"></span>
            <span class="circle-right" @click="handleSelect('ios')">
              <img v-if="clickNow == 'ios'" src="@/assets/Image/iosColor.png" alt="ios" class="system-logo">
              <img v-else src="@/assets/Image/ios.png" alt="ios" class="system-logo">
              <span class="system-name">iOS</span>
            </span>
          </li>
          <li>
            <span :class="{'circle-box': true, 'current': clickNow == 'android'}" @click="handleSelect('android')"></span>
            <span class="circle-right" @click="handleSelect('android')">
              <img v-if="clickNow == 'android'" src="@/assets/Image/androidColor.png" alt="android" class="system-logo">
              <img v-else src="@/assets/Image/android.png" alt="android" class="system-logo">
              <span class="system-name">Android</span>
            </span>
          </li>
           <li>
            <span :class="{'circle-box': true, 'current': clickNow == 'linux'}" @click="handleSelect('linux')"></span>
            <span class="circle-right" @click="handleSelect('linux')">
              
              <img v-if="clickNow == 'linux'" src="@/assets/Image/linuxColor.png" alt="linux" class="system-logo">
              <img v-else src="@/assets/Image/linux.png" alt="linux" class="system-logo">
              <span class="system-name">Linux</span>
            </span>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="main clearfix">
        
        <div class="main-left">

          <div class="main-top clearfix">
            <p class="left-p"><span class="icon"></span><span class="text">Last Updated on {{getDate()}}</span></p>
            <p class="right-p">
              <span class="text" @click.stop="showContent">Advertiser Disclosure</span>
              <span class="icon"></span>
              <span class="content" v-if="isShowContent">
                This website is a free online resource to help you make an informed decision when choosing an antivirus software. We receive advertising revenue from some antivirus software we featured to showcase their products.However, our reviews are not explicitly biased and the income we generate in this way does not specifically affect the service we bring to you, as our customer. Our reviews, and other exhibited content, are wholly original and produced by the site operator at its own discretion and does not imply endorsement.
                <!-- <span class="close" @click.stop="showContent">Close</span> -->
              </span>
             
            </p>
          </div>

          <div class="ranking-box">
            <Ranking :ranking="renderProduct"/>
          </div>
        </div>
        <div class="main-right">
          <div class="top-review-area">
            <h3 class="title">Top Reviews</h3>
            <ul class="top-list">
              <li v-for="(item,index) in topFiveReview" :key="index">
                <span class="name">{{item.product.name}}</span>
                <span class="score">{{item.product.rate}}</span>
                <router-link :to="{name: 'review', query: {productId: item.product.id}}" class="review-btn">Review</router-link>
              </li>
              
            </ul>
          </div>
          <div class="must-read-area">
            <MustRead />
          </div>
        </div>
    </div>
    <div class="question-area">
      <Question/>
    </div>
    <div class="topTen-area">
      <TopTen />
    </div>
  </div>
</template>

<script>
import Ranking from '@/components/Ranking.vue'
import MustRead from '@/components/MustRead.vue'
import TopTen from '@/components/TopTen.vue'
import Question from '@/components/Question.vue'

export default {
  data() {
    return {
      clickNow: 'windows',
      bannerData: {
        title: '',
        picture: '',
        content: ''
      },
      productData: [],
      renderProduct: [],
      topFiveReview: [],
      isShowContent: false
    }
  },
  components: {
    
    Ranking,
    MustRead,
    TopTen,
    Question
  },
  watch: {
    productData: {
      handler() {
        this.selectSystem(this.clickNow);
      },
      deep: true
    }
  },
  methods: {
    handleSelect(params) {
      this.clickNow = params;
      this.selectSystem(params)
    },
    getDate() {
      let month = new Date().getMonth();
      let string = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
      let year = new Date().getFullYear();
      return `${string[month]} ${year}`;
    },
    showContent() {
      this.isShowContent = !this.isShowContent;
    },
    selectSystem(system) {
      //根据选择的系统过滤掉
      let newArr = this.productData.filter((item) => {
        return JSON.parse(item.system).includes(system) && item[system+'_serial'] != 0;
      })
      //根据当前选择的系统进行排序
      for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i][system+'_serial'] > newArr[i+1][system+'_serial']) {
          let value = newArr[i+1];
          newArr[i+1] = newArr[i];
          newArr[i] = value;
        } else if (newArr[i][system+'_serial'] == newArr[i+1][system+'_serial']) {
          if (new Date(newArr[i]['ctime']).getTime() < new Date(newArr[i+1]['ctime']).getTime()) {
             let value = newArr[i+1];
              newArr[i+1] = newArr[i];
              newArr[i] = value;
          }
        }
      }

      this.renderProduct = newArr;
      
      // window.console.log('productrender',this.renderProduct)
    },
    getHomebanner() {
      this.axios.get('/homebannerApi/selectHomebanner')
        .then(result => {
          this.bannerData.title = result.data.data[0].title;
          this.bannerData.picture = result.data.data[0].picture;
          this.bannerData.content = result.data.data[0].content;
        })
    },
    getProduct() {
      this.axios.get('/productAPi/selectShowProduct')
        .then(result => {
          this.productData = result.data.data;
          window.console.log(result);
          
        })
        .catch(err => {
          window.console.log(err);
        })
    },
    getTopFiveReview() {
      this.axios.get('/reviewApi/selectTopfiveReview')
        .then(result => {
          // window.console.log(result);
          this.topFiveReview = result.data.data;
        })
        .catch(err => {
          window.console.log(err);
        })
    }
  },
  created() {
    this.getHomebanner();
    this.getProduct();
    this.getTopFiveReview();
  },
  mounted() {
    
    this.$nextTick(() => {
      document.body.onclick = () => {
        // e.preventDefault(); 20200722解开a标签无法跳转的灵异事件，哈哈哈。。。
        this.isShowContent = false;
      }
    })
  },
  destroyed() {
   document.body.onclick = null
  }
}
</script>

<style lang="less" scoped>
    @import url('../assets/Css/Home.less');
</style>