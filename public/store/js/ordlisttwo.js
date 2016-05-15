$(function(){

	//无订单状态
	$('.ordlisttwo_center .ordlisttwo_center_no').css('left',$('body').width()/2-57+'px');
	$('.ordlisttwo_center .ordlisttwo_center_btn').css('left',$('body').width()/2-50+'px');
	$(window).resize(function(event) {

		$('.ordlisttwo_center .ordlisttwo_center_no').css('left',$('body').width()/2-57+'px');
		$('.ordlisttwo_center .ordlisttwo_center_btn').css('left',$('body').width()/2-50+'px');
	});
});