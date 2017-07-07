// ==UserScript==
// @name		Inspector.uc.js
// @author		sakuyaa
// @description	shift+鼠标右键，在查看器中查看元素，或在控制台输出浏览器元素信息
// @include		main
// @version		2017.7.7
// @charset		UTF-8
// @compatible	firefox 50
// @homepageURL	https://github.com/sakuyaa/userChromeJS
// ==/UserScript==
(function() {
	const {devtools} = Components.utils.import('resource://devtools/shared/Loader.jsm', {});
	const {gDevTools} = Components.utils.import('resource://devtools/client/framework/gDevTools.jsm', {});
	const {gDevToolsBrowser} = devtools.require('devtools/client/framework/devtools-browser');
	const {Messages} = devtools.require('devtools/client/webconsole/console-output');
	
	function inspect(e) {
		if (!e.shiftKey || e.button != 2 || e.type != 'click') {
			return;
		}
		e.stopPropagation();
		e.stopImmediatePropagation();
		e.preventDefault();
		if (e.target.ownerDocument.defaultView == window) {
			gDevTools.showToolbox(devtools.TargetFactory.forTab(window.gBrowser.selectedTab),
				'webconsole').then(toolbox => {
				let output = toolbox.getCurrentPanel().hud.ui.output;
				output.addMessage(new Messages.Simple('********************' + e.target.toString() +
					'********************', {category: 'WEBDEV', severity: 'LOG'}));
				for (let attr of e.originalTarget.attributes) {
					output.addMessage(new Messages.Simple(attr.name + '="' + attr.value + '"',
					{category: 'WEBDEV', severity: 'LOG'}));
				}
				output.addMessage(new Messages.Simple('************************************************************',
				{category: 'WEBDEV', severity: 'LOG'}));
			});
		} else {
			gDevToolsBrowser.inspectNode(window.gBrowser.selectedTab, e.target);
		}
	}
	
	window.addEventListener('click', inspect, true);
	window.addEventListener('contextmenu', inspect, true);
	window.addEventListener('unload', () => {
		window.removeEventListener('click', inspect, true);
		window.removeEventListener('contextmenu', inspect, true);
	}, {once: true});
})();
