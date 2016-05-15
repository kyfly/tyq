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
		expressId = hrefVar('expressId');

	console.log(id+num);

	$.ajax({
		url: '/api/goods/'+id+'?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		data: {num: num},
		success:function(data){
			//地址暂未获取

			//改商品的数据
			$('.img_box img').attr('src',data.img);
			$('.comfirm_center_name').text(data.name);
			$('.comfirm_center_top .comfirm_center_right span').text(num);
			$('.comfirm_center_top .comfirm_center_left span').text(data.cPoint);
			$('.comfirm_center_bottom .comfirm_center_left span').text(data.cPoint*num);
			$('.comfirm_center_bottom .comfirm_center_right span').text(data.price);


		},
		error:function(){

		}
	});

	$('.comfirm_footer').click(function(event) {
		/* Act on the event */
		alert('提交');
		$.ajax({
			url: '/api/goods/'+id+'/orders?access_token=ACCESSTOKEN',
			type: 'POST',
			dataType: 'json',
			data: {count: num,expressId:expressId},
			success:function(data){

			},
			error:function(){

			}
		});
	});
	$('.comfirm_top').click(function(event) {
		/* Act on the event */
		//跳转到地址选择页面（我的地址）
		window.location.href = "my_address.html";
	});

});