// import { get_label,get_list } from "./list.js"
// export default{
// 	get_label,
// 	get_list
// }

//批量导出文件
const requireApi = require.context(
    //第一个参数:api 目录的相对路径
	'.',
	//第二个参数:是否查询子目录
	false,
	//第三个参数:查询文件的一个后缀
	 /\.js$/
)

let module = {}
//requireApi.keys()的返回时['./index.js','./list.js']
requireApi.keys().forEach((key,index)=>{
	if(key ==='./index.js') return
	Object.assign(module,requireApi(key))
})
export default module