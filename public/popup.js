document.getElementById("resetButton").addEventListener("click", clear);

function clear() {
  localStorage.clear();
  chrome.storage.local.clear(function (obj) {
    console.log("cleared");
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
  });
}
