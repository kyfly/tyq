$(function(){

	var num =Number($('.goods_pcount').text());
	var expressId;

	//获取网址中的变量
	var hrefVar = function(key){
	    var sear = location.search;
	    var reg = new RegExp(".*" + key + "=((?:(?!(&|\b)).)*).*", "g");
	    return sear.replace(reg, "$1");
	}
	var id = hrefVar('id');
	var userId = hrefVar('userId');
	console.log(userId+id);


	//点击底部的点击按钮
	$('.goods_footer').click(function(event) {
		/* Act on the event */
		var isComfirm = $('.goods_footer').text().trim();
		if(isComfirm=='确 定'){	
			window.location.href = "comfirm_address.html?id="+id+"&num="+num+"&expressId="+expressId+"&userId="+userId;
		}else{
			var oDiv = $('<div class="shade"></div>')
			$('body').prepend(oDiv);
			$('.goods_panel').css('display','block');
			$('.goods_footer').text('确 定');
		}
	});

	


	$('.goods_pexit').click(function(event) {
		$(this).parents('.goods_panel').css('display','none');
		$('.shade').css('display','none');
		$('.goods_footer').text('立即兑换');
	});


	$.ajax({
		url: '/api/goods/'+id+'?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		data: {count: num},
		success:function(data){
			console.log(data);
			$('.goods_img img').attr('src',data.img);
			$('.detail_img img').attr('src',data.img);
			$('.goods_pimg img').attr('src',data.img);	

			$('.goods_name h5').text(data.name);
			$('.detail_text_one').html(data.desc);
			//$('.detail_text_two').text(data.explain);
			$('.LV span').text(data.cLevel);
			$('.goods_left span').text(data.restCount);

			$('.goods_point span').text(data.cPoint);
			$('.goods_ppoint span').text(data.cPoint);
			if(data.postage === true){
				$('.goods_content .goods_over .goods_right span').text('包邮');
			}else{
				$('.goods_content .goods_over .goods_right span').text('不包邮');
			}

			//数量的选择
			$('.goods_psub').click(function(event) {	
				if(num>0&&!data.single){
					num--;
					$('.goods_pcount').text(num);
					$('.goods_ptext p:nth-of-type(2) span').text(num);
				}else{
					alert('本商品只能兑换一件');
					return false;
				}
			});
			$('.goods_padd').click(function(event) {
				if(!data.single){	
					num++;
				}else{
					alert('本商品只能兑换一件');
				}
				$('.goods_pcount').text(num);
				$('.goods_ptext p:nth-of-type(2) span').text(num);
			});
			
			
			expressId = data.postage;//true


		},
		error:function(){

		}
	})
	
});