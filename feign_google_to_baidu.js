// ==UserScript==
// @name 把google搜索伪装成百度搜索
// @namespace win.somereason.web.utils
// @version 2019.04.29.3
// @description 用Google搜索,很多人看到屏幕后会问你怎么上Google的.所以当我们把Google的logo换成百度,他们就不会问那么多问题了!
// @author somereason
// @license MIT
// @date 2018-10-05
// @match *://www.google.com/search*
// @match *://www.google.com.hk/search*
// @match *://www.google.com.tw/search*
// @match *://www.google.com/
// @match *://www.google.com.hk/
// @match *://www.google.com.tw/
// @grant none
// ==/UserScript==
//


(function () {
    //伪装favicon
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.baidu.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  
    //搜索页
    if(window.location.href.indexOf("/search")>-1){
      //伪装搜索结果页面logo
      var logo = document.getElementById("logo");
      var logoArr;
      //应对样式的变更,尝试用不同方式获取logo
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
      if (logo === null) { //logo获取失败
          console.log("oops,google又改样式了.请静待更新");
      } else {
          var imgSize = getImgSize(logo);
          logo.innerHTML = '<a href="https://www.baidu.com" data-hveid="7"><img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png" alt="Baidu" data-atf="3" height="' + imgSize.height + 'px" width="' + imgSize.width + 'px"></a>';
        
          document.title = document.title.replace(/\s-\sGoogle\s搜索/g, " - 百度搜索");
      }

      //下面的翻页改成百度的脚丫子
      var navTabSpans=document.getElementsByClassName("csb");
      for(var i=0;i<navTabSpans.length;i++){
        navTabSpans[i].style.width="22px";
        if(i===0) //开始的大G
          navTabSpans[i].style.background='url("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/icons_5859e57.png") no-repeat 0px 0px';
        else if(navTabSpans[i].classList.contains("ch"))// 变灰色的导航页
          navTabSpans[i].style.background='url("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/icons_5859e57.png") no-repeat -144px -288px';
        else //当前导航页
          navTabSpans[i].style.background='url("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/icons_5859e57.png") no-repeat -96px -288px';
      }
    }else{//首页
      var hpLogo=document.querySelector("#lga").querySelector("img");
      hpLogo.src="//www.baidu.com/img/bd_logo1.png";
      hplogo.removeAttribute("srcset");
      hplogo.width=270;
      hplogo.height=129;
      hplogo.style.paddingTop="80px";
      
      var searchBtns=document.getElementsByName("btnK");
      for(var x=0;x<searchBtns.length;x++){
        searchBtns[x].value=searchBtns[x].value.replace("Google","百度");
      }
      
      document.title = document.title.replace(/Google/g, "百度一下，你就知道");
    }
  
  
    /**
     * 获取图片的大小
     * @param elLogo
     */
    function getImgSize(elLogo) {
        var elImg = elLogo.querySelector("img");
        if (elImg === null) {
            return {height: 30, width: 92}
        } else {
            return {height: elImg.height, width: elImg.width}
        }
    }
})();
