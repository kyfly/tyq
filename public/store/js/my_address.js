$(function(){

	$.ajax({
		url: '/api/users/ID/express?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			for(var i =0 ;i < data.length;i++){
				var oLi = '<li><header><div class="my_address_username float_left">'+data[i].name+'</div><div class="my_address_phone float_right">'+data[i].phone+'</div></header><div class="my_address_center">'+data[i].addr+'</div><footer><div class="my_address_dele">删除</div><div class="my_address_stand">|</div><div class="my_address_editor">编辑</div></footer></li>';
				$('.my_address_list').append(oLi);
				$('.my_address_editor').click(function(event) {
					/* Act on the event */
					window.location.href="edit_address.html";
				});
				$('.my_address_dele').click(function(event) {
					/* Act on the event */
					$(this).parents('li').remove();
				});
				
				if(data[i].default){
					var oDiv = '<div class="LV float_left"><span>默认</span></div>';
					$('.my_address_list .my_address_center').prepend(oDiv);
				}
			}

			
		},
		error:function(){

		}

	});
	$('.detail_btn').click(function(event) {
		/* Act on the event */
		window.location.href = 'add_address.html';
	});
});