// ==UserScript==
// @name 把google搜索伪装成百度搜索
// @namespace win.somereason.web.utils
// @version 2018.12.10.2
// @description 用google搜索,很多人看到屏幕后会问你怎么上google的,所以把google的logo换成百度,他们就不会问那么多问题了!
// @author somereason
// @license MIT
// @date 2018-10-05
// @match *://www.google.com/search*
// @match *://www.google.com.hk/search*
// @match *://www.google.com.tw/search*
// @grant none
// ==/UserScript==
//


(function () {
	var logo = document.getElementById("logo");
    var logoArr;
	if (logo === null) {
		logoArr = document.getElementsByClassName("logo");
		if (logoArr.length > 0)
			logo = logoArr[0];
	}
	if (logo === null) {
		logoArr = document.getElementsByClassName("logocont");
		if (logoArr.length > 0)
			logo = logoArr[0];
	}
	if (logo === null) {
		console.log("oops,google又改样式了.请静待更新");
	} else {
      var imgSize = getImgSize(logo);
      logo.innerHTML = '<a href="https://www.baidu.com" data-hveid="7"><img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png" alt="Baidu" data-atf="3" height="'+imgSize.height+'px" width="'+imgSize.width+'px"></a>';
      document.title = document.title.replace(/Google\s/g, "百度");
	}
  
    function getImgSize(elLogo){
      var elImg=elLogo.querySelector("img");
      if(elImg===null){
        return {height:30,width:92}
      }else{
        return {height:elImg.height,width:elImg.width}
      }
    }
})();
