// ==UserScript==
// @name		MouseScrollCloseTab.uc.js
// @namespace	zhaibr@163.com
// @description	鼠标悬停标签滚轮上下关闭该标签
// @include		main
// @version		2016.8.5
// @charset		UTF-8
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// @note		modify by sakuyaa
// ==/UserScript==
(function() {
	var time = true;
	gBrowser.mTabContainer.addEventListener('wheel', event => {
		if (event.target.localName == 'tab' && !event.ctrlKey && time) {
			time = false;
			gBrowser.removeTab(event.target);
			event.stopPropagation();
			event.preventDefault();
			setTimeout(() => {   //关闭延迟
				time = true;
			}, 300);
		}
	}, true);
}());