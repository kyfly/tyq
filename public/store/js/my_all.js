$(function(){

	//商品详情
	$('.goods_footer').click(function(event) {
		/* Act on the event */
		var isComfirm = $('.goods_footer').text().trim();
		if(isComfirm=='确 定'){
			window.location.href = "comfirm_address.html";
			//$(window).load('../comfirm_address.html');
		}else{
			var oDiv = $('<div class="shade"></div>')
			$('body').prepend(oDiv);
			$('.goods_panel').css('display','block');
			$('.goods_footer').text('确 定');
		}
	});

	$('.goods_psub').click(function(event) {
		/* Act on the event */
		var num =Number($('.goods_pcount').text());
		if(num>0){
			num--;
			$('.goods_pcount').text(num);
		}else{
			return false;
		}
	});
	$('.goods_padd').click(function(event) {
		/* Act on the event */
		var num =Number($('.goods_pcount').text());			
			num++;
			$('.goods_pcount').text(num);
	});
	$('.goods_pexit').click(function(event) {
		/* Act on the event */
		$(this).parents('.goods_panel').css('display','none');
		$('.shade').css('display','none');
		$('.goods_footer').text('立即兑换');
	});


	//添加收货地址
	var checkbox_d = 0;
	$('.checkbox label').click(function(event) {
		/* Act on the event */
	// $(this).find('.samll_check img').toggle();
			if(checkbox_d){
				$(this).find('.samll_check img').hide();
				checkbox_d = 0;
				return false;
			}else{
				$(this).find('.samll_check img').show();
				checkbox_d = 1;
				return false;
			}	
	});
	$(".selectList").each(function(){
            var url = "area.json";
            var areaJson;
            var temp_html;
            var oProvince = $(this).find(".province");
            var oCity = $(this).find(".city");
            var oDistrict = $(this).find(".district");
            //初始化省
            var province = function(){
                $.each(areaJson,function(i,province){
                    temp_html+="<option value='"+province.p+"'>"+province.p+"</option>";
                });
                oProvince.html(temp_html);
                city();
            };
            //赋值市
            var city = function(){
                temp_html = ""; 
                var n = oProvince.get(0).selectedIndex;
                $.each(areaJson[n].c,function(i,city){
                    temp_html+="<option value='"+city.ct+"'>"+city.ct+"</option>";
                });
                oCity.html(temp_html);
                district();
            };
            //赋值县
            var district = function(){
                temp_html = ""; 
                var m = oProvince.get(0).selectedIndex;
                var n = oCity.get(0).selectedIndex;
                if(typeof(areaJson[m].c[n].d) == "undefined"){
                    oDistrict.css("display","none");
                }else{
                    oDistrict.css("display","inline");
                    $.each(areaJson[m].c[n].d,function(i,district){
                        temp_html+="<option value='"+district.dt+"'>"+district.dt+"</option>";
                    });
                    oDistrict.html(temp_html);
                };
            };
            //选择省改变市
            oProvince.change(function(){
                city();
            });
            //选择市改变县
            oCity.change(function(){
                district();
            });
            //获取json数据
            $.getJSON(url,function(data){
                areaJson = data;
                province();
            });
        });





	//订单列表
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
	$('.my_address_editor').click(function(event) {
		/* Act on the event */
		window.location.href="edit_address.html";
	});
	$('.my_address_dele').click(function(event) {
		/* Act on the event */
		$(this).parents('li').remove();
	});


	// 最底下按钮的定位
	//add_address
	var winHeight = $(window).height();
	$('#position_bottom').css('top',winHeight-40+'px');
	$('#position_edit_address').css('top',winHeight-40+'px');
	$('#position_comfirm_address').css('top',winHeight-50+'px');
	$('#position_comfirm_addresstwo').css('top',winHeight-50+'px');
	$('#position_list').css('top',winHeight-50+'px');
	
	
	

});