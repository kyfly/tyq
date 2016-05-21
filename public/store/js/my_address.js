$(function(){

	var hrefVar = function(key){
	    var sear = location.search;
	    var reg = new RegExp(".*" + key + "=((?:(?!(&|\b)).)*).*", "g");
	    return sear.replace(reg, "$1");
	}
	var id = hrefVar('id'),
		num = hrefVar('num'),
		expressId = hrefVar('expressId'),
		userId = hrefVar('userId');
	console.log(userId+"后台省份怎么获取");

	$.ajax({
		url: '/api/users/'+userId+'/express?access_token=ACCESSTOKEN',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			for(var i =0 ;i < data.length;i++){
				var oLi = '<li>\
				<div class="all">\
				<header>\
				<div class="my_address_username float_left">'+data[i].name+'</div>\
				<div class="my_address_phone float_right">'+data[i].phone+'</div>\
				</header>\
				<div class="my_address_center">'+data[i].addr+'</div>\
				</div>\
				<footer>\
				<div class="my_address_dele">删除</div>\
				<div class="my_address_stand">|</div>\
				<div class="my_address_editor"><a href="edit_address.html?userId='+userId+'&userName='+data[i].name+'&userPhone='+data[i].phone+'&userAddr='+data[i].addr+'&default='+data[i].default+'">编辑</a></div>\
				</footer>\
				</li>';
				$('.my_address_list').append(oLi);

				(function(i){
					$('li .all').click(function(event) {
						/* Act on the event */
						var chooseName = data[i].name,
							choosePhone = data[i].phone,
							chooseAddr = data[i].addr;
						window.location.href = "comfirm_address.html?id="+id+"&num="+num+"&expressId="+expressId+"&userId="+userId+"&chooseName="+chooseName+"&choosePhone="+choosePhone+"&chooseAddr="+chooseAddr;
					});

				})(i);

				//删除地址404?
				(function(i){
					$('.my_address_dele').eq(i).click(function(event) {
						$.ajax({
							url: '/api/users/'+userId+'/express/'+i+'?access_token=ACCESSTOKEN',
							type: 'DELETE',
							dataType: 'json',
							data: {id:userId,fk:i},
							success:function(data){
								$(this).parents('li').remove();
							},
							error:function(){

							}
						
						});

						
					});
				})(i);
				
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
		window.location.href = 'add_address.html?userId='+userId;
	});
});