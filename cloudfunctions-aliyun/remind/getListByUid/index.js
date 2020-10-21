'use strict';
const db = uniCloud.database()
const dbCmd = db.command

exports.getListByUid = async (event, context) => {
  const collection = db.collection('remind')
  // 总条数
  let total = await collection.where({uid : event.uid}).count()
  // let start = event.currentPage * event.pageSize
  let res = await collection.where({uid : event.uid}).get();
  return {
	  total: total.total,
	  list: res.data
  }
};
