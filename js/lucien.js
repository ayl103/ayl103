
//Lucien
function loadCategory(cate){
  if(cate=="all"){
    for(var i = 0; i<$('.grid-item').length; i++){
    		$('.grid-item')[i].style.display = "inline-block";
    }
  }else if(cate=="vr"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('VR')==false){

    		$('.grid-item')[i].style.display = "none";
    	}else{
            console.log("this ran") ;
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="installation"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Installation')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="game"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Playful')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="story"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Story')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="culture"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Culture')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="speculative"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Speculative')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="product"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Product')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="education"){
    for(var i = 0; i<$('.grid-item').length; i++){
    	if($('.grid-item')[i].className.includes('Education')==false){
    		$('.grid-item')[i].style.display = "none";
    	}else{
    		$('.grid-item')[i].style.display = "inline-block";
    	}
    }
  }else if(cate=="wearable"){
    for(var i = 0; i<$('.grid-item').length; i++){
        if($('.grid-item')[i].className.includes('Wearable')==false){
            $('.grid-item')[i].style.display = "none";
        }else{
            $('.grid-item')[i].style.display = "inline-block";

        }
    }
  }
}