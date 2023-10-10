export const routeConfigList = [
	{
		path: '/',
		component: () => import('../view/index.vue'),
		meta: {
			title: '首页',
			isUseCached: false,
			initParams: {}
		}
	}
]
