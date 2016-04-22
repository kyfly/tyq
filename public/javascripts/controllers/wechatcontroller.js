app.controller('WechatArticleCtrl', ['$scope', function ($scope) {
	$scope.wechat_info=[
		{
			id:"art_1",
			title:"历史首次！space下终于王城猎鹰9火箭海上回收",
			writer:"路将神",
			time:"2015.2.9 12时18分",
			type:"科技",
			main:"例如：照明设备生产公司注册商标时，在1101类似群组中应选择“灯（110040）、照明器械及装置（110130）”，该两个商品与1101第二部分商品及1103类似群组下所有商品类似，即如果选择“灯（110040）、照明器械及装置（110130）”，则该商标的保护范围基于“空中运载工具用照明设备，运载工具用灯，汽车防炫光装置（灯配件），汽车前灯，自行车车灯，运载工具转向信号装置用灯泡，脚踏车车灯，运载工具用防炫光装置（灯配件），汽车转向指示器用灯，汽车灯”以及“乙炔灯，照明用提灯，油灯灯头，煤油灯罩，煤气灯，油灯”，可起到注册多个商品项目的效果。"
		},
		{
			id:"art_2",
			title:"历史首次！space下终于王城猎鹰9火箭海上回收",
			writer:"路将神",
			time:"2015.2.9 12时18分",
			type:"科技",
			main:"例如：照明设备生产公司注册商标时，在1101类似群组中应"
		},
		{
			id:"art_3",
			title:"历史首次！space下终于王城猎鹰9火箭海上回收",
			writer:"路将神",
			time:"2015.2.9 12时18分",
			type:"科技",
			main:"例如：照明设备生产公司注册商标时，在1101类似群组中应选择“灯（110040）、照明器械及装置（110130）”，该两个商品与1101"
		},
		{
			id:"art_4",
			title:"历史首次！space下终于王城猎鹰9火箭海上回收",
			writer:"路将神",
			time:"2015.2.9 12时18分",
			type:"科技",
			main:"例如：照明设备生产公司注册商标时，在1101类似群组中应选择“灯（110040）"
		}
	];
	$scope.page_all=4;//文章总数
	var chose_all=false;//全选标志
	var chose_empty=true;//全不选标志
	var chose=new Array(0);//选项标志
	var num_cut=0;//选中文章数
	$scope.num_all=0;//每页文章数
	$scope.page=1;
	//页初始
	first=function(page){
		$scope.page=page;
		var page_num=10;
		$scope.num_all=$scope.page_all-(page_num*(page-1))>=10?10:$scope.page_all-(page_num*(page-1));
		console.log($scope.num_all);
		for(var i=0;i<$scope.num_all;i++){
			chose.push(false);
		}
		console.log(chose);
	};
	first(1);
	//全选
	$scope.wechat_chose_all=function(){
		//var wechat_tr=document.getElementsByClassName("wechat-tr");
		//var all=document.getElementById("all");
		//console.log(all);
		//console.log(wechat_tr);
		if(chose_all==true){
			chose_all=false;
			num_cut=0;
			for(var i=0;i<$scope.page_all;i++){
				chose[i]=false;
			}
			document.getElementById("all").removeAttribute("checked");
		}else{
			chose_all=true;
			num_cut=$scope.num_all;
			for(i=0;i<$scope.page_all;i++){
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
		num=num.substring(4,num.length)-1;
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
	//chose_all();
}]);