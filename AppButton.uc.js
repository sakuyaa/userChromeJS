// ==UserScript==
// @name		AppButton.uc.js
// @author		sakuyaa
// @description	左上角火狐按钮
// @include		main
// @version		2019.3.20
// @charset		UTF-8
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// ==/UserScript==
(function() {
	let appButton = document.getElementById('PanelUI-button');
	document.getElementById('TabsToolbar').insertBefore(appButton, document.getElementById('TabsToolbar').firstChild);
	appButton.style.border = 'none';
	let menu = document.getElementById('PanelUI-menu-button');
	menu.style.padding = '0 3px';
	menu.style.marginLeft = '-3px';
	menu.style.MozImageRegion = 'rect(0, 0, 0, 0)';
	menu.style.listStyleImage = 'url("chrome://branding/content/icon32.png")';   //火狐图标
})();
