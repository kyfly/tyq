app.controller('WechatArticleCtrl', ['$scope', function ($scope) {
	console.log("做个测试");
	var a="aaaaaaa";
	wechat_chose_all=function(){
		var str="art_";
		var input=document.getElementsByTagName("input");
		var all=document.getElementById("all");
		var flag=0;
		var ans={"0":"","1":"true"};
		//console.log(all);
		console.log(all.getAttribute("checked"));
		if(all.getAttribute("checked")==null){
			flag=1;
			all.setAttribute("checked","true");
		}else{
			all.removeAttribute("checked");
		}
		for(var i=0;i<input.length;i++){
			if(input[i].getAttribute("type")=="checkbox"){
				if(flag==0){
					input[i].removeAttribute("checked");
				}else{
					input[i].setAttribute("checked",true);
				}
			}
		}
	};
	//chose_all();
}]);