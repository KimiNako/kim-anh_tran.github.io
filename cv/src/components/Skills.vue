<template>
	<section id="skills" class="pa-4">
		<h2 class="section-title">Skills</h2>
				<div class="skills-container" v-for="skill in skills" :key="skill.title">
					<v-row>
            <v-col>{{ skill.title }}</v-col>
          </v-row>
					<v-row>									
            <v-col class="skills-content" v-for="item in skill.items" :key="item.text">
              <img :src="`src/assets/skills/${item.img}`" class="icon" :title=item.text>
              <div>{{ item.text }}</div>
            </v-col>
          </v-row>
        </div>
  </section>
</template>

<script lang="ts" setup>

const skills = [
  {
    title: 'Programming',
    items: [
      { text: "C", img: "c_logo.png" },
      { text: "C#", img: "csharp_logo.png" },
      { text: "Go", img: "go_logo.png" },
      { text: "Java", img: "java_logo.png" },
      { text: "Python", img: "python_logo.png" },
    ]
  },
  {
    title: 'Web development',
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
    title: 'UI/UX, Art & Audiovisual',
    items: [
      { text: "XD", img: "adobexd_logo.svg" },
      { text: "Figma", img: "figma_logo.svg" },
      { text: "Sketch", img: "sketch_logo.png" },
      { text: "Clip Studio Paint", img: "csp_logo.png" },
      { text: "Paint Tool Sai", img: "pts_logo.png" },
      { text: "Photoshop", img: "photoshop.svg" },
      { text: "Premiere Pro", img: "premiere.svg" },
      { text: "After Effect", img: "adobeaftereffect_logo.svg" },
      { text: "Animate", img: "adobeaftereffect_logo.svg" },
      { text: "Audition", img: "adobeaudition_logo.svg" },
      { text: "Illustrator", img: "adobeillustrator_logo.svg" },
      { text: "Blender", img: "blender_logo.png" },
    ]
  },
  {
    title: 'Game Development',
    items: [
      { text: "Ren'Py", img: "" },
      { text: "Unity", img: "" },
      { text: "Godot", img: "" },
    ]
  },
  {
    title: 'Project Management',
    items: [
      { text: "Git", img: "" },
      { text: "GitHub", img: "" },
      { text: "GitLab", img: "" },
      { text: "Trello", img: "" },
      { text: "JIRA", img: "" },
    ]
  },
  {
    title: 'Speaking',
    items: [
      { text: "French", img: "" },
      { text: "English", img: "" },
      { text: "Vietnamese", img: "" },
      { text: "Spanish", img: "" },
    ]
  },
]

</script>

<style scoped>
.section-title {
  color: black;
}

.skills-container {
  margin: 0 auto 100px;
  max-width: 35rem;
}
.skills-content {
  color: #333;
  font-size: 12px;
}

.icon {
	height: 75px;
}
</style>
