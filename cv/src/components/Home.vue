<template>
  <section id="home">
    <div class="overlay"></div>
    <div class="home-content">
      <h2>Kim-Anh Tran</h2> <br>
      <h5>Software Engineer from INSA Toulouse</h5>
      <div class="cta-container">
        <a href="#about">Learn more</a>
        <a href="img/CV_Kim-Anh_Tran.png" target="_blank">Download my resume</a>
      </div>
    </div>
    <a id="down-icon" class="down-icon smoothScroll" href="#about">
      <img class="down-arrow" src="img/svg/down_icon.svg" alt="Down arrow">
    </a>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Home extends Vue {
  msg!: string;
}
</script>

<style scoped>
#home {
  background: url("@/assets/header.jpg") center center no-repeat fixed;
  background-size: cover;
  height: 725px;
}
.overlay {
	background: rgba(0, 0, 0, 0.8);
	height: 100%;
	left: 0;
	top: 0;
	width: 100%;
}

.home-content {
	color: #ffffff;
	margin: 0;
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
}
</style>
