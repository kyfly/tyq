$(function(){
	$(".ordlist_hearight:contains('已收货')").css('color','#b3b3b3')
	.parents('li').find('.ordlist_footer .dele_order').css('display','block');
	$('.dele_order').click(function(event) {
		/* Act on the event */
		$(this).parents('li').remove();
	});
	$('.detail_order').click(function(event) {
		/* Act on the event */
		window.location.href='orderform_detail.html';
	});


	//监听滚动条
	var page = 0
	$.ajax({
		url: '/api/orders?access_token=ACCESSTOKEN&page='+page,
		type: 'GET',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			console.log(data.content[0].created);
			for(var i =0 ;i< data.count;i++){
				var oLi = '<li>\
				<header>\
				<div class="ordlist_healeft float_left">\
				<div class="ordlist_order">\
				<div>订单 :　</div><div>'+data.content[i].id+'</div>\
				</div>\
				<div class="ordlist_date">\
				<div>日期 :　</div><div>'+data.content[i].created+'</div>\
				</div>\
				</div>\
				<div class="ordlist_hearight float_right">'+data.content[i].state+'</div>\
				</header>\
				<div class="order_center_top ordlist_center_list">\
				<div class="img_box float_left">\
				<img src="image/more.png" alt="">\
				</div>\
				<div class="order_center_name float_left">'+data.content[i].goods.name+'</div>\
				<div class="order_center_change float_right">\
				<div class="order_center_left">兑换积分 : <span>'+data.content[i].cPoint+'<span></div>\
				<div class="order_center_right float_right">x <span>'+data.content[i].count+'<span></div>\
				</div>\
				</div>\
				<footer class="ordlist_footer">\
				<div class="detail_order float_right">订单详情</div>\
				<div class="dele_order float_right">删除订单</div>\
				</footer>\
				</li>';
				$('.ordlist_center ul').append(oLi);
				$('.img_box img').attr('src',data.content[i].goods.img);
			}

			
			
		},
		error:function(){

		}
	});
	$(window).scroll(function(event) {
		/* Act on the event */
		if($('.ordlist_center ul')[0].scrollHeight-$('body').scrollTop()-$(window).height()<= 150){  //
			page++;
			$.ajax({
				url: '/api/orders?access_token=ACCESSTOKEN&page='+page,
				type: 'GET',
				dataType: 'json',
				data: {param1: 'value1'},
				success:function(data){
					console.log(data.content[0].created);
					for(var i =0 ;i< data.count;i++){
						var oLi = '<li>\
						<header>\<div class="ordlist_healeft float_left">\<div class="ordlist_order">\<div>订单 :　</div><div>'+data.content[i].id+'</div>\</div>\<div class="ordlist_date">\<div>日期 :　</div><div>'+data.content[i].created+'</div>\</div>\</div>\<div class="ordlist_hearight float_right">'+data.content[i].state+'</div>\</header>\<div class="order_center_top ordlist_center_list">\<div class="img_box float_left">\<img src="image/more.png" alt="">\</div>\<div class="order_center_name float_left">'+data.content[i].goods.name+'</div>\<div class="order_center_change float_right">\<div class="order_center_left">兑换积分 : <span>'+data.content[i].cPoint+'<span></div>\<div class="order_center_right float_right">x <span>'+data.content[i].count+'<span></div>\</div>\</div>\<footer class="ordlist_footer">\<div class="detail_order float_right">订单详情</div>\<div class="dele_order float_right">删除订单</div>\</footer>\</li>';
						$('.ordlist_center ul').append(oLi);
						$('.img_box img').attr('src',data.content[i].goods.img);
					}

					
					
				},
				error:function(){

				}
			});
			
		}

	});
});