import Request from "../static/js/request.js"
//创建Request对象
let request=new Request();

export default{
	/*
	*
	*data 参数值
	*/
	get_linkAddress_api:function(data){
		console.log(data);
		return request.http('/api/address/area',data,'GET');
	},
	/*
	*错误码返回
	*/
	error:function(code){
		return request.geterror(code);
	}
}
