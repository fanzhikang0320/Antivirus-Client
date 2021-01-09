<template>
  <div class="home-wrapper">
    <div class="home-container">
      <div class="banner-area">
          <img src="@/assets/Image/banner.jpg" alt="" class="bg-picture">
          <div class="banner-content">
              <h1 class="page-title">Top Antivirus Software of <span class="blue">{{getMonth()}}</span></h1>
              <span class="line"></span>
              <p class="description">Our Antivirus researcher tested and reviewed the leading Antivirus & Internet Security brands, and chose the best protection for your devices.</p>
              <ul class="banner-list-box">
                  <li>
                      <span class="icon"></span>
                      <p class="text">All providers compatible with Windows, <strong>Apple Mac, iPhone/iPad, android</strong></p>
                  </li>
                  <li>
                      <span class="icon"></span>
                      <p class="text">Offer <strong>30-day</strong> money back guarantee</p>
                  </li>
                  <li>
                      <span class="icon"></span>
                      <p class="text">Real-time <strong>security and updates</strong></p>
                  </li>
                  <li>
                      <span class="icon"></span>
                      <p class="text">Obtain the <strong>cheapest products</strong> on the market</p>
                  </li>
              </ul>
              <div class="compatible-box">
                  <span class="text">Compatible with:</span>
                  <img src="@/assets/Image/android.svg" alt="Android" title="Android">
                  <img src="@/assets/Image/iosColor.png" alt="iOS" title="iOS">
                  <img src="@/assets/Image/mac.svg" alt="macOS" title="MacOS">
                  <img src="@/assets/Image/windows.svg" alt="Windows" title="Windows">
              </div>
          </div>
      </div>
      <div class="product-area">
        <div class="product-area-top">
            <p class="date">Last updated: {{updateTime()}}</p>
            <div class="disclosure-box">
                <p>
                    <span class="icon"></span>
                    <span class="text disclosure-id" @click="showDisclosure">Advertiser Disclosure</span>
                </p>
                <div class="disclosure-text">
                    This website is a free online resource to help you make an informed decision when choosing an antivirus software. We receive advertising revenue from some antivirus software we featured to showcase their products.However, our reviews are not explicitly biased and the income we generate in this way does not specifically affect the service we bring to you, as our customer. Our reviews, and other exhibited content, are wholly original and produced by the site operator at its own discretion and does not imply endorsement.
                </div>
            </div>
        </div>
        <!-- 产品加载loading -->
        <div class="product-loading-container" v-if="isProductLoading || productData.length == 0">
             <content-loader
                    :width="1020"
                    :height="300"
                    :speed="2"
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <circle cx="144" cy="142" r="53" /> 
                    <rect x="261" y="75" rx="5" ry="5" width="540" height="10" /> 
                    <rect x="263" y="110" rx="5" ry="5" width="540" height="10" /> 
                    <rect x="262" y="147" rx="5" ry="5" width="540" height="10" /> 
                    <rect x="263" y="187" rx="5" ry="5" width="450" height="10" />
                </content-loader>
                 <content-loader
                        :width="1020"
                        :height="300"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                    >
                        <circle cx="144" cy="142" r="53" /> 
                        <rect x="261" y="75" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="263" y="110" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="262" y="147" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="263" y="187" rx="5" ry="5" width="450" height="10" />
                    </content-loader>
                    <content-loader
                        :width="1020"
                        :height="300"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                    >
                        <circle cx="144" cy="142" r="53" /> 
                        <rect x="261" y="75" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="263" y="110" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="262" y="147" rx="5" ry="5" width="540" height="10" /> 
                        <rect x="263" y="187" rx="5" ry="5" width="450" height="10" />
                    </content-loader>
        </div>
        <div class="product-container" v-else>
            <div class="product-item" v-for="(item,index) in productData" :key="index">
                <a :href="item.link" @click="execute" class="link-box" target="_blank" rel="noopener noreferrer">
                
                <div class="num-box">
                    <span class="num">#{{index + 1}}</span>
                    <span class="text" v-if="index == 0">Editor's Choice</span>
                </div>

                <!-- <img v-if="index == 0" src="@/assets/Image/topOneProduct.png" alt="Total AV" class="first-pic"> -->

                <div class="product-content">
                    <div class="img-box">
                        <img :src="item.picture" :alt="item.name" class="picture">
                    </div>
                    
                    
                    <div class="center-content">
                        <img :src="item.logo" :alt="item.name" class="logo">
                        <ul class="list-box">
                            <li v-for="(it,id) in JSON.parse(item.contentList)" :key="id">
                                <span class="icon"></span>
                                <p class="text">{{it.value}}</p>
                            </li>
                        </ul>
                        <router-link v-if="item.isShowRead" :to="{name: 'review',query: {productId: item.id}}" rel="noopener noreferrer" class="review">Read Our Review</router-link>
                        <!-- <a class="review" href="item.id" target="_blank" rel="noopener noreferrer">Read Our Review</a> -->
                    </div>
                    <div class="score-content">
                        
                        <span class="king" v-if="index == 0"></span>
                        <!-- <span class="text" v-if="index == 1">Very Good</span>
                        <span class="text" v-if="index == 2">Good</span> -->
                        <p class="score-desc">
                            <span class="score">{{item.rate}}</span>/10
                        </p>
                        <span class="outstanding" v-if="index == 0">Outstanding</span>
                    </div>
                    <div class="right-content">
                        <a :href="item.link" class="btn" target="_blank" @click="execute" rel="noopener noreferrer">Visit Site</a>
                        <!-- <a :href="'https://'+item.downloadLink" target="_blank" rel="noopener noreferrer" class="url">{{item.downloadLink}}</a> -->
                        <span class="url">{{item.downloadLink}}</span>
                    </div>
                </div>
                </a>
            </div>
        </div>
      </div>
      <div class="how-area">
          <h2 class="area-title">How Do We Rate Antivirus</h2>
          <div class="how-container">
              <p class="how-content">We created our Top 10 Antivirus. Best website as an easy way for you to compare the key features of the leading brands   in a antivirus category. There are quite a few things we consider when we put together a list, especially when it comes to deciding how to order the featured brands. Let’s take a look at the most important ones.</p>
              <div class="how-list-box clearfix">
                  <div class="how-list-item">
                      <div class="list-item-title-box">
                          <span class="list-item-title">Speed</span>
                          <span class="icon speed-icon"></span>
                      </div>
                      <div class="list-item-content">
                          <p>In an ideal world antivirus software would offer <strong>complete protection with zero impact on your computer’s performance</strong>. Unfortunately, antivirus suites have to perform a lot of heavy lifting behind the scenes and this can have a small and sometimes noticeable effect on things like opening apps, moving files, and so on.</p>
                      </div>
                  </div>
                  <div class="how-list-item">
                      <div class="list-item-title-box">
                          <span class="list-item-title">Features</span>
                          <span class="icon features-icon"></span>
                      </div>
                      <div class="list-item-content">
                          <p>To get top marks, an antivirus package needs to <strong>include all of the essentials</strong>, including smart anti-malware and anti-spyware, browsing protection and email security. Additionally, we also rate extra features that you might find useful, like <strong>parental controls, social media protection, and anti-phishing security.</strong></p>
                      </div>
                  </div>
                  <div class="how-list-item">
                      <div class="list-item-title-box">
                          <span class="list-item-title">Ease of Use</span>
                          <span class="icon easy-use-icon"></span>
                      </div>
                      <div class="list-item-content">
                          <p>Antivirus software has become increasingly complex over recent years. Here we rate how easy it is to <strong>set up the different elements of the antivirus suite</strong>, and how much user intervention is required to ensure crucial scans are performed and that important software updates are installed.</p>
                      </div>
                  </div>
                  <div class="how-list-item">
                      <div class="list-item-title-box">
                          <span class="list-item-title">Value for Money</span>
                          <span class="icon money-icon"></span>
                      </div>
                      <div class="list-item-content">
                          <p>We always consider the <strong>total cost of a package</strong> when we decide upon its overall review score. When it comes to antivirus there can be several differences between the brands, both with regard to the <strong>level of protection offered and the number of devices protected.</strong></p>
                      </div>
                  </div>
              </div>
              
              <p class="how-content">To sum up, then, consider whether you want a free or paid app, and how many extra features you need – and perhaps whether you’d like extra security via a cost-effective bundled VPN, or even integrated online storage for backups. Make sure that you pick a package which is suitably user-friendly and streamlined, or has a ton of options and potential tweaks, depending on your preference here.</p>
          </div>
      </div>
      <div class="most-popular-area">
          <h2 class="most-popular-area-title area-title">Most Popular Antivirus</h2>
            <div class="most-popular-container">
                <!-- <div :class="{'popular-item': true, 'aside': index != 0 ,'popular-left-aside': index == 1,'popular-right-aside': index == 2,'center': index == 0, 'popular-center': index == 0}" v-for="(item,index) in mostPopularData" :key="index">
                    <img :src="item.logo" :alt="item.name" class="picture">
                    <span class="line"></span>
                    <div class="star-box">
                        <Star :max="10" :score="+item.rate"/>
                    </div>
                    <ul class="good-list-box">
                        <li v-for="(it,id) in JSON.parse(item.contentList)" :key="id">
                            <span class="icon"></span>
                            <p class="text">{{it.value}}</p>
                        </li>

                    </ul>
                    <a :href="item.link" target="_blank" class="btn" rel="noopener noreferrer">Get {{item.name}}</a>
                </div> -->
                <div class="popular-item popular-left-aside aside" >
                    <img src="@/assets/Image/newHome/2.png" alt="" class="picture">
                    <span class="line"></span>
                    <div class="star-box">
                        <Star :max="10" :score="+9.0"/>
                    </div>
                    <ul class="good-list-box">
                        <li>
                            <span class="icon"></span>
                            <p class="text">Extremely light on CPU and quick scan</p>
                        </li>
                        <li>
                            <span class="icon"></span>
                            <p class="text">Real-time security and updates</p>
                        </li>

                    </ul>
                    <a href="https://www.anrdoezrs.net/click-100176895-11744641" @click="execute" class="btn" target="_blank" rel="noopener noreferrer">Get BullGuard</a>
                </div>
                <div class="popular-item center popular-center">
                    <img src="@/assets/Image/newHome/1.png" alt="" class="picture">
                    <span class="line"></span>
                    <div class="star-box">
                        <Star :max="10" :score="+9.8"/>
                    </div>
                    <ul class="good-list-box">
                        <li>
                            <span class="icon"></span>
                            <p class="text">Award Wining Antivirus</p>
                        </li>
                        <li>
                            <span class="icon"></span>
                            <p class="text">Comprehensive malware protection</p>
                        </li>
                        <li>
                            <span class="icon"></span>
                            <p class="text">Real-time Antivirus protection</p>
                        </li>
                        

                    </ul>
                    <a href="https://track.totalav.com/5f030579e4a47/click" @click="execute" class="btn" target="_blank" rel="noopener noreferrer">Free Download</a>
                </div>
                <div class="popular-item aside popular-right-aside ">
                    <img src="@/assets/Image/newHome/4.png" alt="" class="picture">
                    <span class="line"></span>
                    <div class="star-box">
                        <Star :max="10" :score="+9.3"/>
                    </div>
                    <ul class="good-list-box">
                        <li>
                            <span class="icon"></span>
                            <p class="text">Norton cloud backup your files</p>
                        </li>
                        <li>
                            <span class="icon"></span>
                            <p class="text">Smart firewall protect you from online threat</p>
                        </li>

                    </ul>
                    <a href="https://www.kqzyfj.com/click-100176895-13681576" @click="execute" class="btn" target="_blank" rel="noopener noreferrer">Get Norton</a>
                </div>
            </div>
      </div>
        <div class="faq-area">
            <h2 class="area-title">FAQ</h2>
            <div class="faq-box">
                <div class="faq-item" v-for="(item,index) in questionData" :key="index">
                    <div class="faq-item-top" @click="handleShow(index)">
                        <img class="sign-icon" v-if="item.type == 'why'" src="@/assets/Image/faq-computer.svg"/>
                        <img class="sign-icon" v-if="item.type == 'danger'" src="@/assets/Image/faq-danger.svg"/>
                        <img class="sign-icon" v-if="item.type == 'price'" src="@/assets/Image/faq-money.svg"/>
                        <img class="sign-icon" v-if="item.type == 'mac'" src="@/assets/Image/faq-mac-computer.svg"/>
                        <img class="sign-icon" v-if="item.type == 'diff'" src="@/assets/Image/faq-diff.svg"/>
                       
                        <img class="sign-icon" v-if="item.type == 'question'" src="@/assets/Image/faq-question.svg"/>
                        <p class="faq-title">{{item.title}}</p>
                        <span class="close-icon faq-close"></span>
                    </div>
                    <div class="faq-item-content" v-html="item.content"></div>
                </div>
            </div>
        </div>
      <div class="recommended-area">
          <h2 class="area-title">Recommended VPNs</h2>
          <ul class="recommend-list-box">
              <li v-for="(item,index) in recommendData" :key="index">
                  <img :src="item.logo" :alt="item.name" class="picture">
                  <div class="desc">
                      <!-- <span class="icon"></span> -->
                      <p class="text">{{item.desc}}</p>
                  </div>
                    <div class="recommend-item-bottom clearfix">
                        <div class="star-box">
                            <Star :score="+item.score" :max="10"/>
                        </div>
                        <a :href="item.link" class="btn" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    </div>
              </li>
          </ul>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
import {ContentLoader} from 'vue-content-loader'
export default {
    name: 'Home',
    components: {
        ContentLoader
    },
    data() {
        return {
            isProductLoading: false,
            arr: [],
            timer1: null,
            timer2: null,
            timer4: null,
            timer5: null,
            flag1: false,
            flag2: false,
            lock: false,
            productData: [],
            questionData: [
                {
                    title: 'Why do you need antivirus software on your computer?',
                    content: `
                                            <p>
                            <p class="MsoNormal">
                                Antivirus
                        software is a tool that you can use to <b>secure the data</b> that you install
                        in your computer system. We are going to describe some of the advantages of
                        antivirus software. You can<b> block direct access to malicious ads</b> and<b> ads that contain the virus</b> to your computer network.<br />
                        Mostly, hackers use malware or a virus program to get access to their specific
                        victim computer. Hackers can also install a virus or malware into their victim
                        computers. They can do this by sending <b>malicious emails</b> to the victim.
                        Antivirus software enables you to have a good defense <b>against data thieves
                        and hackers.</b><br />
                        Commonly we use some removable devices like USB to transfer data. After
                        removing the USB or any other removable device, we notice that our computer has
                        become slow. It is due to the removable device is used as a transmission device
                        for the virus.
                        Antivirus software also<b> provides you safety from the removable devices.</b>
                            </p>
                        </p>
                    `,
                    type: 'why'
                },
                {
                    title: 'How malware hurt your computer？',
                    content: `
                        <p class="MsoNormal">
                        ● <b>Steal your personal
                        information</b>: They can steal information including your <b>password, client
                        profiles, browser history, and more important data.</b>
                        </p>
                        <p class="MsoNormal">
                        ● <b>Slow your computer</b>:
                        Several types of malware also<b> replicate themselves </b>and fill up the hard
                        drive of your computer, so there is little room left for legal programs.
                        </p>
                        <p class="MsoNormal">
                        ● <b>Restrict access to your
                        files</b>: Some types of malware have the ability to<b> hurt and delete your
                        personal files and programs</b>.
                        </p>
                        <p class="MsoNormal">
                        ● <b>Spread throughout your
                        network</b>: <b>Worms</b>, another type of malware that is very disruptive for
                        your businesses. If this type of malware infects a computer, it raises itself
                        and has the ability to<b> spread </b>within the whole network.
                        </p>
                        <p class="MsoNormal">
                        ● <b>Disrupt daily
                        operations</b>: Moreover, almost all types of malware have bad effects on any
                        normal business in any form. <b>Adware</b> is also a type of malware that
                        particularly irritates the productivity of the business. When it is installed
                        on a computer, it facilitates regular popups.
                        </p>
                    `,
                    type: 'danger'
                },
                {
                    title: 'Free or Paid Antivirus?',
                    content: `
                    <p class="MsoNormal">
                        <p class="MsoNormal" align="left" style="text-align:left;">
                            Whether it’s
                    better to install a free antivirus or invest in a paid version depends on the
                    type of activities you perform on your device and other circumstances like -
                    whether or not you have children using your computer. Most experts will urge
                    you to get a paid version, but free versions are great for testing a product or
                    trying out new features. However, in the long run, they will <b>fail to provide
                    substantial protection</b>. Which might end up costing you more long-term. Most
                    experts will urge you to get a paid version, but free versions are great for
                    testing a product or trying out new features. However, in the long run, they
                    will fail to provide substantial protection. Which might end up costing you
                    more long-term.
                        </p>
                    </p>
                    
                    `,
                    type: 'price'
                },
                {
                    title: 'Does Mac get viruses? Do I need a Mac cleaner?',
                    content: `
                <p class="MsoNormal" align="left" style="text-align:left;">
                    <p class="MsoNormal" align="left" style="text-align:left;">
                        Can Mac devices get viruses? Its answer is not much
                straightforward as it gives the impression. Here we will discuss the risks that
                Mac consumers can face. We will also discuss the benefits and harms of using
                antivirus software for Mac.<br />
                Macs have previously been <b>considered secure
                and safe for several reasons,</b> but that has changed significantly in recent
                years. In fact, as Malwarebytes said in its report on the malware state here,
                they saw one: "The overall occurrence of macro-risk spreads in 2019 <b>increased
                by more than 400% from 2018</b>".<br />
                MailWerberts report state that there were six
                MAC threats to detect 25 endangered in 2019 and two of them were placed in the
                top 5. The malware number two threat on all platforms was Mac adware, which is
                familiar as the NewTab.
                    </p>
                </p>
                    
                    `,
                    type: 'mac'
                },
                {
                    title: 'What is the difference between a Malware, Virus, and Spyware?',
                    content: `
                    <p class="MsoListParagraph" align="left" style="margin-left:18.0pt;text-align:left;text-indent:-18.0pt;">
                        <b>&nbsp; &nbsp; &nbsp; &nbsp;1.&nbsp;</b><b>Malware</b><br />
                    Malware is a program that particularly harms the<b> host system of the device</b>. It can also consist of other kinds of software
                    like worms, Trojan horses and spyware, etc. Highly developed malware like
                    ransomware is used to commit financial scams and extort money from computer
                    users. Malware is<b> most damaging to mobile devices and PC</b>s. There are
                    different kinds of malware like viruses, adware, worms, and ransomware, etc.<br />
                    <b>2. Virus</b><br />
                    The virus itself is a particular kind of
                    malware. It is a piece of infectious code that damages other programs on the
                    host system and spreads itself on the go. Virus is <b>generally familiar to
                    spread</b> when the program is shared between computer systems. It acts more
                    similar to a<b> parasite</b>. Some viruses can harm your computer devices by <b>removing
                    the files</b>, <b>reformatting the hard drive</b> and damaging other programs.
                    Some of them simply duplicate themselves flood a network with traffic, making
                    it not possible to make any internet activity.<br />
                    <b>3. Spyware</b><br />
                    Spyware is also a type of malware that is
                    familiar to <b>access your device without your permission or knowledge </b>and
                    it can be very harmful for your device. It is an unwanted program that
                    infiltrates your device. Hackers use it for several purposes. It can also steal
                    your personal and internet usage data.
                    </p>
                    
                    `,
                    type: 'diff'
                },
                {
                    title: 'What is ransomware?',
                    content: `
                    	<p class="MsoNormal" align="left" style="text-align:left;">
                            Ransomware is a hateful software with one reason in mind:<b> Extortion from its wounded.</b> Today, it is the most criminalized business
                    model of the world, demanding hundreds of millions of dollars in ransom from
                    individuals and corporations. These demands are very simple: give the ransom,
                    or strictly cooperate or completely blackout your operations. Frequently, an
                    association first becomes alert of an attack when they are notified on the
                    screen when they are notified that the figures on their network have been<b> encrypted and access to pay the ransom</b>. Will not. Just on payment, they
                    will get a<b> decryption key to access the statistics</b>. The key may be
                    removed as a result of a <b>payment collapse,</b> and the data is always
                    available.
                        </p>
                    `,
                    type: 'question'
                }
            ],
            recommendData: [
                {
                    logo: require('../assets/Image/newHome/r-1.png'),
                    desc: 'Strong encryption, great security features',
                    score: '9.8',
                    link: 'https://www.xvbelink.com/unrestricted-1?a_fid=5176798&offer=3monthsfree'
                },
                {
                    logo: require('../assets/Image/newHome/r-2.png'),
                    desc: 'Most secure VPN with highly secure protocols',
                    score: '9.6',
                    link: 'https://www.cyberghostvpn.com/offer/vpncollection_kxq8ulmmg'
                },
                {
                    logo: require('../assets/Image/newHome/r-3.png'),
                    desc: 'Uncapped bandwidth, support for P2P',
                    score: '9.3',
                    link: 'https://go.nordvpn.net/aff_c?offer_id=582&aff_id=37608'
                },
            ],
            mostPopularData: []
        }
    },
    methods: {
        execute() {
            window.execute();
        },
        handleShow(index) {
            let transformDom = $('.faq-close').get(index);
            
            
            // arr.includes(index) 
            let id = this.arr.indexOf(index)
            if ( id != -1) {
                $(transformDom).css({
                    transform: 'translateY(-50%) rotateZ(0deg)'
                })
                this.arr.splice(id,1)
            } else {
                $(transformDom).css({
                    transform: 'translateY(-50%) rotateZ(-180deg)'
                })
                this.arr.push(index)
            }
            let currentShowDom = $('.faq-item-content').get(index);
            $(currentShowDom).slideToggle('fast')
        },
        
        getProductData() {
            this.isProductLoading = true;
            this.axios.get('/productAPi/selectShowProduct')
                .then(result => {
                    // 根据综合排序 去排行
                    for (let i = 0; i < result.data.data.length; i++) {

                        for (let j = 0; j < result.data.data.length - 1; j++) {

                            if (result.data.data[i].overall_serial < result.data.data[j].overall_serial) {

                                let n = result.data.data[i];
                                result.data.data[i] = result.data.data[j];
                                result.data.data[j] = n;
                            }

                        }

                        
                    }
                    this.productData = result.data.data;


                    this.isProductLoading = false;
                    // window.console.log(this.productData);
                    // let newArr = [];
                    // let a = this.productData.slice(0,3)
                    // newArr = this.deepClone(a,newArr);

                    // for (let i = 0; i < newArr.length; i++) {
                    //     let d = JSON.parse(newArr[i].contentList)
                    //     if (i == 0) {
                    //         newArr[i].contentList = JSON.stringify(d.slice(0,3));

                    //     } else {
                    //         newArr[i].contentList = JSON.stringify(d.slice(0,2))
                    //     }
                    // }
                    // this.mostPopularData = newArr;
                })
                .catch(err => {
                    window.console.log(err);
                    this.isProductLoading = false;
                })
        },
        
        hoverAnimate() {
            let that = this;
            function normalAnimate() {
                clearTimeout(that.timer1);
                clearTimeout(that.timer2);
                clearTimeout(that.timer4);
                clearTimeout(that.timer5);
                that.flag1 = false;
                that.flag2 = false;
                $('.popular-left-aside').css({
                    left: 0,
                    zIndex: 0,
                    transition: 'all ease-out 0.55s',
                    transform: 'translate(0,-50%) scale(1)'
                })
                $('.popular-right-aside').css({
                    right: 0,
                    zIndex: 0,
                    transition: 'all ease-out 0.55s',
                    transform: 'translate(0,-50%) scale(1)'
                })
                $('.popular-center').css({
                    left: '50%',
                    transition: 'all ease-out 0.55s',
                    'transform': 'translate(-50%,-50%) scale(1)',
                    zIndex: 2
                })
                that.lock = true;
            }
            

            $('.popular-left-aside').on('mouseenter',function() {


                if (!that.flag1) {
                    normalAnimate();
                    that.flag2 = false;
                    that.flag1 = true;
                } 
               
               if (!that.lock) return;
               that.timer1 = setTimeout(() => {
                   $(this).css({
                        left: '50%',
                        zIndex: 3,
                        transition: 'all ease-out 0.55s',
                        transform: 'translate(-50%,-50%) scale(1.15)'
                    },800)
                    $('.popular-center').css({
                        left: '50%',
                        transition: 'all ease-out 0.55s',
                        'transform': 'translate(0,-50%) scale(0.8)',
                        zIndex: 2
                    })
                    $('.popular-right-aside').css({
                        right: 0,
                        transition: 'all ease-out 0.55s',
                        transform: 'translate(0,-50%) scale(1)',
                        zIndex: 0
                    })
                    that.lock = false;
                    that.timer4 = setTimeout(() => {
                        normalAnimate();
                    },5000)
                    
                    
               },550)
               
                
            })
            $('.popular-right-aside').on('mouseenter',function() {
                

                if (!that.flag2) {
                    normalAnimate();
                    that.flag1 = false;
                    that.flag2 = true;
                } 
                if (!that.lock) return;
                that.timer2 = setTimeout(() => {
                    $(this).css({
                        right: '50%',
                        zIndex: 3,
                        transition: 'all ease-out 0.55s',
                        transform: 'translate(50%,-50%) scale(1.15)'
                    })
                    $('.popular-center').css({
                        left: '15%',
                        transition: 'all ease-out 0.55s',
                        'transform': 'translate(0,-50%) scale(0.8)',
                        zIndex: 2
                    })
                    $('.popular-left-aside').css({
                        left: 0,
                        transition: 'all ease-out 0.55s',
                        transform: 'translate(0,-50%) scale(1)',
                        zIndex: 0
                    })
                    that.lock = false;
                    that.timer5 = setTimeout(() => {
                        normalAnimate();
                    },5000)
                },550)
                
            })
            $('.popular-center').on('mouseenter',function () {
                
                normalAnimate();
            })
        },
        getMonth() {
            let monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December']
            
            let monthIndex = new Date().getMonth();
            return `${monthArr[monthIndex]} ${new Date().getFullYear()}`;

        },
        updateTime() {
            let shortMonthArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'] ;
            let day = new Date().getDate();
            let year = new Date().getFullYear();
            let monthIndex;
            if (day < 8) {

               if (new Date().getMonth() - 1 < 0) {
                   monthIndex =  shortMonthArr.length - 1;
                   year = new Date().getFullYear() - 1
               } else {
                   monthIndex = new Date().getMonth() - 1
               }
            } else {
                monthIndex = new Date().getMonth();
            }
            return `${shortMonthArr[monthIndex]} 08 ${year}`
            
        },
        showDisclosure() {
            $('.disclosure-text').slideToggle('fast');
        }
        
    },
    mounted() {
        this.handleShow(0);
        this.getProductData();
        // this.hoverAnimate();
        this.getMonth();
    },
    beforeDestroy() {
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer4);
        clearTimeout(this.timer5);
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/Css/NewHome.less');
</style>