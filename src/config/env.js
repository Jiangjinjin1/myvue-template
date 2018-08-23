/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

export const ENV = process.env.NODE_ENV
export const DEV = 'development'
export const PRO = 'production'
export const devHost = 'shop.smallerha.com'
export const proHost = 'shop.smallerha.com'
export const devImgUrl = 'shop.smallerha.com/images'
export const proImgUrl = 'shop.smallerha.com/images'

const newBaseURLMapping = {
	[DEV]: `http://${devHost}/express/h5/web/index.php`,
	[PRO]: `http://${proHost}/express/h5/web/index.php`
}

const imgBaseURLMapping = {
	[DEV]: `http://${devImgUrl}`,
	[PRO]: `http://${proImgUrl}`
}

const phpImgBaseURLMapping = {
	[DEV]: `http://${devHost}`,
	[PRO]: `http://${proHost}`
}

export const routerMode = 'hash'

export function hostURL (env = DEV, url) {
	return `${newBaseURLMapping[String(env)]}${url}`
}

export const imgBaseUrl = imgBaseURLMapping[String(ENV)]
export const phpImgUrl = phpImgBaseURLMapping[String(ENV)]

export default {}
