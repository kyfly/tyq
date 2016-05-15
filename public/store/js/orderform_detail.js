$(function(){
	$.ajax({
		url: '/api/orders/ID?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			$('.order_top_right').text(data.state);
			$('.img_box img').attr('src',data.goods.img);
			$('.order_center_top .order_center_name').text(data.goods.name);
			$('.order_center_change .order_center_left span').text(data.goods.cPoint);
			$('.order_center_bottom .order_center_left span').text(data.goods.cPoint*$('.order_center_change .order_center_right span').text());
			$('.order_center_bottom .order_center_right span').text(data.Logistical.tracking);
			$('.order_footer_top .right').text(data.user.name);
			$('.order_footer_center .right').text(data.user.phone);
			$('.order_footer_bottom .right').text(data.user.addr);
			$('.order_footer_express .right').text(data.Logistical.company);
			$('.order_footer_orderid .right').text(data.Logistical.tracking);

		},
		error:function(){

		}
	});
});