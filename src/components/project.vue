<template lang="pug">
  .project-wrapper
    h3 MY PROJECT
    .story-board(v-for="item in projects")
      u-animate-container
        el-row(:gutter="20")
          el-col(:xs="24" :sm="12")
            u-animate(name="fadeInLeft" :offset="100")
              .story-content
                h3.story-title {{ $t(item.title) }}
                p.date {{ item.date }}
                p {{ $t(item.story) }}
                p {{ $t(item.story2) }}
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
  data () {
    return {
      projects: [
        {
          href: 'https://www.youtube.com/embed/C9QW6P98oTc',
          videoSrc: 'https://www.youtube.com/embed/C9QW6P98oTc',
          date: '2016 Dec',
          title: 'projects.titlePocket',
          story: 'projects.storyPocket',
          story2: 'projects.storyPocket2',
          skill: ['css', 'scss', 'html', 'Jquery', 'Bootstarp', 'PhotoShop', 'Web Design']
        },
        {
          href: 'https://alchemycoin.io/',
          imgSrc1: require('../assets/project-alch1.jpg'),
          date: '2017 May',
          title: 'projects.titleAlchemy',
          story: 'projects.storyAlchemy',
          skill: ['css', 'scss', 'html', 'Jquery', 'Bootstarp', 'Web Design']
        },
        {
          href: '',
          imgSrc1: require('../assets/project-alch-back1.jpg'),
          date: '2017 July',
          title: 'projects.titleAlchemyMem',
          story: 'projects.storyAlchemyMem',
          skill: ['scss', 'css', 'html', 'Jquery', 'Bootstarp', 'Web Design']
        },
        {
          href: '',
          imgSrc1: require('../assets/project-v2.jpg'),
          date: '2018 Jan',
          title: 'projects.titleGaming',
          story: 'projects.storyGaming',
          skill: ['ES6', 'Vue.js', 'scss', 'css', 'html', 'Web Design']
        },
        {
          href: '',
          imgSrc1: require('../assets/project-profolio.jpg'),
          title: 'projects.titlePortfolio',
          date: '2019 Jan',
          story: 'projects.storyPortfolio',
          skill: ['Vue.js', 'Vue i18n', 'Vue CLI', 'Webpack', 'scss', 'css', 'html', 'Web Design']
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
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
