<template>
  <section id="home">
    <div class="overlay">
    <a id="down-icon" class="down-icon" href="#about">
      <img class="down-arrow" src="src/assets/down_icon.svg" alt="Down arrow">
    </a></div>
    <div class="home-content">
      <h2>Kim-Anh Tran</h2> <br>
      <h5>{{ $t('role') }}</h5>
      <div class="cta-container">
        <v-btn
          class="mx-4 px-4 home-btn "
          elevated
          href="#about"
          rounded="xs"
          variant="outlined"
        >
          {{ $t('about.learn_more')}}
        </v-btn>
        <v-btn
          class="mx-4 px-4 home-btn"
          elevated
          href="img/CV_Kim-Anh_Tran.png"
          rounded="xs"
          target="_blank"
          color="light-blue-accent-3"
        >
          {{ $t('about.download_resume')}}
        </v-btn>
        <a  ></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#home {
  background: url("@/assets/header.jpg") center center no-repeat fixed;
  background-size: cover;
  height: 725px;
  position: relative;
}
.overlay {
  background: rgba(0, 0, 0, 0.8);
	height: 100%;
	left: 0;
  position: relative;
	top: 0;
	width: 100%;
}

.home-content {
	color: #ffffff;
	margin: 0;
  margin-top: -89px;
	position: absolute;
	text-align: center;
  top: 29em;
	transform: translateY(-50%);
	width: 100%;
}
.home-content .cta-container {
  margin-top: 54px;
}

.home-btn.v-btn.v-btn--density-default {
  height: 62px;
}
.down-icon {
  bottom: 7px;
	padding: 45px 15px 15px;
  position: absolute;
  transform: translateX(-50%);
}
.down-arrow {
	animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}
</style>
