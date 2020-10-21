// 返回一个remind Model对象
function getModel() {
  let remindModel={
	    title: "",//标题
		date: "",//日期
	    time: "",//时间
		del_flg:0,//0未删除，1已删除
		uid:"",//用户id
  }
  return remindModel;
};
module.exports = {
  getModel
}