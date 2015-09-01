// content.js


    
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {	
      var firstHref = document.URL;
      var firstHref1 = firstHref.match(/v=(.*?)(&|$)/)[1];
      var firstHref2 = "https://www.youtube.com/v/";
      var firstHref3 = firstHref2 + firstHref1;
      console.log(firstHref3);
      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref3});
    }
  }
);