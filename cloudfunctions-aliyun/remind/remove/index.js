const db = uniCloud.database()

exports.remove = async (event) => {
	const collection = db.collection('remind')
	let res = await collection.where({_id : event._id}).get();
	if(res.affectedDocs < 1){
		return {
			code: global.wrongCode,
			msg: "记录不存在"
		}
	}else{
		let res2 = await collection.where({_id : event._id}).remove()
		 if(res2.affectedDocs<1){
			 return {
			 	code: global.wrongCode,
			 	msg: "删除失败"
			 }
		 }
		return {
			code: global.successCode,
			msg: global.successMsg
		}
	}

}