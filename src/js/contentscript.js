(function (chrome) {
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = chrome.extension.getURL('js/functions.js');
    document.getElementsByTagName('body')[0].appendChild(js);
}(chrome));