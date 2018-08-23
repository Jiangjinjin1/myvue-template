import fetchApi from '../config/fetch'

/**
 * 登录接口获取用户信息
 */

export const getUserInfoApi = async () => {
	const result = await fetchApi({
		url: '/index/is_login'
	})
	return result.data
}
