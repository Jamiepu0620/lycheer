$(function(){
	// 弹窗关闭
	$(".close-dialog").click(function(){
		$(this).parents(".dialog").hide();
	});


    // 个人简介查看更多的收起与展示
	(function(){
    	var height_box = $('.person-introduction').height();
    	var button = $('.more-tip');
    	if(height_box > 42){
    		var a = 0;
    		$('.person-introduction-box').css({'height':'40px'});
	    	button.css({'display':'inline-block'});
	    	button.on('click',function(){
	    		if(a==0){
	    			var height = $('.person-introduction').height();
	    			$('.person-introduction-box').css({'height':height + 'px','max-height':'none'});
	    			a=1;
	    			$(this).text('收起更多');
	    		}
	    		else if(a==1){
	    			$('.person-introduction-box').css({'height': '40px'});
	    			a=0;
	    			$(this).text('查看更多');
	    		}
	    		
	    	});
    	}
	    else{
	    	button.css({'display':'none'});
	    }
    })();


});