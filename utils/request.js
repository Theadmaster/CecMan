// request.js
// const BASE_URL = 'http://121.196.159.48'
const BASE_URL = 'http://127.0.0.1'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title:'加载中'
		})
		uni.request({
			header: options.header || {},
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// console.log(res)
				uni.hideLoading()
				resolve(res)

			},
			fail: (err) => {
				// console.log(err)
				uni.hideLoading()
				uni.showToast({
					title: '请求失败'
				})
				reject(err)
			}
		})
	})
}
