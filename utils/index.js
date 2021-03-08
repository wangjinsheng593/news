

//时间格式化函数
export const parseTime = (time) =>{
	const format = '{y}-{m}-{d} {h}:{i}:{s}'
	let date = null
	if(typeof time ==='string'){
		time = parseInt(time)
	}
	date = new Date(time)
	
	const formatObj = {
		y:date.getFullYear(),
		m:date.getMonth()+1,
		d:date.getDate(),
		h:date.getHours(),
		i:date.getMinutes(),
		s:date.getSeconds(),
	}
	//第一个参数正则，第二个参数正则返回值
	const strTime = format.replace(/{(y|m|d|h|i|s)+}/g,(result,key)=>{
		let value = formatObj[key]
		if(result.length>0 && value<10){
			value = '0'+value
		}
		return value
	})
	return strTime
	
}