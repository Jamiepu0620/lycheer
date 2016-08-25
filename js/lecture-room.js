$(function(){
	// 弹窗关闭
	$(".close-dialog").click(function(){
		$(this).parents(".dialog").hide();
	});

	// 弹窗绝对居中
	$.fn.dialog_center = function(){
		var dialog_content = $(this);
		var dialog_width = dialog_content.width();
		var dialog_height = dialog_content.height();
		dialog_content.css({"margin-left": - dialog_width/2 +"px","margin-top": - dialog_height/2 + "px"});
	}

	// 点击语音输入按钮
		$('#btn_record').click(function(){
			$("#record_control_box").toggle();
			$("#word_control_box").hide();
			$("#setting_area_box").hide();

			$("#lecture_content").removeClass('word-padding');
			$("#lecture_content").removeClass('setting-padding');

			if($("#record_control_box").is(':visible')){  
		        $("#comment_area").addClass("comment-voice-bottom");
		        $("#lecture_content").addClass('voice-padding');

		    }else{  
		       $("#comment_area").removeClass("comment-voice-bottom");
		       $("#lecture_content").removeClass('voice-padding');
		    }

			$("#comment_area").removeClass("comment-word-bottom");
			$("#comment_area").removeClass("comment-setting-bottom");
		});

	// 点击录音按钮
	$("#record_control").click(function(){
		$(this).parent().addClass('listen');
	});

		
	// 点击文字输入按钮
		$("#btn_show_text").click(function(){
			$("#word_control_box").toggle();
			$("#record_control_box").hide();
			$("#setting_area_box").hide();

			$("#lecture_content").removeClass('setting-padding');
			$("#lecture_content").removeClass('voice-padding');
			$("#lecture_content").toggleClass('word-padding');

			$("#comment_area").removeClass("comment-setting-bottom");
			$("#comment_area").removeClass("comment-voice-bottom");
			$("#comment_area").toggleClass("comment-word-bottom");
		});

	// 点击设置按钮
	    $("#btn_setting").click(function(){
			$("#setting_area_box").toggle();
			$("#record_control_box").hide();
			$("#word_control_box").hide();

			$("#lecture_content").removeClass('voice-padding');
			$("#lecture_content").removeClass('word-padding');
			$("#lecture_content").toggleClass('setting-padding');

			$("#comment_area").removeClass("comment-voice-bottom");
			$("#comment_area").removeClass("comment-word-bottom");
			$("#comment_area").toggleClass("comment-setting-bottom");
		});

	// 设置控件按钮点击
	$("#setting_area_box").on("click","label",function(){
		var checkbox = $(this).siblings("input");
		if(checkbox.is(':checked')){
			$(this).addClass("label-check");
		}
		else{
			$(this).removeClass("label-check");
		}
	});

	// 语音控件与文字控件框关闭
	$('#lecture_content').click(function(){
		$("#record_control_box").hide();
		$("#word_control_box").hide();
		$("#setting_area_box").hide();

		$(this).removeClass('word-padding');
		$(this).removeClass('voice-padding');
		$(this).removeClass('setting-padding');

		$("#comment_area").removeClass("comment-voice-bottom");
		$("#comment_area").removeClass("comment-word-bottom");
		$("#comment_area").removeClass("comment-setting-bottom");
	});



	// 显示ppt弹窗
	$("#btn_display_ppts").click(function(){
		$("#ppt_area").show();
	});

	

	// 评论显示与关闭
	(function(){
		var isCommentShow = 0;
		$("#switch_on").click(function(){
			if(isCommentShow == 0){
				$(this).text("弹");
				$("#comment_show").hide();
				$("#comment_wrap").hide();
				isCommentShow = 1;
			}
			else if(isCommentShow == 1){
				$(this).text("关");
				$("#comment_show").show();
				$("#comment_wrap").show();
				isCommentShow = 0;

			}
			
		});
	})();

	// ppt展示
	(function(){
		var isPptShow = 0;
		$("#btn_show_ppt").click(function(){
			if(isPptShow == 0){
				$("#ppt_img").show();
				var ppt_height = $("#ppt_img").height();
				$("#lecture_content").css({"padding-top": ppt_height + "px"});
				isPptShow = 1;
			}
			else if(isPptShow == 1){
				$("#ppt_img").hide();
				var ppt_height = $("#ppt_img").height();
				$("#lecture_content").css({"padding-top": "0px"});
				isPptShow = 0;
			}
			
		});
	})();

	// 输入评论
	$("#btn_comment_edit").click(function(){
		$("#comment_page").show();
	});

	// 打赏显示
	$(".reward").click(function(){
		$("#reward_area").show();
	});


	// 回复弹窗显示
	$(".reply").click(function(e){
		e.stopPropagation();
		$("#reply_bar").show();
		if($("#word_control_box").is(':hidden')){  
			$("#record_control_box").show();
			$("#comment_area").addClass("comment-voice-bottom");
			$("#lecture_content").addClass('voice-padding');

		}
		else if($("#word_control_box").is(':visible')){  
			$("#record_control_box").hide();
			$("#comment_area").addClass("comment-voice-bottom");
			$("#lecture_content").addClass('voice-padding');

		}
		
		
	});

	// 回复弹窗关闭
	$("#cancel_reply").click(function(){
		$("#reply_bar").hide();
	});
	
	


})