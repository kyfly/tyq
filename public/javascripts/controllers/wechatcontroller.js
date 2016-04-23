app.controller('WechatArticleCtrl', ['$scope', function ($scope) {
	function aa(){
		$scope.wechat_info_all=new Array(0);
		for(var i=0;i<295;i++){
			var pp={
				id:"art_",
				title:"历史首次！space下终于王城猎鹰9火箭海上回收",
				writer:"路将神",
				time:"2015.2.9 12时18分",
				type:"科技",
				main:""
			};
			pp.id+=i;
			pp.main=i+1;
			$scope.wechat_info_all.push(pp);
		}
	}
	aa();
	$scope.page_all=$scope.wechat_info_all.length;//文章总数
	var chose_all=false;//全选标志
	var chose_empty=true;//全不选标志
	var chose=new Array(0);//选项标志
	var num_cut=0;//选中文章数
	$scope.num_all=0;//每页文章数
	var start=0;//从多少开始
	$scope.page=1;
	var page_num=10;
	var flag=true;
	//页初始
	first=function(page){
		num_cut=0;
		$scope.page=page;
		$scope.num_all=$scope.page_all-(page_num*(page-1))>=10?10:$scope.page_all-(page_num*(page-1));
		start=(page_num*(page-1));
		console.log($scope.num_all);
		$scope.wechat_info=new Array(0);
		for(var i=start;i<start+$scope.num_all;i++){
			$scope.wechat_info.push($scope.wechat_info_all[i]);
		}
		chose=new Array(0);
		for(i=0;i<$scope.num_all;i++){
			chose.push(false);
		}
		if(flag==true){
			flag=false;
			return;
		}
		$scope.chkall=0;
		$scope.$apply();
		console.log(chose);

	};
	first(1);
	//全选
	$scope.wechat_chose_all=function(){
		if(chose_all==true){
			chose_all=false;
			num_cut=0;
			for(var i=0;i<$scope.num_all;i++){
				chose[i]=false;
			}
			document.getElementById("all").removeAttribute("checked");
		}else{
			chose_all=true;
			num_cut=$scope.num_all;
			for(i=0;i<$scope.num_all;i++){
				chose[i]=true;
			}
			document.getElementById("all").setAttribute("checked","chkall");
		}
		console.log(chose);
		console.log("num_cut"+num_cut);
		console.log(chose_all);
		//console.log(wechat_tr[0].getElementsByTagName("input").attribute("ng-checked"));

	};
	//单选
	$scope.wechatchk=function(obj){
		var num=obj.id;
		num=num.substring(4,num.length)-start;
		//console.log(num);
		if(chose[num]==false){
			chose[num]=true;
			chose_empty=false;
			console.log(chose);
			num_cut++;
		}else{
			chose[num]=false;
			chose_all=false;
			console.log(chose);
			num_cut--;
		}

		//if(num_cut==$scope.num_all){
		//	//$scope.wechat_chose_all();
		//	chose_all=true;
		//	document.getElementById("all").setAttribute("checked","chkall");
		//}else{
		//	chose_empty=true;
		//	document.getElementById("all").removeAttribute("checked");
		//}
		console.log("num_cut"+num_cut);
	};
	$(".wechat_page").createPage({
		pageCount:Math.ceil($scope.page_all/page_num),
		//pageCount:20,
		current:1,
		backFn:function(p){
			console.log(p+"页");
			first(p);
		}
	});
	//chose_all();
}]);

app.controller('WechatAccountCtrl', ['$scope', function ($scope) {
}]);