$(function(){
	var winHeight = $(window).height();
	$('#position_comfirm_address').css('top',winHeight-50+'px');

	//获取网址中的变量
	var hrefVar = function(key){
	    var sear = location.search;
	    var reg = new RegExp(".*" + key + "=((?:(?!(&|\b)).)*).*", "g");
	    return sear.replace(reg, "$1");
	}
	var id = hrefVar('id'),
		num = hrefVar('num'),
		expressId = hrefVar('expressId'),
		userId = hrefVar('userId'),
		chooseName = hrefVar('chooseName'),
		choosePhone = hrefVar('choosePhone'),
		chooseAddr = hrefVar('chooseAddr');
	if(chooseName){
		$('.comfirm_user .comfirm_name span').text(chooseName);
		$('.comfirm_user .col-xs-5').text(choosePhone);
		$('.comfirm_add').text(chooseAddr);
	}

	console.log("商品ID："+id+"，商品数量："+num+",快递信息："+expressId);

	//获取用户信息
	$.ajax({
		url: '/api/users/'+userId+'/express?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		success:function(data){
		console.log(data);
			for(var i =0 ;i<data.length;i++){
				if(data[i].default === true){
					$('.comfirm_user .comfirm_name span').text(data[i].name);
					$('.comfirm_user .col-xs-5').text(data[i].phone);
					$('.comfirm_add').text(data[i].addr);
					
				}
			}
			
		},
		error:function(){

		}	
	});
	
	//获取商品信息
	$.ajax({
		url: '/api/goods/'+id+'?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		data: {num: num},
		success:function(data){
			console.log(data);
			//改商品的数据
			$('.img_box img').attr('src',data.img);
			$('.comfirm_center_name p').text(data.name);
			$('.comfirm_center_top .comfirm_center_right span').text(num);
			$('.comfirm_center_top .comfirm_center_left span').text(data.cPoint);
			$('.comfirm_center_bottom .comfirm_center_left span').text(data.cPoint*num);

			if(data.postage === true){
				$('.comfirm_center_bottom .comfirm_center_right span').text('包邮');
			}else{
				$('.comfirm_center_bottom .comfirm_center_right span').text('不包邮');
			}


		},
		error:function(){

		}
	});

	$('.comfirm_footer').click(function(event) {
		/* Act on the event */
		alert('提交,数量：'+num+"选择的快递信息ID："+expressId);
		$.ajax({
			url: '/api/goods/'+id+'/orders?access_token=ACCESSTOKEN',
			type: 'POST',
			dataType: 'json',
			data: {count: num,expressId:expressId},
			success:function(data){
				//提交订单后跳转到订单列表
				window.location.href = "ordlist.html?id="+id+"&num="+num+"&expressId="+expressId+"&userId="+userId;
			},
			error:function(){

			}
		});
	});
	$('.comfirm_top').click(function(event) {
		/* Act on the event */
		//跳转到地址选择页面（我的地址）
		window.location.href = "my_address.html?id="+id+"&num="+num+"&expressId="+expressId+"&userId="+userId;
	});

});