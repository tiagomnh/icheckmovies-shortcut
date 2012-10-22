function getIdFromUrl(url) {
    var regex = /(tt\d+)/;
    var match = regex.exec(url);

    return match != null ? match[1] : match;
}

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('imdb.com') > -1) {

    if (getIdFromUrl(tab.url) != null) {
        chrome.pageAction.show(tabId);
    }
  }
};

chrome.pageAction.onClicked.addListener(function(tab) {
    var id = getIdFromUrl(tab.url)

    if (id != null) {
        chrome.tabs.create({
            url: 'http://www.icheckmovies.com/search/movies/?query=' + id
        });
    }
});

chrome.tabs.onUpdated.addListener(checkForValidUrl);