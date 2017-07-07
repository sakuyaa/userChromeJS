// ==UserScript==
// @name		MemoryMonitorMod.uc.js
// @description	简单的FF内存监视器
// @include		main
// @version		2017.7.7
// @charset		UTF-8
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// @note		modify by sakuyaa
// ==/UserScript==
(function() {
	let urlbar = document.getElementById('urlbar-icons');
	let memoryPanel = document.createElement('label');
	memoryPanel.id = 'MemoryDisplay';
	memoryPanel.style.font = '16px "microsoft yahei"';
	memoryPanel.style.textShadow = 'white 0 0 6px, white 0 0 6px, white 0 0 6px, white 0 0 6px, rgba(255, 255, 255, .4) 0 1px 0';
	memoryPanel.setAttribute('tooltiptext', '内存监视器，点击打开about:memory');
	memoryPanel.setAttribute('onclick', 'openUILinkIn("about:memory", "tab")');
	urlbar.insertBefore(memoryPanel, urlbar.firstChild);
	let code = setInterval(() => {
		try {
			let value = Math.round(Components.classes['@mozilla.org/memory-reporter-manager;1'].getService(Components.interfaces.nsIMemoryReporterManager).residentUnique / (1024 * 1024));
			memoryPanel.setAttribute('value', value + ' MB');
			if (value < 600) {
				memoryPanel.style.color = 'black';   //正常显示为黑色
			} else if (value < 800) {
				memoryPanel.style.color = 'orange';
			} else if (value < 1000) {
				memoryPanel.style.color = 'blue';
			} else {
				memoryPanel.style.color = 'red';   //超出1000显示为红色
			}
		} catch(e) {
			console.log(e);
			clearInterval(code);
		}
	}, 5000);   //内存刷新周期, 单位 ms
}());
