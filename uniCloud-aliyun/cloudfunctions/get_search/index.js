'use strict';

//获取数据库的引用
const db =uniCloud.database()
const  $ = db.command.aggregate //集合的操作符
exports.main = async (event, context) => {
	//接收分类，通过分类去刷选数据
	const { value,user_id } =event
	
	
	const userInfo =await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	//集合：更精细化的去处理数据 求和 分组 指定的那些字段
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		//追加字段
		is_like:$.in(['$_id',article_likes_ids]) //$.in()表示某个数组里面包含了某个字段
	})
	.project({
		context:false
	})
	.match({
		title:new RegExp(value)
	})
	.end()
	
	//返回数据给客户端
	return {
	  code:200,
	  msg:'数据请求成功',
	  data:list.data
    }
};
