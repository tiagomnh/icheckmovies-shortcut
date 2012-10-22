function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('imdb.com') > -1) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
