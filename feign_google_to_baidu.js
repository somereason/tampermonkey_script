// ==UserScript==
// @name 把google搜索伪装成百度搜索
// @namespace win.somereason.web.utils
// @version 2018.10.10
// @description 用google搜索,很多人看到屏幕后会问你怎么上google的,所以把google的logo换成百度,他们就不会问那么多问题了!
// @author somereason
// @license MIT
// @date 2018-10-05
// @match *://www.google.com/search*
// @match *://www.google.com.hk/search*
// @grant none
// ==/UserScript==
// 


(function () {
    document.getElementById("logocont").innerHTML='<a href="https://www.baidu.com" data-hveid="7"><img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png" alt="Baidu" data-atf="3"></a>';  
    document.title = document.title.replace(/Google\s/g, "百度");

    var searchBtnsByName = document.getElementsByName("btnG")
    if (searchBtnsByName.length > 0) {
        var searchBtn = searchBtnsByName[0];
        searchBtn.innerHTML = '<div style="background-color: #3385ff;color: white;width: 100%;padding: 0px 10px;margin: 0px;border: 1px solid #2d78f4;cursor: pointer;">百度一下</div>"'
        searchBtn.style.cursor = "pointer";
    }
})();
