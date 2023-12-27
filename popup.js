// popup.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
  
    const getTextContentButton = document.getElementById('getTextContent');
    console.log("getTextContentButton:", getTextContentButton);
  
    if (getTextContentButton) {
      getTextContentButton.addEventListener('click', function() {
        console.log("Get Text Content button clicked");
  
        // Send a message to the content script to get text content
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          console.log("Tabs:", tabs);
          
          chrome.tabs.sendMessage(tabs[0].id, { action: "getTextContent" }, function(response) {
            console.log("Content script response:", response);
  
            // Display the text content in the popup
            const resultDiv = document.getElementById('result');
            console.log("Result div:", resultDiv);
  
            if (resultDiv) {
              resultDiv.textContent = response ? response.textContent : "No text content found.";
            } else {
              console.error("Result div not found");
            }
          });
        });
      });
    } else {
      console.error("Get Text Content button not found");
    }
  });
  