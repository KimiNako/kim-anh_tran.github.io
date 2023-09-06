<template>
	<footer id="footer">
		<p class="copyright pa-2"> © {{ current_year }} • Kim-Anh Tran • {{ $t('copyright')}}</p>
	</footer>
</template>

<script lang="ts" setup>
	const current_year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
#footer {
	background-color: #111;
	color: map-get($theme-color, "blue");
	font-size: 12px;
}
</style>
