<template>
	<section id="skills" >
    <div class="pa-4 skills-container">
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <div class="skills-box" v-for="skill in skills" :key="skill.title">
        <v-row>
          <v-col>{{ $t(skill.title) }}</v-col>
        </v-row>
        <v-row>									
          <v-col class="skills-content" v-for="item in skill.items" :key="item.text">
            <img :src="`/src/assets/skills/${item.img}`" class="icon" :title=item.text>
            <div v-if="!skill.trad">{{ item.text }}</div>
            <div v-else>{{ $t(item.text) }}</div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const skills = [
  {
    title: 'skills.programming',
    items: [
      { text: "C", img: "c_logo.png" },
      { text: "C#", img: "csharp_logo.png" },
      { text: "Go", img: "go_logo.png" },
      { text: "Java", img: "java_logo.png" },
      { text: "Python", img: "python_logo.png" },
    ]
  },
  {
    title: 'skills.web_development',
    items: [
      { text: "HTML", img:"html_logo.png"},
      { text: "CSS", img:"css_logo.png"},
      { text: "JavaScript", img:"javascript_logo.png"},
      { text: "TypeScript", img:"typescript_logo.png"},
      { text: "AngularJS", img:"angularjs_logo.png"},
      { text: "VueJS", img:"vuejs_logo.png"},
      { text: "REST API", img:"restapi_logo.png"},
      { text: "PostgresSQL", img:"postgresql_logo.png"},
      { text: "AWS", img:"aws_logo.png"},
      { text: "Docker", img:"docker_logo.png"},
      { text: "Jenkins", img:"jenkins_logo.png"},
    ]
  },
  {
    title: 'skills.art',
    items: [
      { text: "XD", img: "adobexd_logo.svg" },
      { text: "Figma", img: "figma_logo.png" },
      { text: "Sketch", img: "sketch_logo.png" },
      { text: "Clip Studio Paint", img: "csp_logo.png" },
      { text: "Paint Tool Sai", img: "pts_logo.png" },
      { text: "Photoshop", img: "photoshop.svg" },
      { text: "Premiere Pro", img: "premiere.svg" },
      { text: "After Effect", img: "adobeaftereffect_logo.svg" },
      { text: "Animate", img: "adobeanimate_logo.svg" },
      { text: "Audition", img: "adobeaudition_logo.svg" },
      { text: "Illustrator", img: "adobeillustrator_logo.svg" },
      { text: "Blender", img: "blender_logo.png" },
    ]
  },
  {
    title: 'skills.game_development',
    items: [
      { text: "Ren'Py", img: "renpy_logo.png" },
      { text: "Unity", img: "unity_logo.png" },
      { text: "Godot", img: "godot_logo.png" },
    ]
  },
  {
    title: 'skills.project_management',
    items: [
      { text: "Git", img: "git_logo.png" },
      { text: "GitHub", img: "github_logo.png" },
      { text: "GitLab", img: "gitlab_logo.png" },
      { text: "Trello", img: "trello_logo.png" },
      { text: "JIRA", img: "jira_logo.png" },
    ]
  },
  {
    title: 'skills.speaking',
    trad: true,
    items: [
      { text: "skills.languages.french", img: "france-flag.svg" },
      { text: "skills.languages.english", img: "united-kingdom-flag.svg" },
      { text: "skills.languages.vietnamese", img: "vietnam-flag.svg" },
      { text: "skills.languages.spanish", img: "spain-flag.svg" },
    ]
  },
]

</script>

<style lang="scss"  scoped>
@import '@/styles/global.scss';
.skills-container {
  background-color: white;
}

.section-title {
  color: black;
}

.skills-box {
  margin: 0 auto 100px;
  max-width: 35rem;
}
.skills-content {
  color: map-get($theme-color, "black");
  font-size: 12px;
  min-height: 121px;
}

.icon {
	height: 75px;
}
</style>
