export const routeConfigList = [
	{
		path: '/',
		component: () => import('../view/index.vue'),
		meta: {
			title: '首页',
			isUseCached: false,
			initParams: {}
		}
	},
	{
		path: '/v',
		component: () => import('../view/present.vue'),
		meta: {
			title: '各种帧动画',
			isUseCached: false,
			initParams: {}
		}
	}
]
