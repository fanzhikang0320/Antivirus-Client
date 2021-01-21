<template>
  <div class="home">
    <div class="main-container">
      <section class="banner-area">
        <div class="banner-content">
          <div class="tags">
            <img src="@/assets/img/b-4.png" alt="">
            <span class="text">{{this.getTime(new Date(),'complete').month}} {{this.getTime(new Date(),'complete').year}}</span>
          </div>
          <h1 class="website-title">TOP {{allProduct.length}} ANTIVIRUS SOFTWARE</h1>
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
                <span class="text" v-if="index == 0">Most Popular Antivirus</span>
              
                <span class="text" v-if="index != 0">#</span>
                <span class="num"  v-if="index != 0">{{index + 1 < 10 ? '0' + (index + 1) : (index + 1)}}</span>
             
              
            </div>
            <div class="img-box">
              <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" class="logo-link" style="text-decoration:none;">
              
                <img :src="item.picture" :alt="item.name" class="logo">
              </a>
              <div class="phone-info-box">
                <span class="tags" v-if="item.tags != ''">{{item.tags}}</span>
                <h3 class="name">{{item.name}}</h3>
                <dl class="device-list">
                  <dt>COMPATIBLE DEVICES</dt>
                  <dd><span class="iconfont" title="Windows">&#xe898;</span></dd>
                  <dd><span class="iconfont apple" title="MacOS">&#xe61b;</span></dd>
                  <dd><span class="iconfont ios" title="iOS">&#xe734;</span></dd>
                  <dd><span class="iconfont android" title="Android">&#xe690;</span></dd>
                </dl>
              </div>
            </div>
            <div class="info-box">
              <div class="name-box">
                <h3 class="name">
                  <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" class="link-name">{{item.name}}</a>
                </h3>
                <span class="tags" v-if="item.tags != ''">{{item.tags}}</span>
              </div>
              <h6 class="attr-list-title">FEATURES & DEVICES</h6>
              <ul class="attr-list">
                <li v-for="(it,id) in item.meritList" :key="id">
                  <span class="iconfont">&#xe604;</span>
                  <p class="text">{{it.text}}</p>
                </li>
              </ul>
              <dl class="device-list">
                <!-- <dt>COMPATIBLE DEVICES</dt> -->
                <dd :class="{'nonsupport': !item.deviceList.windows}"><span class="iconfont" title="Windows">&#xe898;</span></dd>
                <dd :class="{'nonsupport': !item.deviceList.macOS}"><span class="iconfont apple" title="MacOS">&#xe61b;</span></dd>
                <dd :class="{'nonsupport': !item.deviceList.iOS}"><span class="iconfont ios" title="iOS">&#xe734;</span></dd>
                <dd :class="{'nonsupport': !item.deviceList.android}"><span class="iconfont android " title="Android">&#xe690;</span></dd>
              </dl>
            </div>
            <div class="rate-box" @mouseleave="closeHideContent(index)">
              <div class="rate-content" @click="showHideContent(index)">
                <div class="score-container">
                  <span class="score">{{item.rate.score}}</span>
                    <div class="star-container">
                      <span class="evalute" v-if="index < 3">OUTSTANDING</span>
                      <span class="evalute" v-if="index >= 3 && index < 6">VERY GOOD</span>
                      <span class="evalute" v-if="index >= 6 ">GOOD</span>
                      <Rate disabled allow-half class="my-rate" :value="Number(conversionScore(item.rate.score,item.rate.max))"/>
                    </div>
                  </div>
                <span class="reviews">Based on {{item.reviews}} reviews</span>
                
              </div>
              <div class="hide-content">
                <p class="text">The score is depending on : our editors' test on the features, ease of use and price, users' review from Trustpilot and other platforms.</p>
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
                <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" class="btn" @click="handleExe">
                  <span class="text">CHECK PRICE</span>
                  <span class="iconfont">&#xe65a;</span>
                </a>
                <a :href="item.freelink" v-if="item.freelink != '' && item.promotion_info != ''" target="_blank" class="desc" rel="noopener noreferrer nofollow">{{item.promotion_info}}</a>
               
              </div>
              
            </div>
          </div>
          <div class="load-box">
            <button @click="loadMore" v-if="this.productList.length != this.allProduct.length">VIEW MORE ANTIVIRUS</button>
            <button @click="closeMore" v-else>CLOSE</button>
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
            <a :href="item.link" rel="noopener noreferrer nofollow" target="_blank" @click="handleExe" class="btn">
              <span class="text">Learn More</span>
              <span class="iconfont">&#xe65a;</span>
            </a>
          </li>
        </ul>
        <!-- 移动端 展示另一个 -->
        <PhoneSwiper :list="topList"/>
      </section>
      
      <section class="how-rate-area">
        <div class="how-rate-title-box">
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
                <span class="iconfont" data-field="speed">&#xe65a;</span>
              </div>
              <div class="phone-content-box" data-field="speed">
                <div class="phone-title-box">
                  <span class="blue">STEP - 01</span>
                  <span class="phone-title">TEST SPEED</span>
                  <div class="content">
                    <p>In an ideal world antivirus software would offer <strong data-v-ec644c4a="">complete protection with zero impact on your computer’s performance</strong>. Unfortunately, antivirus suites have to perform a lot of heavy lifting behind the scenes and this can have a small and sometimes noticeable effect on things like opening apps, moving files, and so on.</p>
                  </div>
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
                <span class="iconfont" data-field="features">&#xe65a;</span>
              </div>
              <div class="phone-content-box" data-field="features">
                <div class="phone-title-box">
                  <span class="blue">STEP - 02</span>
                  <span class="phone-title">FEATURES</span>
                  <div class="content">
                    <p>To get top marks, an antivirus package needs to <strong data-v-ec644c4a="">include all of the essentials</strong>, including smart anti-malware and anti-spyware, browsing protection and email security. Additionally, we also rate extra features that you might find useful, like <strong data-v-ec644c4a="">parental controls, social media protection, and anti-phishing security</strong>.</p>
                  </div>
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
                <span class="iconfont" data-field="use">&#xe65a;</span>
              </div>
              <div class="phone-content-box" data-field="use">
                <div class="phone-title-box">
                  <span class="blue">STEP - 03</span>
                  <span class="phone-title">EASE OF USE</span>
                  <div class="content">
                    <p>Antivirus software has become increasingly complex over recent years. Here we rate how easy it is to <strong data-v-ec644c4a="">set up the different elements of the antivirus suite</strong>, and how much user intervention is required to ensure crucial scans are performed and that important software updates are installed.</p>
                  </div>
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
                <span class="iconfont" data-field="money">&#xe65a;</span>
              </div>
              <div class="phone-content-box" data-field="money">
                <div class="phone-title-box">
                  <span class="blue">STEP - 04</span>
                  <span class="phone-title">VALUE FOR MONEY</span>
                  <div class="content">
                    <p>We always consider the <strong data-v-ec644c4a="">total cost of a package</strong> when we decide upon its overall review score. When it comes to antivirus there can be several differences between the brands, both with regard to the <strong data-v-ec644c4a="">level of protection offered and the number of devices protected</strong>.</p>
                  </div>
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
        <div class="phone-more">
          <router-link to="/article" class="more">
            <span class="text">See More</span>
            <span class="iconfont">&#xe65a;</span>
          </router-link>
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
        <h2 class="phone-area-title">RECOMMEND VPN</h2>
        <Swiper :source='vpnsList'/>
        
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import Swiper from '@/components/Swiper'
import PhoneSwiper from '@/components/PhoneSwiper/index.vue'
import { conversionScore, changeTime } from '@/utils'
import { getVPNs, getProduct, getFaq, getBlog, getReview } from '@/api'
export default {
  components:{
    Swiper,
    PhoneSwiper
  },
  data() {
    return {
      score: 5,
      count: 0, //  产品数量
      allProduct:[],
      productList: [],
      limit: 0,
      offset: 5,
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
    // 转换时间
    getTime(timestamp,monthFormat) {
      return changeTime(timestamp,{monthFormat: monthFormat});

    },
    handleExe() {
      window.execute();
    },
    // 展示step
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

      this.showPhoneStep(field);
    },
    // 展示step（移动端）
    showPhoneStep(field) {
      if (window.screen.width <= 750) {
        $('.options-content .iconfont').each(function () {
          let fieldTxt = $(this).data('field');
          if (field == fieldTxt) {
            $(this).toggleClass('now')
          }
        })
          $('.options-content .phone-content-box').each(function () {
            let fieldTxt = $(this).data('field');
            if (field == fieldTxt) {
              $(this).slideToggle()
            }
          })
        }
    },
    // 展开问题
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
    // 是否显示disclosure内容
    handleDiscloure() {
      $('.disclosure-content').slideToggle();
    },
    // 跳转至 blog详情
    openBlogDetail(id) {
      this.$router.push({name: 'detail',query: {id: id}})
    },
    // 获取 产品列表
    getProductList() {
      let aff_sub = this.$route.query['utm_term'];
      let aff_sub2 = this.$route.query['TargetId'];
      let aff_sub3 = this.$route.query['loc'];
      let msclkid = this.$route.query['msclkid'];
      let gclid = this.$route.query['gclid'];
      let aff_sub4 = Math.floor(new Date().getTime() / 1000);

      this.$axios.all([getReview(),getProduct()])
        .then(this.$axios.spread((res1,res2) => {
          let reviewData = res1,
              productData = res2;

          productData.data.data.forEach(ele => {
            if (ele.key == 'totalav') {

              if (typeof gclid != 'undefined') {
                ele.link =  `${ele.link}?gclid=google&keyword=${aff_sub === undefined ? 'false' : aff_sub}&targetid=${aff_sub2 === undefined ? 'false' : aff_sub2}&CampaignId=g`
              } else if (typeof msclkid != 'undefined') {
                ele.link = `${ele.link}?msclkid=${msclkid}&keyword=${aff_sub === undefined ? 'false' : aff_sub}&TargetId=${aff_sub2 === undefined ? 'false' : aff_sub2}&CampaignId=b`
              } else {
                ele.link = `${ele.link}?default=false`
              }

            }
          })
          reviewData.data.data.forEach(item => {
            productData.data.data.forEach(ele => {

              if (ele.name.toLocaleLowerCase().trim() == item.product.name.replace(/\s*/g,'').toLocaleLowerCase().trim()) {
                
                ele.reviewId = item.productId;
              }
            })
          });

          this.allProduct = productData.data.data;
          this.productList=  productData.data.data.slice(0,5);
          // this.count = this.productList.length;
          this.topList = productData.data.data.slice(0,3);

        }))
        .catch(err => {
          this.$router.push({name: 'error'});
        })
    },
    loadMore() {
      if (this.productList.length == this.allProduct.length) {

      } else {
        this.productList = this.allProduct;
      }
    },
    closeMore() {
      this.productList = this.allProduct.slice(0,5)
    },
    showHideContent(index) {
      if (window.screen.width <= 750) return;

      $('.product-item .rate-box .hide-content').eq(index).css({
        display: 'block'
      }).animate({
        opacity: 1
      })
    },
    closeHideContent(index) {
      $('.product-item .rate-box .hide-content').eq(index).animate({
        opacity: 0
      },function () {
        $(this).css({
          display: 'none'
        })
      })
    }
  },
  created() {
    // 获取问题
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
    // 获取文章
    getBlog(0,4).then(res => {
      res.data.data.rows.forEach(item => {
        item.picture = 'https://www.thebestantivirus.news' + item.picture;
        let time = this.getTime(item.addTime,'shorthand');

        item.date = `${time.month} ${time.day}, ${time.year}`
      })

      this.blogList = res.data.data.rows;

    }).catch(err => {
      console.log(err);
    })

    // 获取推荐vpns
    getVPNs().then(res => {
      this.vpnsList = res.data.data;
    }).catch(err => {
      console.log(err);
    })
  },
  mounted() {
    this.getProductList();

    this.showStep(this.field);

  }
  
}
</script>

<style lang="less" scoped>
@import url('../assets/css/index.less');
</style>