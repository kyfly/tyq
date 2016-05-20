$(function(){
	$('.order_footer_next').height($('.order_footer_other').height()/2+4);
	
	var hrefVar = function(key){
	    var sear = location.search;
	    var reg = new RegExp(".*" + key + "=((?:(?!(&|\b)).)*).*", "g");
	    return sear.replace(reg, "$1");
	}
	var orderId = hrefVar('orderId');

	$.ajax({
		url: '/api/orders/'+orderId+'?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			$('.order_top_right').text(data.state);
			$('.img_box img').attr('src',data.goods.img);
			$('.order_center_top .order_center_name').text(data.goods.name);
			$('.order_center_change .order_center_left span').text(data.goods.cPoint);
			$('.order_center_change .order_center_right span').text(data.count);
			$('.order_center_bottom .order_center_left span').text(data.goods.cPoint*data.count);
			if(data.goods.postage){
				$('.order_center_bottom .order_center_right span').text('包邮');
			}			
			$('.order_footer_top .right').text(data.user.name);
			$('.order_footer_center .right').text(data.user.phone);
			$('.order_footer_bottom .right').text(data.user.addr);
			$('.order_footer_express .right').text(data.Logistical.company);
			$('.order_footer_orderid .right').text(data.orderNo);

		},
		error:function(){

		}
	});
});