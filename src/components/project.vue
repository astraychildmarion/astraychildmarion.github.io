<template lang="pug">
  .project-wrapper
    h3 MY PROJECT
    .story-board(v-for="item in stories")
      h5 {{item.title}}
      .story-content
        img(:src="item.url")
        p {{item.story}}
        p {{item.story2}}
        .story-tag
          .tag(v-for="item in item.skill") {{item}}
</template>
<script>
export default {
  name: 'project',
  data() {
    return {
      stories: [
        {
          url: '',
          title:'Pucket Rus',
          story: 'This is my first project in life. 2 person spent 1 month start from scratch to build a internet shop.',
          story2: 'I was the main visual designer and I made the amazing index affect with skoller.js. There is a link for introduction video.',
          skill: ['css','html','Jquery','Bootstarp','PhotoShop','Web Design']
        },
        {
          url: '',
          title:'Alchemy',
          story: 'This is a case coroperated with a friend. Both of us did CSS job.',
          skill: ['css','html','Jquery','Bootstarp','Web Design']
        },
        {
          url: '',
          title:'Alchemy member center',
          story: 'This is another case coroperated with the same friend. I did the visual design, a lot of PhotoShop work. We modified CSS and made it like Boostarp for Alchemy system.',
          skill: ['css','html','Jquery','Bootstarp','Web Design']
        },
        {
          url: '',
          title:'Gaming Platform',
          story: '',
          skill: ['css','html','Web Design','JavaScript', 'Vue.js']
        },
        {
          url: '',
          title:'My portfolio site',
          story: 'Since the second year of my web developer career, I seldom design, because I spend most of time on JavaScript. I tried some styles then I found out that colors suit me.',
          story2: 'I used most of the skills I had learned. The website is simple but it is a milestone for me. Anyway, thank you for browsing : )',
          skill: ['css','html','Web Design','JavaScript', 'Vue.js', 'vue cil', 'Webpack']
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.project-wrapper{
  background: #fedf47;
}
.story-tag{
  display: flex;
  flex-wrap: wrap;
  .tag{
    padding: 5px 10px;
    margin: 0 5px 5px 0; 
    border: 1px solid #fedf47;
    border-radius: 5px;
  }
}
</style>