export var InjectedScript = function(webview){
    this.webview = null;
    this.init(webview);
}

InjectedScript.prototype.init = function(webview){
    this.webview = webview;
}

InjectedScript.prototype.alert = function(message){
    if(this.webview == null) return;
    var script = `window.alert("${message}");`
    this.webview.injectJavaScript(script);
}
