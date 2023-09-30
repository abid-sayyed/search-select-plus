// Put all the javascript code here, that you want to execute in background.



browser.runtime.onMessage.addListener(function (message) {
  if (message.actionCon === "capturedWordFromContent") {

 
    console.log("Received copied text in bg action popup:", message.wordCon);
    //    browser.tabs.executeScript({
    //   file: "navBar.js",
    // });
  }
});

