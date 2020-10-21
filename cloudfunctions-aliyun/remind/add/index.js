// 增加提醒事件
const util = require('../utils/index.js')
const Model = require('../model/index.js')
const db = uniCloud.database()

exports.add = async (data) => {
	const collection = db.collection('remind')
	let remindModel=Model.getModel();
		remindModel.title = data.title;
		remindModel.time  = data.time;
		remindModel.date  = data.date;
	let res = await collection.add(remindModel)
	return {
		code: global.successCode,
		msg: global.successMsg
	}
}