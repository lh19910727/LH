angular.module('filters',[])
.filter("errorFilter",function(){
return function(input){
    var errorMessagesMap = {
	        email:"请输入正确的邮箱地址",
	        required:"不能为空"
        }
		return errorMessagesMap[input];
    }
})
