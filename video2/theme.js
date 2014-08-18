
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 
  $(".text").each(function(){
    var text = $(this).html().replace(/\s([nszkvaiouNSZKVAIOU]+)\s/g, " $1&nbsp;");
  	$(this).html(text);
  })
 
  vyska = $(window).height();
  sirka = $(window).width();
  var iris = $("#iris");
  
  $('#iris').lazylinepainter({
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#FFFFFF"
  }).lazylinepainter('paint'); 

 $('#circlein').lazylinepainter({
    "svgData": pathObj2,
    "strokeWidth": 1,
    "strokeColor": "#FFFFFF"
  }).lazylinepainter('paint'); 
  
   $('#circleout').lazylinepainter({
    "svgData": pathObj3,
    "strokeWidth": 1,
    "strokeColor": "#FFFFFF"
  }).lazylinepainter('paint'); 
  
	$('.logo').css({ scale: 0, rotate: "180deg", opacity: 0 });
  $('.logo').transition({ scale: 1.2, rotate: "0deg", opacity: 1}, 2000, "easeOutExpo");
 
 var anim = setInterval(function(){
    var random = Math.floor(Math.random() * 6);
  
    if(random == 1) {
      iris.hide();
      setTimeout(function(){
        iris.show();
      }, 100);
    }
    
    if(random == 2) {
      iris.hide();
      setTimeout(function(){
        iris.show();
        setTimeout(function(){
          iris.hide();
          setTimeout(function(){
            iris.show();
        
          }, 80);
        }, 120);
      
      }, 80);
    }
  }, 1000);

  
 });
 

 