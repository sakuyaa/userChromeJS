// ==UserScript==
// @name		MouseScrollCloseTab.uc.js
// @namespace	zhaibr@163.com
// @description	鼠标悬停标签滚轮上下关闭该标签
// @include		main
// @version		2025.1.10
// @charset		UTF-8
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// @note		modify by sakuyaa
// ==/UserScript==
(function() {
	let enableClose = true;
	setTimeout(() => {   //增加延迟避免运行太早获取不到gBrowser
		gBrowser.tabContainer.addEventListener('wheel', event => {
			if (!event.ctrlKey && enableClose) {
				let tab = event.target.closest('.tabbrowser-tab');
				if (!tab) {
					return;
				}
				enableClose = false;
				gBrowser.removeTab(tab, {animate: true});
				event.stopPropagation();
				event.preventDefault();
				setTimeout(() => {
					enableClose = true;
				}, 500);   //短时间内不能连续关闭
			}
		}, true);
	}, 831);
})();
