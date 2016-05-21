$(function(){
	var winHeight = $(window).height();
	$('#position_comfirm_addresstwo').css('top',winHeight-50+'px');
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
});