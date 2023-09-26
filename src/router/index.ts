import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue';
import Mentions from '@/components/games/wayc/Mentions.vue';
const routes = [
	{
		path: '/',
		name: 'home',
		component: Main,
	},
	{
		path: '/mentions',
		name: 'mentions',
		component: Mentions,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, _from, _savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		}
		return { x: 0, y: 0 };
	},
})

export default router
