'use strict';

//获取数据库的引用
const db =uniCloud.database()
exports.main = async (event, context) => {
	//接收分类，通过分类去刷选数据
	const { name } =event
	
	//集合：更精细化的去处理数据 求和 分组 指定的那些字段
	const list = await db.collection('article').aggregate()
	.match({classify:name})
	.project({
		context:false
	}).end()
	
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
