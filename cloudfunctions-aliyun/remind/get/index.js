const db = uniCloud.database()
const util = require('../utils/index.js')
exports.get = async (data) => {
	const collection = db.collection('remind')
	let res = await collection.where({_id : data._id}).get();
	if(res.affectedDocs < 1){
		return {
			code: global.wrongCode,
			msg: "记录不存在"
		}
	}else{
		return {
			code: global.successCode,
			data: res.data
		}
	}
}