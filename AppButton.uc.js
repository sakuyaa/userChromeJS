// ==UserScript==
// @name		AppButton.uc.js
// @author		sakuyaa
// @description	左上角火狐按钮
// @include		main
// @version		2015.8.12
// @charset		UTF-8
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// ==/UserScript==
(function() {
	var appButton = document.getElementById('PanelUI-button');
	document.getElementById('TabsToolbar').insertBefore(appButton, document.getElementById('tabbrowser-tabs'));
	appButton.style.border = 'none';
	var menu = document.getElementById('PanelUI-menu-button');
	menu.style.padding = '2px 8px';
	menu.style.marginLeft = '-3px';
	menu.style.MozImageRegion = 'rect(0, 0, 0, 0)';
	menu.style.listStyleImage = 'url("chrome://branding/content/icon32.png")';   //火狐图标
})();
