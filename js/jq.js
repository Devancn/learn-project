$(document).ready(function () {
	//所有表单申请验证 start
	$(".menu_input_box>.named").each(function (i,e) {
		$(e).focus(function () {
			$(".menu_input_box").css("border-color","#d8d8d8");
			$(e).parent(".menu_input_box").css("border-color","#e63232");
			$(e).parent(".menu_input_box").children(".show_txt").text("");
		});
		$(e).blur(function () {
			var txt=$(e).attr("data-value");
			$(".menu_input_box").css("border-color","#d8d8d8");
			if($(e).val()=="" || $(e).val()==null || $(e).val()=="undfined"){
				$(e).parent(".menu_input_box").children(".show_txt").text(txt);
			}
		});
	});
//所有表单申请验证 end
//	底部滚动条的验证 start
	$(".window_bottom_scroll>input[type=text]").each(function (i,e) {
		$(e).focus(function () {
			$(e).prev(".bottom_txt").text("");
		});
		$(e).blur(function () {
			var txt=$(e).attr("data-value");
			if($(e).val()=="" || $(e).val()==null || $(e).val()=="undfined") {
				$(e).prev(".bottom_txt").text(txt);
			}
		});
	});
	(function () {
		$("#scroll_btn").click(function () {
			var name=$("#scroll_name").val();
			var phone=$("#scroll_phone").val();
			var name_regexp=/\s+$|^\s+/;
			var phone_regexp=/^(13|15)[0-9]{9}$/;
			if(!name_regexp.test(name)){
				var is_name=true;
			}else{
				alert("称呼不能有空格")
			}
			if(phone_regexp.test(phone)){
				var is_phone=true;
			}else{
				alert("号码输入错误，请重新输入")
			}
			if(is_name&&is_phone){
				$("body").css("overflow-y","hidden");
				$("#transparent_window").css("display","block");
				$("#window_open_1").css("display","block");
				return true;
			}
			return false;
		});
	})();
//	底部滚动条的验证 end
function index_bannder(){
	var img_width=$(".banner>li").width();//这是获取li的宽度
	var img_N=$(".banner>li").length;//这是获取li的个数
	//根据图片数量自动生成对应的图片按钮
	 for(i=0;i<img_N;i++){
	 	$(".btn_box").append("<span></span>");
	 }

	$(".btn_box span").removeClass("current_btn");
	$(".btn_box span:first").addClass("current_btn");

	// $(".banner").width(img_width*img_N);
/**/
	$(".banner li").hide();
	$(".banner li:first").show();
/**/
	var n=0;
	// function nup(){
	// 	if(n<img_N){n=n+1}else{n=0};
	// 	$(".banner").animate({left:-(img_width)},1000,function () {
	// 		$(".banner_box li:first").insertAfter(".banner_box li:last");
	// 		$(".banner").css({left:0});
	// 		$(".btn_box span").removeClass("current_btn");
	// 	$(".btn_box span").eq(n).addClass("current_btn");
	// 	});
	// }
/**/
	function nup(){
		if(n<img_N-1){n=n+1}else{n=0};
		$(".banner li").fadeOut(1500);
		$(".banner li").eq(n).fadeIn(1500);
		$(".btn_box span").removeClass("current_btn");
	 	$(".btn_box span").eq(n).addClass("current_btn");
	}
/**/
/**/
	$(".btn_box span").hover(function () {
		index=$(".btn_box span").index(this);
		n=index;
		$(".banner li").hide();
		$(".banner li").eq(n).show();
		$(".btn_box span").removeClass("current_btn");
	 	$(this).addClass("current_btn");
	});
/**/
	var timer=setInterval(nup,5000);
// 这是经过下面的按钮在停止的
	$(".btn_box span").hover(function () {
		clearInterval(timer);
	},function () {
		timer=setInterval(nup,5000);
	});
}
	index_bannder();
	//顶部搜索框JQ
	$(".input_keyword").focus(function () {
		$("#input_val").text("");
	});
	$(".input_keyword").blur(function () {
		if($(".input_keyword").val().length==0){
			$("#input_val").text("搜索图片中的关键字");
		}
	});

	// for(var i=0;i<$(".Effect_menu a").length;i++){
	// 	$(".Effect_menu a").eq(0).click(function () {
	// 		$(".Effect").text($(".Effect_menu a").eq(0).text());
	// 	});
	// }

		$(".Effect_menu a").eq(0).click(function () {
			$(".Effect").text($(".Effect_menu a").eq(0).text());
			$("#input_val").text("海量精美效果图任你选");
		});
		$(".Effect_menu a").eq(1).click(function () {
			$(".Effect").text($(".Effect_menu a").eq(1).text());
			$("#input_val").text("更多精彩资讯知识供您阅览");
		});
		$(".Effect_menu a").eq(2).click(function () {
			$(".Effect").text($(".Effect_menu a").eq(2).text());
			$("#input_val").text("挑选优质家居建材");
		});
	// 立即申请部分
    //
	//$(".apply_input input[type='text']").focus(function () {
	//	var content=$(this).siblings(".label").text();
	//	$(this).css({"borderColor":"#e63232"});
	//	$(this).siblings(".label").text("");
	//	$(this).blur(function () {
	//		$(this).css({"borderColor":"#d8d8d8"});
	//		if($(this).val().length==0){
	//			$(this).siblings(".label").text(content);
	//		}
	//	});
	//});
	// $(".apply_input input[type=text]").blur(function () {
	// 	if($(".apply_input .label").text().length==0){
	// 	$(this).siblings(".label").text(content);
	// 	}
	// });


	$(".apply_nav").find("a").click(function () {
		 var a=$(".apply_nav").find("a").index(this);
		$(".apply_nav").find("a").removeClass("current_a");
		$(this).addClass("current_a");
		if(a==0){
			$(".apply_line").css({"left":32});
		}else if(a==1){
			$(".apply_line").css({"left":106});
		}else if(a==2){
			$(".apply_line").css({"left":181});
		}else if(a==3){
			$(".apply_line").css({"left":256});
		}else{
			alert("点击错误");
		}
		$(".apply_content").find("p").hide();
		$(".apply_content").find("p").eq(a).show();
	});

	// 十八龙装修榜切换效果
	$(".adv_list1").mouseover(function () {
		$(".adv_list1").siblings("li.adv_list").removeClass("current_adv");
		$(this).addClass("current_adv");
		$(".adv_list1").siblings("li.adv_list").css({"borderLeftWidth":1,"borderLeftStyle":"solid","borderLeftColor":"#EDEDED","width":"524"});
		$(this).css({"borderLeft":"none","width":"525"});
		$(this).siblings("li.adv_list2").stop(true,false).animate({"left":"545"},700);
		$(this).siblings("li.adv_list3").stop(true,false).animate({"left":"746"},700);
	});

	$(".adv_list2").mouseover(function () {
		$(".adv_list2").siblings("li.adv_list").removeClass("current_adv");
		$(".adv_list2").siblings("li.adv_list").css({"borderLeftWidth":1,"borderLeftStyle":"solid","borderLeftColor":"#EDEDED","width":"524"});
		$(this).addClass("current_adv");
		$(this).css({"borderLeft":"none","width":"525"});
		$(this).stop(true,false).animate({"left":"201"},700);
		$(this).siblings("li.adv_list3").stop(true,false).animate({"left":"746"},700);
	});

	$(".adv_list3").mouseover(function () {
		$(".adv_list3").siblings("li.adv_list").removeClass("current_adv");
		$(".adv_list3").siblings("li.adv_list").css({"borderLeftWidth":1,"borderLeftStyle":"solid","borderLeftColor":"#EDEDED","width":"524"});
		$(this).addClass("current_adv");
		$(this).css({"borderLeft":"none","width":"525"});
		$(this).stop(true,false).animate({"left":"401"},700);
		$(this).siblings("li.adv_list2").stop(true,false).animate({"left":"201"},700);
	});

	// 十八龙装饰右边的排名
	$("#ranking").children("li").click(function () {
		$("#ranking").children("li").removeClass("current_ranking");
		$(this).addClass("current_ranking");
		var n=$("#ranking").children("li").index(this);
		$(".ranking_content").hide();
		$(".ranking_content").eq(n).show();
	});
	// 装修效果图

		$(".effect_img_box .xgt").hover(function(){
			var a=$(".effect_img_box .xgt").index(this);
			$(".classic_title").stop(false,true).animate({bottom:-70},500);
			$(".classic_title").stop(false,true).eq(a).animate({bottom:0},500);
		},function(){
			$(".classic_title").stop(false,true).animate({bottom:-70},500);
		})
	// 十八龙装修榜
	$(".logo_detail").hide();
	$(".logo_detail").eq(0).show();
	$("#finish_logo").children("li").click(function () {
		var n=$("#finish_logo").children("li").index(this);
		$(".logo_detail").hide();
		$(".logo_detail").eq(n).show();
		$("#finish_logo").children("li").removeClass("a_on");
		$(this).addClass("a_on");
		$("#finish_logo li a").removeClass("b_on");
		$("#finish_logo li a").eq(n).addClass("b_on");
	});

	// 十八龙装修榜右边效果

	$(".ranking_title2").children("li").click(function () {
		$(".ranking_title2").children("li").removeClass("current_ranking");
		$(this).addClass("current_ranking");
		var n=$(".ranking_title2").children("li").index(this);
		$(".tab_control").hide();
		$(".tab_control").eq(n).show();
	});

	// 宁波最新装修订单
	$(".free").click(function () {
		$(".free").removeClass("current_ranking");
		$(this).addClass("current_ranking");
		var n=$(".free").index(this);
		$(".tender").hide();
		$(".tender").eq(n).show();
	});

	/*****************************最新招标***************************************/
	// 最新申请服务部分
	(function (){
		var scroll_n=0;
		var scroll_width=$(".scroll_body").children("li").length;
		$(".scroll_body").children("li").each(function (i){
			$(this).attr("id",i);
		});
		function scroll () {
			if(scroll_n<scroll_width-1){scroll_n++}else{scroll_n=0};
			$(".scroll_body").animate({top:"-40px"},1500,null,function () {
				$(".scroll_body").children("li:first").insertAfter($(".scroll_body").children("li:last"));
				$(".scroll_body").css({top:"0"});
				$(".scroll_body").children("li").removeClass("first_row");
				$(".scroll_body").children("li:first").addClass("first_row");
				eq_n=parseInt($(".scroll_body").children("li.first_row").attr("id"));
				var scroll_height=($(".right_avatar_body").height())/($(".scroll_body").children("li").length);
				if(eq_n==0){
					$(".right_avatar_body").css({"top":"0"});
				}
				$(".right_avatar_body").animate({top:-(scroll_height)*eq_n},1000,null,function () {
				$(".right_avatar:first").insertAfter($(".right_avatar:last"));
				});
			});
		};
		var	timer2=setInterval(scroll,3000);
		$(".right_avatar_show").hover(function (){
			clearInterval(timer2);
		},function () {
			timer2=setInterval(scroll,3000);
		});
	})();
	// 返回顶部
	function returnTop(min_height){
		$("#returnTop").hide();
		//定义返回顶部点击向上滚动的动画
		$("#returnTop").click(function(){
			$("html,body").animate({scrollTop:0},700);
		})
		//获取页面的最小高度，无传入值则默认为600像素
		min_height ? min_height = min_height : min_height = 600;
		//为窗口的scroll事件绑定处理函数
		$(window).scroll(function(){
			//获取窗口的滚动条的垂直位置
			var s=$(window).scrollTop();
			//当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
			if(s>min_height){
				$("#returnTop").fadeIn(100);
			}else{
				$("#returnTop").fadeOut(200);
			}
		})
	}
	returnTop();
	$("#qqzxBox i").click(function(){
		$("#qqzxBg").hide();
		$("#qqzxSide").animate({right:0},500);
	})
	$("#qqzxSide").click(function(){
		$(this).animate({right:-48},500);
		$("#qqzxBg").show();
	})
	$(window).resize(function(){
		var window_width=$(window).width();
		if(window_width<1570){
			$("#qqzxBg,#returnTop").css({"left":"auto","right":0,"marginLeft":0});
		}else{
			$("#qqzxBg,#returnTop").css({"left":"50%","right":"auto","marginLeft":675});
		}
	})


	// 全网装修业主最满意的省钱装修服务
	$(".customer_show_box").children("li").hover(function () {

		$(this).children(".pos_box").stop(false,true).animate({"bottom":"0"},500);
	},function () {
		$(this).children(".pos_box").stop(false,true).animate({"bottom":"-91px"},500);
	});
	// 窗口底部滚动条
	$("#bottom_scroll").hide();
	$("#bottom_close").click(function () {
		var width=$("#bottom_scroll").width();
		$("#bottom_scroll").animate({left:-width},1000,function () {
			$("#fixed_left").animate({left:"-2px"});
		});
	});
	$("#fixed_left").click(function () {
		var width=$("#bottom_scroll").width();
		$("#fixed_left").animate({left:"-148px"},500,function () {
			$("#bottom_scroll").animate({left:0},1000);
		});

	});

	$(document).scroll(function () {

		if($(document).scrollTop()>=200){
			$("#bottom_scroll").show();
		}else{
			$("#bottom_scroll").hide();
		}
	});
	// 装修计算器页面表单验证部分
	$("#area").children("#input_val").focus(function() {
		$(this).css({border:"1px solid #80bd46"});
	});
	$("#area").children("#input_val").blur(function() {
		$(this).css({border:"1px solid #E6E6E6"});
		if($(this).val()==null || $(this).val()=="" || $(this).val()==underfined){
			$(this).siblings("#pic").text("建筑面积");
		}
	});
	$("#area").children("#input_val").keypress(function () {
		var input_val=$(this).val();
		var input_length=$(this).val().length;
		$(this).siblings("#pic").text("");
		if(!isNaN(input_val)){
			$("#show_msg").text("*必填项*");
		}else{
			$("#show_msg").text("*请输入合法字符*");
		}
		if(input_length>4){
			$("#show_msg").text("*最多可输入五位数*");
		}
	});
	function add_class(selector,id,current) {
		selector.find("label[id='"+id+"']").click(function () {
			if($(this).children("input[checked='checked']")){
				selector.find("label[id='"+id+"']").removeClass(current);
				$(this).addClass(current);
			}
		});
	}
	add_class($("#style"),"bg_1","current_bg");
	add_class($("#parlor"),"bg_1","current_bg");
	add_class($("#ceiling"),"bg_1","current_bg");
	add_class($("#floor"),"bg_1","current_bg");
	add_class($("#wall"),"bg_1","current_bg");
	add_class($("#ceiling2"),"bg_1","current_bg");
	add_class($("#floor2"),"bg_1","current_bg");
	add_class($("#kitchen"),"bg_1","current_bg");
	add_class($("#cabinet"),"bg_1","current_bg");
	add_class($("#choice"),"bg_1","current_bg");
	add_class($("#quality"),"bg_2","current_bg2");

	/*****************************效果图页面***************************************/
//	焦点图部分
	/*
	* create_li 第一个参数表示图片父类的类名
	* 第二个参数表示 小按钮父类的类名
	* 第三个表示当前小按钮的类名
	* */

	function fade_animation(slideClass,dotClass,leftClass,rightClass,curClass,whether) {
		//根据图片数量生成相应的小按钮
		if(whether==true){
			for(var i=1;i<=slideClass.children("li").length;i++){
				dotClass.append("<li>"+i+"</li>");
			}
		}else if(whether==false){
			for(var i=1;i<=slideClass.children("li").length;i++) {
				dotClass.append("<li></li>");
			}
		}else{
			console.log("whether判断出错")
		}
		//给第一个对象添加当前类
		dotClass.children("li").removeClass(curClass);
		dotClass.children("li").eq(0).addClass(curClass);

		//让生成的小圆点水平居中
		var slide_dot=dotClass.width();
		dotClass.css({"marginLeft":-(slide_dot/2)});


		slideClass.children("li").hide();
		slideClass.children("li").first("li").show();
		dotClass.children("li").removeClass(curClass);
		dotClass.children("li").first("li").addClass(curClass);
		var i=0;
		var n=dotClass.children("li").length;
		function animation () {
			if(i<n-1){i=i+1}else{i=0};
			slideClass.children("li").fadeOut(1000);
			slideClass.children("li").eq(i).fadeIn(1000);
			dotClass.children("li").removeClass(curClass);
			dotClass.children("li").eq(i).addClass(curClass);
		}

			leftClass.click(function () {
			if(i>0){i=i-1}else{i=n-1};
			slideClass.children("li").stop(false,true).fadeOut(1000);
			slideClass.children("li").stop(false,true).eq(i).fadeIn(1000);
			dotClass.children("li").removeClass(curClass);
			dotClass.children("li").eq(i).addClass(curClass);
		});

			rightClass.click(function () {
			if(i<n-1){i=i+1}else{i=0};
			slideClass.children("li").stop(false,true).fadeOut();
			slideClass.children("li").stop(false,true).eq(i).fadeIn(1000);
			dotClass.children("li").removeClass(curClass);
			dotClass.children("li").eq(i).addClass(curClass);
		});
		setInterval(animation,3000);

	}
	fade_animation ($(".xgt_slide"),$(".slide_dot"),$(".xgt_left_btn"),$(".xgt_right_btn"),"present_dot",true);
	fade_animation ($(".demonstarte_slide"),$(".slide_dot"),$(".demonstarte_left_btn"),$(".demonstarte_right_btn"),"current",false);
//	展示图部分 鼠标经过时的动画
	$(".room").children("li").hover(function () {
			$(this).children(".hover_content").prev("span").hide();
			$(".room").children(".hover_content").hide();
			$(this).children(".hover_content").show();
		},function () {
		$(".room").children("li").children("span").show();
		$(".room").children("li").children(".hover_content").hide();
	});

//	本周热门排行部分
	$(".hot_list").children("dt").hide();
	$(".hot_list").children("dt").first().show();
	$(".hot_list").children("dd").removeClass("current_sel");
	$(".hot_list").children("dd").first().addClass("current_sel");

	$(".hot_list").children("dd").mouseover(function () {
		$(".hot_list").children("dt").hide();
		$(this).prev("dt").show();
		$(".hot_list").children("dd").removeClass("current_sel");
		$(this).addClass("current_sel");
	}
	);
	$(".sm_img").mouseover(function () {
		$(".sm_img").siblings(".tip").children("a").css({"color":"#222"});
		$(this).siblings(".tip").children("a").css({"color":"#e63232"});
	});
//	图库案例页面
	function arrow_change () {
		$("#change_arrow").click(function (){
			if($(this).attr("title")=="点击收缩") {
				$(".part").css("height","46px");
				$(this).attr("title", "点击展开");
				$(this)	.css("backgroundPosition","-380px 0");
			}else if($(this).attr("title")=="点击展开"){
				$(".part").css("height","92px");
				$(this).attr("title", "点击收缩");
				$(this)	.css("backgroundPosition","-360px 0");
			}else{
				console.log("出错");
			}
		});
	}
	arrow_change();

	function append_method(){

	}
	append_method();

//	公共的表单验证部分 start
	(function () {
		//第一个参数表示输入框的类名，第二个表示父级的类名,第三个参数表示默认输入框提示的信息,第四个表示该输入框的验证类型1是普通验证，二是号码验证
		function check_form(getfocus,parentClass,message){
			getfocus.focus(function () {
				$(this).parent(parentClass).css("border","1px solid #e63232");
			});
			getfocus.keydown(function () {
				if($(this).val()==null||$(this).val()==""){
					$(this).prev("em").text("");
				}else{
					console.log("错误");
				}
			});
			getfocus.blur(function () {
				$(this).parent(parentClass).css("border","1px solid #ddd");
				if($(this).val()==""||$(this).val()==null||$(this).val()==undefined){
					$(this).prev("em").text(message);
				}
			});
		}
		check_form($(".form_named>input[type='text']"),".form_named","您的称呼");//称呼验证
		check_form($(".form_call>input[type='text']"),".form_call","您的电话");//号码验证
	})();
//	公共的表单验证部分 end
//	图库案例和在线工地顶部效果部分 start
	(function () {
		function onload_none(){
			//当追加元素大于2时让全部撤销显示
			if($("#content").children("a").length>1){
				$(".repeal").css("display","block");
			}else{
				$(".repeal").css("display","none");
			}
		}
		onload_none();
		$(".xgt_det_sel>dd>a").each(function (i,e){
			$(e).click(function () {
				$(e).siblings("a").removeClass("current_style");
				$(e).addClass("current_style");
				var cur_parent=$(e).parent("dd").prev("dt").attr("class");
				var copy_class=cur_parent+"copy";
				var cur_val=$(e).attr("data-value");
				if($("#content>a").hasClass(copy_class)){
					$("#content>a[class="+copy_class+"]").html("<span>"+cur_val+"</span><i></i>");
				}else{
					$("#content").append("<a class='"+copy_class+"'><span>"+cur_val+"</span><i></i></a>");
				}
				onload_none();
				//当点击自己的时候把自己删除点
				$("#content>a").each(function (i,e) {
					$(e).click(function () {
						$(e).remove();
						var class_name=$(e).attr("class");
						var class_name=class_name.substring(0,class_name.length-4);
						console.log(class_name);
						$("."+class_name+"").next("dd").children("a").removeClass("current_style");
						onload_none();
					});
				});
			});
		});
		//	当click全部撤销时让追加的元素不显示
		$(".repeal").click(function () {
			$("#content>a").remove();
			$(this).css("display","none");
			$(".xgt_det_sel>dd>a").removeClass("current_style");
		});
	})();
//	图库案例和在线工地顶部效果部分 end
//	装修监理页面鼠标经过部分 start
	$(".flow_path>li").each(function (i){
		$(this).mouseover(function (){
			$(".flow_content>li.nav_content").removeClass("current_nav");
			$(".flow_content>li.nav_content").eq(i).addClass("current_nav");
		});
	});
//	装修监理页面鼠标经过部分 end

// 装修公司盒子外发光效果 start
	(function (){
		function selected(Pclass,Cclass,curClass){
			$(Pclass).children(Cclass).each(function (i,e) {
				$(e).mouseover(function () {
					$(Pclass).children(Cclass).removeClass(curClass);
					$(e).addClass(curClass);
				});
			});
		}
		selected(".left_zjgd",".zjgd_item","selected");
		selected(".left_zjgd_box",".zxgs_main","selected");
	})();
//菜单效果 start
	(function () {
		$(".xgt_newest").each(function (i,e) {
			$(e).click(function () {
				$(".xgt_newest").removeClass("cur_newext");
				$(e).addClass("cur_newext");
			});
		});
	})();
//菜单效果 end
// 装修公司盒子外发光效果 end
//	选材经验菜单点击效果 start
	$(document).scroll(function () {
		if($(document).scrollTop()>=300){
			$(".sidebar_left").css({"position":"fixed","top":"0"})
		}else{
			$(".sidebar_left").css("position","static")
		}
	});

	(function (){

		//第一个参数表示要点击的对象
		//第二个参数表示点击展开的对象
		//第三个参数表示点击关闭时图片的定位
		//第四个参数表示点击展开时的图片定位
		//第五个参数表示默认状态下第一是否展开
		function menu_click(menu_title,menu_body,close_pos,open_pos,default_open){
			if(default_open){
				$(menu_title).eq(0).children("i").css("background-position",open_pos);//默认让第一个图片以展开形式定位
				$(menu_title).eq(0).next(menu_body).css("display","block");//默认第一个对象展开
			}
			$(menu_title).each(function (i,e) {
				$(e).click(function(){
					if($(e).next(menu_body).css("display")=="none"){
						$(menu_title).next(menu_body).css("display","none");
						$(menu_title).children("i").css("background-position",close_pos);
						$(e).next(menu_body).css("display","block");
						$(e).children("i").css("background-position",open_pos);
					}else if($(e).next(menu_body).css("display")=="block"){
						$(menu_title).next(menu_body).css("display","none");
						$(menu_title).children("i").css("background-position",close_pos);
					}else{
						console.log("判断错误");
					}
				});
			});
		}
		//选材经验一级导航
		menu_click(".first_nav",".menu_body","-60px 0","0 0",true);
		//选材经验二级导航
		menu_click(".secend_nav",".sub_menu_body","-40px 0","-20px 0",false);
	})();
//	选材经验菜单点击效果 end
//	装修资讯内页页面点赞效果 start
	$(".support").each(function (i,e) {
		$(e).click(function () {
			var current_pos=$(e).css("background-position");

			if($(e).css("background-position")=="0px -40px"){
				$(e).css({"background-position":"-220px -40px","color":"#e63232"});

			}else{
				$(e).css("background-position");
			}
		});
	});
//	装修资讯内页页面点赞效果 end
//	弹窗部分 start
	(function (){
		var width=$(".window_open").outerWidth();
		var height=$(".window_open").outerHeight();
		$(".window_open").css({"margin-top":-(height/2),"margin-left":-(width/2)});

		$(".window_close").click(function () {
			$("#transparent_window").css("display","none");
			$(".window_open").css("display","none");
			$("body").css("overflow-y","auto");
		});
	})();
//	弹窗部分 end
//表单弹窗部分 start
	$(".window_input").each(function (i,e) {
		$(e).focus(function () {
			$(".window_select").css("border-color","#dddddd");
			$(e).parent(".window_select").css("border-color","#e63232");
			$(e).prev(".window_txt").text("");
		});
		$(e).blur(function () {
			$(".window_select").css("border-color","#dddddd");
				if($(e).val()==""||$(e).val==null||$(e).val==undefined){
				var val=$(e).attr("data-value");
				$(e).prev(".window_txt").text(val);
			}
		});
	});
//表单弹窗部分 end
(function () {
	var test1;
	var test2;
	$("#window_apply_now").click(function () {
		var area=$("#mianji").val();
		var area_regexp=/^([+]?)\d*\.?\d+$/;
		test1=area_regexp.test(area);
		if(test1){
			$("#mianjiTip").attr("class","onSuccess").text("恭喜您输入正确！");
		}else{
			$("#mianjiTip").attr("class","onError").text("输入的格式不正确");
		}
		var houses=$("#houses").val();
		var houses_regexp=/^\s+|\s$/;
		test2= houses_regexp.test(houses);
		if(!test2){
			$("#housesTip").attr("class","onSuccess").text("恭喜您输入正确！");
		}else{
			$("#housesTip").attr("class","onError").text("不能以空格开头或结尾");
		}
		if(test1&&(!test2)){
			$("body").css("overflow-y","hidden");
			$("#transparent_window").css("display","block");
			$("#window_open_2").css("display","block");
			return true;
		}
		return false;
	});
})();
});