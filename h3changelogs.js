function openImg(id, src){
	var img = document.getElementById(id);
	img.src = src;        
	var w = img.naturalWidth;
	var h = img.naturalHeight;
	window.open(src,"none","width=" + w + ",height=" + h + ',left=' + ((screen.width - w)/2) + ',top=' + ((0.9*screen.height - h)/2));
}


function showdiv(id){
	var button = document.getElementById(id);
	var divstyle = button.parentNode.children[2].style;
	if (divstyle.display=='none') {button.style.backgroundImage = 'url(image/special/minus.png)'; divstyle.display='block'; return;}
	if (divstyle.display=='block') {button.style.backgroundImage = 'url(image/special/plus.png)'; divstyle.display='none'; return;}
}