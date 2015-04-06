var tabs = require("sdk/tabs");
var { viewFor } = require("sdk/view/core");
var windows = require("sdk/windows").browserWindows;

tabs.on('open', function onOpen(tab) {
  var chromeWindow = viewFor(windows.activeWindow);
  chromeWindow.setTimeout(function() {
    chromeWindow.getAttention();
  }, 100);
});
