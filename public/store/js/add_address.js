$(function(){
	var winHeight = $(window).height();
	$('#position_bottom').css('top',winHeight-40+'px');

	var name = $('form .form-group:nth-of-type(1) input');
	var tel = $('form .form-group:nth-of-type(2) input');
	var detailAds = $('form .form-group textarea');
	var btn = $('.detail_btn');
	var addr = null;
	var checkbox_d = 0;

	$('.checkbox label').click(function(event) {
		if(checkbox_d){
			$(this).find('.samll_check img').hide();
			$('.checkbox input').prop('checked',false);
			checkbox_d = 0;
			return false;
		}else{
			$(this).find('.samll_check img').show();
			$('.checkbox input').prop('checked',true);
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

	//校验
	var strategies = {
		isNonEmpty:function(value,errorMeg){ //不为空
			if(value == ""){
				return errorMeg;
			}
		},
		isMobile:function(value,errorMeg){     //手机号码格式
			if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
				return errorMeg;
			}
		}
	};
	var validataFunc = function(){
		var validator = new Validator();  
		validator.add(name,'isNonEmpty','用户名不能为空');
		//validator.add(tel,'isMobile','手机号码格式不正确');
		//validator.add(detailAds,'isNonEmpty','街道详细地址不能为空');

		var errorMeg = validator.start();   //获得校验结果
		return errorMeg;   //返回校验结果
	};
	var Validator = function(){
		this.cache=[];  //保存校验规则	
	};
	Validator.prototype.add = function(dom,rule,errorMeg){
		var ary = rule.split(':');    
		this.cache.push(function(){   
			var strategy = ary.shift();   
			ary.unshift(dom.val());   
			ary.push(errorMeg);  
			return strategies[strategy].apply(dom,ary);
		});
	};
	Validator.prototype.start = function(){
		for (var i = 0,validataFunc; validataFunc = this.cache[i++];){
			var msg = validataFunc();  
			if(msg){  
				return msg;
			}
		}
	};
	btn.click(function(event) {
		/* Act on the event */
		var errorMeg = validataFunc();  
		if(errorMeg){
			alert(errorMeg);
			return false;   //阻止表单提交
		}
		addr = $('.selectList select:nth-of-type(1) option').val()+$('.selectList select:nth-of-type(2) option').val()+$('.selectList select:nth-of-type(3) option').val()+detailAds.val();
		//console.log(addr);
		checkbox_d = $('.checkbox input').prop('checked');
		console.log(checkbox_d);
		alert('添加');
	});


	
	$.ajax({
		url:'/api/users/ID/express?access_token=ACCESSTOKEN',
		type: 'POST',
		dataType: 'json',
		data: {name: name.val(),phone:tel.val(),addr:addr,default:checkbox_d},
		success:function(){

		},
		error:function(){

		}
	})
});