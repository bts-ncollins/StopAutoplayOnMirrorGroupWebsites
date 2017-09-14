// this is the background code...
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {  
	//if (changeInfo.status=="loading") {
		chrome.tabs.executeScript(tab.id, {
			file: 'jquery-3.2.1.slim.min.js'
		});
	  	chrome.tabs.executeScript(tab.id, {
			file: 'inject.js'
		});
  	//}
});