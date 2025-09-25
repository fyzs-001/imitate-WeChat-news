
function getRem(pwidth,prem){
	var html = document.getElementsByTagName("html")[0];
	var oWidth = window.innerWidth;	
	html.style.fontSize = oWidth/pwidth*prem + "px";		
	if(!/iphone|ipad|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())){	//pc端居中显示
		
		html.style.width="750px";
		html.style["margin"] = "0 auto";
		html.style.fontSize="100px";
	}
}

getRem(750,100);
window.onresize = function(){
getRem(750,100);
};