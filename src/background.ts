// Execute script when page loaded

chrome.runtime.onMessage.addListener(message => {
  if (message === 'runContentScript') {
    chrome.tabs.executeScript({
      file: 'execute.js'
    })
  }
})
