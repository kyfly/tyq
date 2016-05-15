$(function(){
    var winHeight = $(window).height();
    $('#position_list').css('top',winHeight-50+'px');
	//先加载一页
	page = 0;
    $.ajax({
        type: 'GET',
        url: '/api/goods?exchengeable=true&access_token=ACCESSTOKEN&page=' +page,
        dataType: 'json',
        success: function(data){
        	var result = '';
            for(var i = 0; i < data.count; i++){
                if(i%2 == 0){
                	result += '<li class="list_box_li" index='+data.content[i].id+'><div class="list_box_lidiv float_left"><div class="list_image"><img src="'+data.content[i].img+'" alt="详情图"></div><div class="list_text"><div class="text_name"><div class="LV"><span>'+data.content[i].cLevel+'</span></div><span>'+data.content[i].name+'</span></div><p class="text_change">兑换积分 : <span>'+data.content[i].price+'</span></p></div></div></li>	';
                }else{
                	result += '<li class="list_box_li" index='+data.content[i].id+'><div class="list_box_lidiv float_right"><div class="list_image"><img src="'+data.content[i].img+'" alt="详情图"></div><div class="list_text"><div class="text_name"><div class="LV"><span>'+data.content[i].cLevel+'</span></div><span>'+data.content[i].name+'</span></div><p class="text_change">兑换积分 : <span>'+data.content[i].price+'</span></p></div></div></li>	';
                }  
            }        

            $('.content_box .list_box').append(result);
            $('.list_box_li').click(function(event) {
				/* Act on the event */
				//跳转到商品详情
				window.location.href = "goods.html?id="+$(this).attr('index');
				//console.log($(this).attr('index'));

			});
        },
        error: function(){
            alert('Ajax error!');
        }
    });
	//监听滚动条
	$(window).scroll(function() {

		if($('.content_box')[0].scrollHeight-$('body').scrollTop()-$(window).height()<= 150){  
			page = page++;
			$.ajax({
                type: 'GET',
                url: '/api/goods?exchengeable=true&access_token=ACCESSTOKEN&page=' +page,
                dataType: 'json',
                success: function(data){
                	var result = '';
                    for(var i = 0; i < data.count; i++){
                        if(i%2 == 0){
                        	result += '<li class="list_box_li" index='+data.content[i].id+'><div class="list_box_lidiv float_left"><div class="list_image"><img src="'+data.content[i].img+'" alt="详情图"></div><div class="list_text"><div class="text_name"><div class="LV"><span>'+data.content[i].cLevel+'</span></div><span>'+data.content[i].name+'</span></div><p class="text_change">兑换积分 : <span>'+data.content[i].price+'</span></p></div></div></li>	';
                        }else{
                        	result += '<li class="list_box_li" index='+data.content[i].id+'><div class="list_box_lidiv float_right"><div class="list_image"><img src="'+data.content[i].img+'" alt="详情图"></div><div class="list_text"><div class="text_name"><div class="LV"><span>'+data.content[i].cLevel+'</span></div><span>'+data.content[i].name+'</span></div><p class="text_change">兑换积分 : <span>'+data.content[i].price+'</span></p></div></div></li>	';
                        }  
                    }        

                    $('.content_box .list_box').append(result);
                },
                error: function(){
                    alert('Ajax error!');
                }
            });
			
		}

		$('.list_box_li').click(function(event) {
			/* Act on the event */
			//跳转到商品详情
			window.location.href = "goods.html?id="+$(this).attr('index');
			//console.log($(this).attr('index'));

		});
	});
 
});