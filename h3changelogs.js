function openImg(id, src){
	var smallimg = document.getElementById(id);  
	var name = smallimg.src.substring( src.lastIndexOf("/") + 1 ); 
	src = "bigimage/" + name;
	var img = new Image();
	img.src = src;
	var w = name.substring( name.indexOf("(")+1, name.indexOf("x"));
	var h = name.substring( name.indexOf("x")+1, name.indexOf(")"));
	window.open(src,"none","width=" + w + ",height=" + h + ',left=' + ((screen.width - w)/2) + ',top=' + ((0.9*screen.height - h)/2));
}

function showdiv(id){
	var button = document.getElementById(id);
	var divstyle = button.parentNode.children[2].style;
	if (divstyle.display=='none') {button.style.backgroundImage = 'url(image/special/minus.png)'; divstyle.display='block'; return;}
	if (divstyle.display=='block') {button.style.backgroundImage = 'url(image/special/plus.png)'; divstyle.display='none'; return;}
}


function showdiv2(id){
	var button = document.getElementById(id).parentNode.children[0];
	var divstyle = button.parentNode.children[2].style;
	if (divstyle.display=='none') {button.style.backgroundImage = 'url(image/special/minus.png)'; divstyle.display='block'; return;}
	if (divstyle.display=='block') {button.style.backgroundImage = 'url(image/special/plus.png)'; divstyle.display='none'; return;}
}