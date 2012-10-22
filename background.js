function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('imdb.com') > -1) {

    var regex = /(tt(\d+))/;
    var match = regex.exec(tab.url);

    if (match != null) {
        chrome.pageAction.show(tabId);
    }
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
