const Home = r => require.ensure([], () => r(require('../page/home/home1')), 'home1')

export default [
	{
		path: '',
		component: Home
	},
	{
		path: '/home',
		component: Home
	}
]
