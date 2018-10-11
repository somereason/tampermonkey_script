// ==UserScript==
// @name 查看历史价格
// @namespace win.somereason.web.utils
// @version 2018.10.11
// @description 购物网站商品页的商品名称后显示[历史价格按钮],点击后打开"慢慢买"网站,查看历史价格.目前支持京东,淘宝,天猫,亚马逊,当当,苏宁,网易严选
// @author somereason
// @license MIT
// @date 2018-09-06
// @match *://item.jd.com/*.html*
// @match *://item.taobao.com/item.htm*
// @match *://detail.tmall.com/item.htm*
// @match *://www.amazon.cn/dp/*
// @match *://product.dangdang.com/*.html*
// @match *://product.suning.com/*/*.html*
// @match *://item.yhd.com/*.html*
// @match *://you.163.com/item/detail*
// @grant none
// ==/UserScript==
// 

(function () {
    var titleElement = null;
    if (window.location.href.indexOf("jd.com") > -1) {
        titleElement = document.querySelector(".sku-name");
    } else if (window.location.href.indexOf("taobao.com") > -1) {
        titleElement = document.querySelector(".tb-main-title");
    } else if (window.location.href.indexOf("tmall.com") > -1) {
        titleElement = document.querySelector(".tb-detail-hd");
    } else if (window.location.href.indexOf("amazon.cn") > -1) {
        titleElement = document.querySelector("#productTitle");
    } else if (window.location.href.indexOf("dangdang.com") > -1) {
        titleElement = document.querySelector(".name_info");
    } else if (window.location.href.indexOf("suning.com") > -1) {
        titleElement = document.querySelector(".proinfo-title");
    } else if (window.location.href.indexOf("yhd.com") > -1) {
        titleElement = document.querySelector("#detail_sku_main");
    } else if (window.location.href.indexOf("you.163.com") > -1) {
        //由于网易严选用的是react,页面初始化的时候元素没有渲染,找不到.所以设置延时1秒,然后在找到 title并添加按钮.
        setTimeout(function () {
            setButton(document.querySelector(".intro .name"));
        }, 1000);
    }
    if (titleElement !== null) {
        setButton(titleElement);
    }
    function setButton(titleElement) {
        titleElement.innerHTML += '<button id="openHistoryPricePage">历史价格</button>';
        document.getElementById("openHistoryPricePage").style.cssText = "width: 110px;height: 32px;background:linear-gradient(#00b79e, #002bffcc);border: 1px solid white;cursor: pointer;color: white;";
        document.getElementById("openHistoryPricePage").onclick = openSite;
    }
    function openSite() {
        window.open("http://tool.manmanbuy.com/historyLowest.aspx?url=" + encodeURIComponent(window.location.href) + "");
    }

})();
