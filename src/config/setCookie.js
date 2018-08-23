export const setCookie = () => {
	// 获取当前时间
	const date = new Date()
	const expiresDays = 10
	// 将date设置为10天以后的时间
	date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000)
	// 将userId和userName两个cookie设置为10天后过期
	document.cookie = 'user_info=6b8d5bed49f5280f889e1f394c3b4819115269e41189fea63964e11e24d6bcb2a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22user_info%22%3Bi%3A1%3Bs%3A28%3A%22oIt0c1Iy4KFQnslwXR38IxcThDDg%22%3B%7D; expires=' + date.toGMTString() + ';path=/;'
//   document.cookie="user_info=1c243642548351ea631e7582a30fadf0495eefc5db6f1ec1f95a495c49c154d7a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22user_info%22%3Bi%3A1%3Bs%3A9%3A%22xingyu666%22%3B%7D; expires="+date.toGMTString()+";path=/;domain=shop.smallerha.com;"
// 我微信的cookie   6b8d5bed49f5280f889e1f394c3b4819115269e41189fea63964e11e24d6bcb2a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22user_info%22%3Bi%3A1%3Bs%3A28%3A%22oIt0c1Iy4KFQnslwXR38IxcThDDg%22%3B%7D
	/**
   * 必须在和接口相同域名的请求下设置上面的cookie才有效，因此本地测试必须在浏览
   * 器地址栏里请求相同域名下接口，并且在控制台里设置上面的代码进行设置cookie，本地
   * 接口才能访问的通
   */
}

export default {}
