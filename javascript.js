
	var menubtn= document.getElementById("menu");
	var sidenav= document.getElementById("nav");
	sidenav.style.right="-250";
	menubtn.onclick=function(){
		if(sidenav.style.right=="-250px"){
			sidenav.style.right="0px";
		}else{
			sidenav.style.right="-250px";

		}
	}
	
	var scroll = new SmoothScroll('a[href*="#"]')
	
