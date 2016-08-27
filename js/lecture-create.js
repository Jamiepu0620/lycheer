$(function(){
	
//	时间日期的选择
	var config = {
		mode : 3, //时间选择器模式：1：年月日，2：年月日时分（24小时），3：年月日时分（12小时），4：年月日时分秒。默认：1
		format : 2, //时间格式化方式：1：2015年06月10日 17时30分46秒，2：2015-05-10  17:30:46。默认：2
		years : [2016, 2017,2018, 2019], //年份数组
		nowbtn : true, //是否显示现在按钮
		onOk : function(){
			//alert('OK');
		},  //点击确定时添加额外的执行函数 默认null
		onCancel : function(){
//			alert('A');
		}, //点击取消时添加额外的执行函数 默认null
	}

	$('#lecture_start_date').mdatetimer(config);
	
//	课程类型选择的切换
	$("#lecture_type").on("click","div",function(){
		var index = $(this).index();
		$(this).find("label").addClass("lecture-type-checked");
		$(this).siblings().find("label").removeClass("lecture-type-checked");
		
		$(".lecture-type-intro").children("div").eq(index).show().siblings().hide();
	});
	
	
//	ppt模式与图文模式的切换
	$("#picture_mode").on("click","div",function(){
		$(this).find("label").addClass("mode-checked");
		$(this).siblings().find("label").removeClass("mode-checked");
	});
	
	
//	下步骤的切换
	$('.next-step').click(function(){
		var stap_num = $(this).parents(".fill-step").index()+1;
		$(".fill-step").eq(stap_num).css({"right":"0px"});
	});
	
	//上步骤的切换
	$('.last-step').click(function(){
		var stap_num = $(this).parents(".fill-step").index();
		$(".fill-step").eq(stap_num).css({"right":"-768px"});
	});
})
