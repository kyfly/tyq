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
	$scope.page= {
		all:"300"//文章总数
	};
	//function{
	//	var page_num=10;
	//	var chose_all=false;
	//	var chose_empty=true;
	//	var chose=new array(page_num);
	//	for(var i=0;i<page_num;i++){
	//		chose[i]=false;
	//	}
	//}

	//$scope.wechat_chose_all=function(){
	//	var wechat_tr=document.getElementsByClassName("wechat-tr");
	//	var all=document.getElementById("all");
	//	console.log(all);
	//	console.log(wechat_tr);
	//	if(chose_all=true){
	//		chose_all=false;
	//		for(i=0;i<page_num;i++){
	//			chose[i]=false;
	//		}
	//	}else{
	//		for(i=0;i<page_num;i++){
	//			chose[i]=true;
	//		}
	//	}
	//	//console.log(wechat_tr[0].getElementsByTagName("input").attribute("ng-checked"));
	//
	//};
	//$scope.wechatchk=function(num){
	//	console.log(x);
	//};
	//chose_all();
}]);