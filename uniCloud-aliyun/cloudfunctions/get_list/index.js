'use strict';

//获取数据库的引用
const db =uniCloud.database()
exports.main = async (event, context) => {
	//接收分类，通过分类去刷选数据
	const { name,page=1,pageSize=10 } =event
	
	let matchObj = {}
	if(name !== '全部'){
		matchObj={
			classify:name
		}
	}
	//集合：更精细化的去处理数据 求和 分组 指定的那些字段
	const list = await db.collection('article').aggregate()
	.match(matchObj)
	.project({
		context:false
	})
	//要跳过多少数据
	.skip(pageSize*(page-1))
	//每次返回多少条数据
	.limit(pageSize)
	.end()
	
	// const list =await db.collection('article')
	// .field({
	// 	//true只返回这个字段，false 表示不返回
	// 	context:false
	// })
	// .get()
	
	//返回数据给客户端
	return {
	  code:200,
	  msg:'数据请求成功',
	  data:list.data
    }
};
