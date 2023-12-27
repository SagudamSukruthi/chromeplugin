// content.js

// Function to extract the entire text content from the webpage
function extractTextContent() {
    console.log("extractTextContent function called");
    const textContent = document.body.textContent;
    return textContent;
  }
  
  // Send a message containing the text content to the background script
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "getTextContent") {
        const textContent = extractTextContent();
        sendResponse({ textContent: textContent });
      }
    }
  );
  