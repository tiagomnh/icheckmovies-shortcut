function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('imdb.com') > -1) {

    var regex = /(tt(\d+))/;
    var match = regex.exec(tab.url);

    if (match != null) {
        chrome.pageAction.show(tabId);
    }
  }
};

chrome.pageAction.onClicked.addListener(function(tab) {

    var regex = /(tt(\d+))/;
    var match = regex.exec(tab.url);

    if (match != null) {
        chrome.tabs.create({
            url: 'http://www.icheckmovies.com/search/movies/?query=' + match[1]
        });
    }
});

chrome.tabs.onUpdated.addListener(checkForValidUrl);