$(function(){

	//商品详情
	


	


	//订单列表
	

	//无订单状态
	$('.ordlisttwo_center .ordlisttwo_center_no').css('left',$('body').width()/2-57+'px');
	$('.ordlisttwo_center .ordlisttwo_center_btn').css('left',$('body').width()/2-50+'px');
	$(window).resize(function(event) {

		$('.ordlisttwo_center .ordlisttwo_center_no').css('left',$('body').width()/2-57+'px');
		$('.ordlisttwo_center .ordlisttwo_center_btn').css('left',$('body').width()/2-50+'px');
	});

	//确认收货地址
	$('.comfirm_footer_two').click(function(event) {
		/* Act on the event */
		var comfirmtText = $('.comfirm_top').text().trim();
		if(comfirmtText=='请填写收货地址'){
			var comfirmDiv = $('<div class="comfirm_toast">请先填写收货地址</div>');
			$('body').append(comfirmDiv);
			comfirmDiv.css('left',$('body').width()/2-60+'px');
			comfirmDiv.fadeIn(1000, function() {
				
				time = setTimeout(function(){
					comfirmDiv.fadeOut(1000,function(){
						// $('body').remove(comfirmDiv);
						comfirmDiv.remove();
					});
				},1000);
				// clearTimeout(time);						
			});							
		}
	});
	$('.comfirm_top').click(function(event) {
		/* Act on the event */
		var comfirmtText = $('.comfirm_top').text().trim();
		if(comfirmtText=='请填写收货地址'){
			window.location.href = 'add_address.html';
		}
	});

	// 我的地址
	


	// 最底下按钮的定位
	//add_address
	var winHeight = $(window).height();
	$('#position_bottom').css('top',winHeight-40+'px');
	$('#position_edit_address').css('top',winHeight-40+'px');
	$('#position_comfirm_address').css('top',winHeight-50+'px');
	$('#position_comfirm_addresstwo').css('top',winHeight-50+'px');
	$('#position_list').css('top',winHeight-50+'px');
	
	
	

});