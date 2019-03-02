<template lang="pug">
  .project-wrapper
    h3 MY PROJECT
    .story-board(v-for="item in stories")
      u-animate-container
        el-row(:gutter="20")
          el-col(:xs="24" :sm="12")
            u-animate(name="fadeInLeft" :offset="100")
              .story-content
                h3.story-title {{item.title}}
                p.date {{item.date}}
                p {{item.story}}
                p {{item.story2}}
                .story-tag
                  .tag(v-for="item in item.skill") {{item}}
          el-col(:xs="24" :sm="12")
            u-animate(name="fadeInRight" :offset="100")
              .story-media
                .iframe-box(v-if="item.videoSrc" )
                  iframe(:src="item.videoSrc" frameborder="0" width="80%")
                el-row.img-frame(:guttter="10", v-if="item.imgSrc1")
                  el-col(:span="24")
                    img(:src="item.imgSrc1" :alt="item.title")
</template>
<script>
export default {
  name: 'project',
  data() {
    return {
      stories: [
        {
          href: 'https://www.youtube.com/embed/C9QW6P98oTc',
          videoSrc: 'https://www.youtube.com/embed/C9QW6P98oTc',
          title:'Pucket Rus - My First Design',
          date: '2016 Dec',
          story: 'This is my first project in life. 2 person spent 1 month start from scratch to build a internet shop.',
          story2: 'I was the main visual designer and I made the amazing index affect with skoller.js. There is a link for introduction video.',
          skill: ['css','scss','html','Jquery','Bootstarp','PhotoShop','Web Design']
        },
        {
          href: 'https://alchemycoin.io/',
          videoSrc: '',
          imgSrc1: require('../assets/project-alch1.jpg'),
          // imgSrc2: require('../assets/project-alch-back2.jpg'),
          // imgSrc3: require('../assets/project-alch-back3.jpg'),
          date: '2017 May',
          title:'Alchemy Webpage refresh',
          story: 'This is a case coroperated with a friend. Both of us did CSS job.',
          skill: ['css','scss','html','Jquery','Bootstarp','Web Design']
        },
        {
          href: '',
          imgSrc1: require('../assets/project-alch-back1.jpg'),
          // imgSrc2: require('../assets/project-alch2.jpg'),
          // imgSrc3: require('../assets/project-alch3.jpg'),
          date: '2017 July',
          title:'Alchemy Member Center ',
          story: 'This is another case coroperated with the same friend. I did the visual design, a lot of PhotoShop work. We modified CSS and made it like Boostarp for Alchemy system.',
          skill: ['scss','css','html','Jquery','Bootstarp','Web Design']
        },
        {
          href: '',
          imgSrc1: require('../assets/project-v2.jpg'),
          // imgSrc2: require('../assets/project-v2-2.jpg'),
          // imgSrc3: require(''),
          date: '2018 Jan',
          title:'Project at work - Gaming Platform',
          story: '',
          skill: ['ES6', 'Vue.js','scss','css','html','Web Design']
        },
        {
          href: '',
          // imgSrc1: require(''),
          // imgSrc2: require(''),
          // imgSrc3: require(''),
          title:'My Portfolio Site',
          date: '2019 Jan',
          // story: 'Since the second year of my web developer career, I seldom design, because I spend most of time on JavaScript. I tried some styles then I found out that colors suit me.',
          story: 'I used most of the skills I had learned. The website is simple but it is a milestone for me. Anyway, thank you for browsing : )',
          skill: ['Vue.js', 'Vue CLI', 'Webpack','scss','css','html','Web Design']
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
  },
}
</script>
<style lang="scss">
.project-wrapper{
  background: #fedf47;
  .story-content{
      h3{
      font-size: 1.8em;
      margin: 10px 0;
    }
  }
}
.iframe-box{
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 0;
  padding-bottom: 45%;
  iframe{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
.story-tag{
  display: flex;
  flex-wrap: wrap;
  .tag{
    padding: 5px 10px;
    margin: 0 5px 5px 0; 
    background: linear-gradient(to left, #fedf47 10%, #DEFD4B 90% );
    border: 1px solid #aaa;
    border-radius: 5px;
    transition: transform 1s;
    &:hover{
      background: linear-gradient(to left, #FDE987 10%, #E9FD87 90% );
      transform: translateY(-10px);
      transition: transform .5s;
    }
  }
}
.img-frame{
  @media only screen and (max-width: 768px){
    margin-top: 20px;
  }
  img{
    width: 100%;
    box-shadow: 2px 2px 2px #aaa;
    border-radius: 5px;
  }
}
</style>