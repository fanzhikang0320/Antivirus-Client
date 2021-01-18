<template>
  <div class="comparison-wrapper">
    <div class="banner-area">
      <div class="banner-content">
          <h1 class="title">{{bannerData.title}}</h1>
          <p class="content" v-html="bannerData.content"></p>
      </div>

    </div>
    <div class="table-box">
        <div class="table-top">
          <ul class="table-head clearfix" v-if="comparisonData.length != 0">

            <li v-for="(item,index) in comparisonData" :key="index" >
                <img :src="item.product.logo" :alt="item.product.name" class="logo">
                <span class="rate">{{item.product.rate}}</span>
                <Star :max="10" :score="+item.product.rate"/>
                <a :href="item.product.link" @click="handleExe" target="_blank">Visit Site</a>
              
            </li>
          </ul>
        </div>
        <div class="table-bottom clearfix">
          <ul class="condition-list">
            <li>price</li>
            <li>Remove Malware</li>
            <li>Remove Spyware</li>
            <li>Web Protection</li>
            <li>Block Phishing  Websites</li>
            <li>Realtime Protection</li>
            <li>Remove Adware</li>
            <li>VPN Internet Security</li>
            <li>Scheduled Scans</li>
            <li>Password Manager</li>
            <li>Firewall</li>
            <li>Identity Protection</li>
            <li>Browser Manager</li>
            <li>Turn-UP</li>
            <li>Phone Support</li>
            <li>Live Chat Support</li>
            <li>VirusBulletin VB100 Award</li>
            <li>VB100 Test Score</li>
            <li>AV Test Score</li>
            <li>AV Comparatives Score</li>
          </ul>
          <div class="b-right" v-if="comparisonData.length != 0">
            <ul class="list" v-for="(item,index) in comparisonData" :key="index">
              <li>{{item.product.price == 0 ? 'FREE' : '$'+item.product.price}}</li>
              <li v-for="(ite,ind) in item.companiesList" :key="ind">
                <img v-if="ite.value" src="@/assets/Image/true.png" alt="" class="true">
                <img v-else src="@/assets/Image/false.png" alt="">
              </li>
            </ul>
          </div>
          
        </div>
    </div>
    <div class="topTen-area">
      <TopTen />
    </div>
  </div>
</template>

<script>
import TopTen from '@/components/TopTen/index'
import {getComparisonBanner,getComparison} from '@/api'
export default {
  components: {
    TopTen
  },
  data() {
    return {
      bannerData: {
        title: '',
        content: ''
      },
      comparisonData: [],
      
      originComparison: [
        {
          key: 'Remove Malware',
          value: false
        },
        {
          key: 'Remove Spyware',
          value: false
        },
        {
          key: 'Web Protection',
          value: false
        },
        {
          key: 'Block Phishing Websites',
          value: false
        },
        {
          key: 'Realtime Protection',
          value: false
        },
        {
          key: 'Remove Adware',
          value: false
        },
        {
          key: 'VPN Internet Security',
          value: false
        },
        {
          key: 'Scheduled Scans',
          value: false
        },
        {
          key: 'Password Manager',
          value: false
        },
        {
          key: 'Firewall',
          value: false
        },
        {
          key: 'Identity Protection',
          value: false
        },
        {
          key: 'Browser Manager',
          value: false
        },
        {
          key: 'Turn-UP',
          value: false
        },
        {
          key: 'Phone Support',
          value: false
        },
        {
          key: 'Live Chat Support',
          value: false
        },
        {
          key: 'VirusBulletin VB100 Award',
          value: false
        },
        {
          key: 'VB100 Test Score',
          value: false
        },
        {
          key: 'AV Test Score',
          value: false
        },
        {
          key: 'AV Comparatives Score',
          value: false
        }
      ]
    }
  },
  methods: {
    handleExe() {
        window.execute();
    },
    getCompaniesbanner() {
      let that = this;
      return new Promise(function (resolve,reject) {
        getComparisonBanner()
          .then(result => {
            if (result.data.code == 0) {
              that.bannerData = result.data.data[0];
              
            } 
            resolve();
          })
          .catch(err => {
            
            window.console.log(err);
            resolve();
          })
      })
      
    },
    getTableData() {
      let that = this;
      return new Promise(function (resolve,reject) {

        getComparison()
          .then(result => {

            
            that.comparisonData = result.data.data;
            let arr = [];
            for (let i = 0; i < that.comparisonData.length; i++) {

              if (that.comparisonData[i].product != null) {
                arr.push(that.comparisonData[i]);
              }
            }

            that.comparisonData = arr;

            for (let i = 0; i < that.comparisonData.length; i++) {
                let data = JSON.parse(that.comparisonData[i].companiesList);
                that.comparisonData[i].companiesList = that.compare(data);
            }

            resolve();
          })
          .catch(err => {
            
            window.console.log(err);
            resolve();
          })
      })
      
    },
    compare(target) {
      let origin = [
        {
          key: 'Remove Malware',
          value: false
        },
        {
          key: 'Remove Spyware',
          value: false
        },
        {
          key: 'Web Protection',
          value: false
        },
        {
          key: 'Block Phishing Websites',
          value: false
        },
        {
          key: 'Realtime Protection',
          value: false
        },
        {
          key: 'Remove Adware',
          value: false
        },
        {
          key: 'VPN Internet Security',
          value: false
        },
        {
          key: 'Scheduled Scans',
          value: false
        },
        {
          key: 'Password Manager',
          value: false
        },
        {
          key: 'Firewall',
          value: false
        },
        {
          key: 'Identity Protection',
          value: false
        },
        {
          key: 'Browser Manager',
          value: false
        },
        {
          key: 'Turn-UP',
          value: false
        },
        {
          key: 'Phone Support',
          value: false
        },
        {
          key: 'Live Chat Support',
          value: false
        },
        {
          key: 'VirusBulletin VB100 Award',
          value: false
        },
        {
          key: 'VB100 Test Score',
          value: false
        },
        {
          key: 'AV Test Score',
          value: false
        },
        {
          key: 'AV Comparatives Score',
          value: false
        }
      ];
      for (let i = 0; i < origin.length; i++) {

        for (let j = 0; j < target.length; j++) {

          if (origin[i].key === target[j]) {
            origin[i].value = true;
          } 

        }
        
      }
      return origin;
    }
  },
  created() {
    Promise.all([this.getTableData(),this.getCompaniesbanner()])
  },
  mounted() {

    window.onscroll = function () {
      let tableBox = document.getElementsByClassName('table-box')[0],
        tableTop = document.getElementsByClassName('table-top')[0];      
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let elTop = tableBox.offsetTop;
        if (scrollTop > elTop) {
          tableTop.style.position = 'fixed';
          tableTop.style.top = scrollTop-elTop + 95 + 'px';

          if (scrollTop > 950) {
              tableTop.style.top = 950 - 180 + 'px';
          }
        } else {
          tableTop.style.position = 'static';
        }
            
    }
  },
  destroyed() {
    window.onscroll = ''
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/comparison.less');
</style>