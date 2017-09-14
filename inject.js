// this is the code which will be injected into a given page...



//(function() {

	var asyncLoop = function(o){
	    var i=0, bCancel = false; 
	    var loop = function(){
	    	bCancel = $(".video-timer").is(".hidden");
	        if(!bCancel){ o.callback(); return;}
	        o.functionToLoop(loop);
	    } 
	    loop();//init
	}
	asyncLoop({
	    bCancel : false,
	    functionToLoop : function(loop){
	        setTimeout(function(){
	            console.log("waiting for cancel button to be shown.")
	            loop();
	        },1000);
	    },
	    callback : function(){
	        $(".autoplay-cancel").click()
	    }    
	});
//})();