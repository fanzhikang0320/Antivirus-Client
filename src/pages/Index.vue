<template>
  <div class="home">
    <div class="main-container">
      <section class="banner-area">
        <div class="banner-content">
          <div class="tags">
            <img src="@/assets/img/b-4.png" alt="">
            <span class="text">January 2021</span>
          </div>
          <h1 class="website-title">TOP 10 ANTIVIRUS SOFTWARE</h1>
          <div class="describe">
            <p class="sub-title">Compare The Best Antivirus Solutions For Your Devices.</p>
            <p class="text">Protecting all your devices from unwanted viruses is vitally important, however it’s not always an easy task and can be time consuming and confusing. You should use antivirus software on all your devices including smartphones & tablets. We have compared some of the best antivirus software around so you don’t have to, we have included details of each company on various criteria from ease of use to value for money. Make sure you protect your computer before its too late as unwanted viruses can infect your computer putting your personal files at risk. </p>
          </div>
          <ul class="list">
            <li>
              <img src="@/assets/img/b-3.png" alt="">
              <span class="text">ANTI MALWARE</span>
            </li>
            <li>
              <img src="@/assets/img/b-2.png" alt="">
              <span class="text">ANTI SPYWAARE</span>
            </li>
            <li>
              <img src="@/assets/img/b-1.png" alt="">
              <span class="text">INTERNET SECURITY</span>
            </li>
          </ul>
        </div>
        <div class="banner-img">
          <img src="@/assets/img/banner.png" alt="">
        </div>
      </section>
      <section class="product-area">
        <div class="list-title-box">
          <span class="title-text">OUR TOP PICKS</span>
          <span class="title-text">FEATURES & DEVICES</span>
          <span class="title-text">TOTAL SCORE</span>
          <span class="title-text">
            <span class="iconfont">&#xe680;</span>
            <span @click="handleDiscloure">ADVERTISER DISCLOSURE</span>
            <div class="disclosure-content">
              <p> This website is a free online resource to help you make an informed decision when choosing an antivirus software. We receive advertising revenue from some antivirus software we featured to showcase their products.However, our reviews are not explicitly biased and the income we generate in this way does not specifically affect the service we bring to you, as our customer. Our reviews, and other exhibited content, are wholly original and produced by the site operator at its own discretion and does not imply endorsement. </p>
              <span class="text" @click="handleDiscloure">CLOSE</span>
            </div>
          </span>
        </div>
        <div class="product-list">
          <div :class="{'product-item': true, 'first': index == 0}" v-for="(item,index) in productList" :key="index">
            <div class="corner-box">
                <span class="icon" v-if="index == 0"></span>
                <span class="text" v-if="index == 0">EDITOR'S CHOICE</span>
              
                <span class="text" v-if="index != 0">#</span>
                <span class="num"  v-if="index != 0">{{index + 1 < 10 ? '0' + (index + 1) : (index + 1)}}</span>
             
              
            </div>
            <div class="img-box">
              <img :src="item.picture" :alt="item.name" class="logo">
            </div>
            <div class="info-box">
              <div class="name-box">
                <h3 class="name">{{item.name}}</h3>
                <span class="tags" v-if="item.tags != ''">{{item.tags}}</span>
              </div>
              <ul class="attr-list">
                <li v-for="(it,id) in item.meritList" :key="id">
                  <span class="iconfont">&#xe604;</span>
                  <p class="text">{{it.text}}</p>
                </li>
              </ul>
              <dl class="device-list">
                <dt>COMPATIBLE DEVICES</dt>
                <dd><span class="iconfont" title="Windows">&#xe898;</span></dd>
                <dd><span class="iconfont apple" title="MacOS">&#xe61b;</span></dd>
                <dd><span class="iconfont ios" title="iOS">&#xe734;</span></dd>
                <dd><span class="iconfont android" title="Android">&#xe690;</span></dd>
              </dl>
            </div>
            <div class="rate-box">
              <div class="rate-content">
                <span class="score">{{item.rate.score}}</span>
                <span class="evalute">OUTSTANDING</span>
                <Rate disabled allow-half class="my-rate" :value="Number(conversionScore(item.rate.score,item.rate.max))"/>
                <span class="reviews">Based on {{item.reviews}} reviews</span>
                <!-- <span class="text">PLEASE VOTE</span> -->
              </div>
              <div class="bottom-btn" v-if="item.reviewId">
                <router-link :to="{name: 'review', query: {productId: item.reviewId}}" class="review-link">
                  <span class="text">READ REVIEW</span>
                  <span class="iconfont">&#xe65a;</span>
                </router-link>
              </div>
              
              
            </div>
            <div class="btn-box">
              <div class="btn-content">
                <a :href="item.link" class="btn">
                  <span class="text">VISIT SITE</span>
                  <span class="iconfont">&#xe65a;</span>
                </a>
                <a :href="item.freelink" v-if="item.freelink != ''" target="_blank" class="desc" rel="noopener noreferrer nofollow">FREE TRAIL</a>
               
              </div>
              <div class="bottom-btn">
                <router-link :to="{name: 'comparison'}" class="compare-link">
                  <span class="iconfont tongji">&#xe6e8;</span>
                  <span class="text">COMPARE NOW</span>
                  <span class="iconfont">&#xe65a;</span>
                </router-link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section class="top-three-area">
        <h2 class="area-title">TOP 3 ANTIVIRUS</h2>
        <ul class="card-list">
          <li class="card-item" v-for="(item,index) in topList" :key="index">
            <img :src="item.logo" :alt="item.name" class="logo">
            <img :src="item.picture" :alt="item.name" class="picture">
            <Rate allow-half disabled :value="Number(conversionScore(item.rate.score,item.rate.max))" class="my-rate"/>
            <p class="reviews">Based on {{item.reviews}} reviews</p>
            <p class="describe">{{item.slogan}}</p>
            <a :href="item.link" class="btn">
              <span class="text">Learn More</span>
              <span class="iconfont">&#xe65a;</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="how-rate-area">
        <div class="how-rate-title-box">
          <span class="btn">HOW WE WORKS</span>
          <h2 class="area-title">HOW DO WE RATE ANTIVIRUS</h2>

        </div>

        <div class="how-rate-container">
          <ul class="options-content">
            <li :class="{'current': field == 'speed'}" @click="showStep('speed')">
              <div class="options-item">
                <img src="@/assets/img/speed-step.png" alt="" class="pic">
                <div class="text-box">
                  <span class="s">STEP - 01</span>
                  <span>TEST SPEED</span>
                </div>
              </div>
            </li>
            <li :class="{'current': field == 'features'}" @click="showStep('features')">
              <div class="options-item">
                <img src="@/assets/img/features-step.png" alt="" class="pic">
                <div class="text-box">
                  <span class="s">STEP - 02</span>
                  <span>FEATURES</span>
                </div>
              </div>
            </li>
            <li :class="{'current': field == 'use'}" @click="showStep('use')">
              <div class="options-item">
                <img src="@/assets/img/setting-step.png" alt="" class="pic">
                <div class="text-box">
                  <span class="s">STEP - 03</span>
                  <span>EASE OF USE</span>
                </div>
              </div>
            </li>
            <li :class="{'current': field == 'money'}" @click="showStep('money')">
              <div class="options-item">
                <img src="@/assets/img/money-step.png" alt="" class="pic">
                <div class="text-box">
                  <span class="s">STEP - 04</span>
                  <span>VALUE FOR MONEY</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="content-box">
            <div class="box-left">
              <span class="s">{{stepContent.key}}</span>
              <span class="title">{{stepContent.field}}</span>
            </div>
            <div class="content" v-html="stepContent.content"></div>
          </div>
        </div>
        
      </section>
      <section class="blog-area">
        <div class="blog-area-title-box">
          <h2 class="area-title">OUR LATEST BLOG</h2>
          <router-link to="/article" class="more">
            <span class="text">See More</span>
            <span class="iconfont">&#xe65a;</span>
          </router-link>
        </div>

        <div class="blog-list">
          <div class="blog-item" v-for="(item,index) in blogList" :key="index" @click="openBlogDetail(item.id)">
            <img :src="item.picture" alt="" class="pic">
            <div class="blog-container">
              <div class="info">
                <span class="name">JAN SMITH</span>
                <span class="date">
                  <span class="circle">·</span>
                  <span class="time">{{item.date }}</span>
                </span>
              </div>
              <h6 class="blog-title">{{item.title}}</h6>

              <div class="content" v-html="item.desc"></div>
            
            </div>
          </div>
          
          
        </div>
        
      </section>
      <section class="faq-area">
        <div class="faq-area-title-box">
          <h2 class="area-title">FREQUANTALY ASKED QUESTION</h2>
        </div>
        <div class="faq-container">
          <div class="faq-list leftList">
            <div class="faq-item" v-for="(item,index) in leftFaqList" :key="index" @click="showFaq(index,'left')">
              <div class="faq-title-box">
                <div class="box-left">
                  <img src="@/assets/img/Q.png" class="q"/>
                  <h6 class="faq-title">{{item.title}}</h6>
                </div>
                
                <span class="iconfont jiantou">&#xe65a;</span>
              </div>
              <div class="content" v-html="item.content"></div>

            </div>
          </div>
          <div class="faq-list rightList">
            <div class="faq-item" v-for="(item,index) in rightFaqList" :key="index" @click="showFaq(index,'right')">
              <div class="faq-title-box">
                <div class="box-left">
                  <img src="@/assets/img/Q.png" class="q"/>
                  <h6 class="faq-title">{{item.title}}</h6>
                </div>
                
                <span class="iconfont jiantou">&#xe65a;</span>
              </div>
              <div class="content" v-html="item.content"></div>

            </div>
          </div>
        </div>
        
      </section>
    </div>
    <section class="swiper-area"> 
        <h2 class="area-title">WE ALSO RECOMMEND VPN SERVICE TO PROTECT YOUR ONLINE SAFETY</h2>
        <Swiper :source='vpnsList'/>
        
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import Swiper from '@/components/Swiper'
import { conversionScore } from '@/utils'
import { getVPNs, getProduct, getFaq, getBlog, getReview } from '@/api'
export default {
  components:{
    Swiper
  },
  data() {
    return {
      score: 5,
      productList: [],
      topList: [],
      vpnsList: [],
      faqList: [],
      blogList: [],
      field: 'speed',
      stepContent: {
          key: '',
          field: '',
          content: ''
        },
      faqIndex: undefined,
      leftFaqList: [],
      rightFaqList: []
    }
  },
  methods: {
    conversionScore,
    getTime(timestamp) {
      let monthStr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
      let date = new Date(timestamp);
      let month = date.getMonth();
      let day = date.getDate();
      let year = date.getFullYear();

      return {
        year,
        month: monthStr[month],
        day,
      }


    },
    showStep(field) {
      this.field = field;
      if (field == 'speed') {
        
        this.stepContent = {
          key: 'STEP - 01',
          field: 'TEST SPEED',
          content: '<p>In an ideal world antivirus software would offer <strong data-v-ec644c4a="">complete protection with zero impact on your computer’s performance</strong>. Unfortunately, antivirus suites have to perform a lot of heavy lifting behind the scenes and this can have a small and sometimes noticeable effect on things like opening apps, moving files, and so on.</p>'
        }
      } else if (field == 'features') {
        this.stepContent = {
          key: 'STEP - 02',
          field: 'FEATURES',
          content: '<p>To get top marks, an antivirus package needs to <strong data-v-ec644c4a="">include all of the essentials</strong>, including smart anti-malware and anti-spyware, browsing protection and email security. Additionally, we also rate extra features that you might find useful, like <strong data-v-ec644c4a="">parental controls, social media protection, and anti-phishing security</strong>.</p>'
        }
      } else if (field == 'use') {
        this.stepContent = {
          key: 'STEP - 03',
          field: 'EASE OF USE',
          content: '<p>Antivirus software has become increasingly complex over recent years. Here we rate how easy it is to <strong data-v-ec644c4a="">set up the different elements of the antivirus suite</strong>, and how much user intervention is required to ensure crucial scans are performed and that important software updates are installed.</p>'
        }
      } else if (field == 'money') {
        this.stepContent = {
          key: 'STEP - 03',
          field: 'VALUE FOR MONEY',
          content: '<p>We always consider the <strong data-v-ec644c4a="">total cost of a package</strong> when we decide upon its overall review score. When it comes to antivirus there can be several differences between the brands, both with regard to the <strong data-v-ec644c4a="">level of protection offered and the number of devices protected</strong>.</p>'
        }
      }
    },
    showFaq(index,position) {
      // this.faqIndex = index;

      if (position == 'left') {
         $('.leftList .faq-item .jiantou').eq(index).toggleClass('current');
        $('.leftList .faq-item .content').eq(index).slideToggle();
      } else {
         $('.rightList .faq-item .jiantou').eq(index).toggleClass('current');
        $('.rightList .faq-item .content').eq(index).slideToggle();
      }
     
    },
    handleDiscloure() {
      $('.disclosure-content').slideToggle();
    },
    openBlogDetail(id) {
      this.$router.push({name: 'detail',query: {id: id}})
    },
    getProductList() {
      this.$axios.all([getReview(),getProduct()])
        .then(this.$axios.spread((res1,res2) => {
          let reviewData = res1,
              productData = res2;

          reviewData.data.data.forEach(item => {
            productData.data.data.forEach(ele => {

              if (ele.name.toLocaleLowerCase().trim() == item.product.name.replace(/\s*/g,'').toLocaleLowerCase().trim()) {
                
                ele.reviewId = item.productId;
              }
            })
          });

          this.productList=  productData.data.data;
          this.topList = productData.data.data.slice(0,3);

        }))
        .catch(err => {
          this.$router.push({name: 'error'});
        })
    }
  },
  
  mounted() {

    this.getProductList();

    getFaq().then(res => {
      this.faqList = res.data.data;

      res.data.data.forEach((ele,index) => {
        if (index % 2 == 0) {
          this.rightFaqList.push(ele);
        } else {
          this.leftFaqList.push(ele);
        }
      })
    }).catch(err => {
      console.log(err);
    })

    getBlog(0,4).then(res => {
      res.data.data.rows.forEach(item => {
        item.picture = 'https://www.thebestantivirus.news' + item.picture;
        let time = this.getTime(item.addTime);

        item.date = `${time.month} ${time.day}, ${time.year}`
      })

      this.blogList = res.data.data.rows;

    }).catch(err => {
      console.log(err);
    })

    getVPNs().then(res => {
      this.vpnsList = res.data.data;
    }).catch(err => {
      console.log(err);
    })
    
    this.showStep(this.field);

  }
  
}
</script>

<style lang="less" scoped>
@import url('../assets/css/index.less');
</style>