export default function $http(options) {
	const {url,data} = options
	return new Promise((reslove,reject)=>{
		// callFunction是获取云函数的方法
		uniCloud.callFunction({
			/* 云函数的名字 */
			name:url,
			data
		}).then(res=>{
			if(res.result.code === 200) {
				reslove(res.result)
			}else{
				reject(res.result)
			}
		}).catch(err=>{
			reject(err)
		})
	})
}