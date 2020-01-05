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