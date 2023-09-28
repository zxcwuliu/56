	 function sumbit1() {
             var mb=$("#mb1").attr("selected");
			 var fonts=$("#fonts1").attr("selected");
			 var icon=$("#icon1").attr("selected");
			 var js=$("#js1").attr("selected");
			 if(mb){
				 $("#form1").attr("action","http://www.mobanwang.com/mb/search.asp");
				 }
			 if(icon){
				 $("#form1").attr("action","http://icon.mobanwang.com/search.asp");
				 }
		     if(fonts){
				 $("#form1").attr("action","http://fonts.mobanwang.com/search.asp");
			     }
		     if(js){
				 $("#form1").attr("action","http://js.mobanwang.com/search.asp");
			     }
         }

	 function sumbit2() {
             var mb=$("#mb2").attr("selected");
			 var fonts=$("#fonts2").attr("selected");
			 var icon=$("#icon2").attr("selected");
			 var js=$("#js2").attr("selected");
			 if(mb){
				 $("#form2").attr("action","http://www.mobanwang.com/mb/search.asp");
				 }
			 if(icon){
				 $("#form2").attr("action","http://www.mobanwang.com/icon/search.asp");
				 }
		     if(fonts){
				 $("#form2").attr("action","http://fonts.mobanwang.com/search.asp");
			     }
		     if(js){
				 $("#form2").attr("action","http://js.mobanwang.com/search.asp");
			     }
         }