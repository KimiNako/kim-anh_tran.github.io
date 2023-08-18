<template>
	<section id="about" class="pa-4">
		<h2 class="section-title">
			{{ $t('about.me') }}
		</h2>
		<img src="src/assets/photo_profile.png" alt="profile picture">
		<div class="about-text">
			<p>{{ $tc('about.who', { my_age: my_age }) }}</p>
			<br />
			<p>{{ $t('about.chat_with_me') }}</p>
		</div>
		<div class="contact mb-12">
			<v-btn href="https://github.com/KimiNako" class="about-icon" target="_blank" variant="text">
				<font-awesome-icon icon="fa-brands fa-github" size="2xl" />
			</v-btn>
			<v-btn href="https://fr.linkedin.com/in/kimanh-tran" class="about-icon" target="_blank" variant="text">
				<font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
			</v-btn>
			<v-btn href="https://kiminako.itch.io/" class="about-icon" target="_blank" variant="text">
				<font-awesome-icon icon="fa-brands fa-itch-io" size="2xl" />
			</v-btn>
		</div>
	</section>
</template>

<script lang="ts" setup>
const my_age = new Date().getFullYear() - 1997;
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

#about {
	background-color: map-get($theme-color, "blue");
	color: white;
}

.about-icon {
	font-size: 40px;
	height: 80px;
}

.about-text {
	font-size: 18px;
	margin: 25px auto;
	max-width: 55rem;
	a {
		color: white;
		text-decoration: none;
	}
}
</style>
