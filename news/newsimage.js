function openImg(id, src){
	var img = document.getElementById(id);
	img.src = src;        
	var w = img.naturalWidth;
	var h = img.naturalHeight;
	window.open(src,"none","width=" + w + ",height=" + h + ',left=' + ((screen.width - w)/2) + ',top=' + ((0.9*screen.height - h)/2));
}