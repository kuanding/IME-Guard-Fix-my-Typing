// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "STATUS_UPDATE") {
    const tabId = sender.tab.id;
    if (message.isProtected) {
      chrome.action.setBadgeText({ text: "ON", tabId: tabId });
      chrome.action.setBadgeBackgroundColor({ color: "#10b981", tabId: tabId }); // Green
    } else {
      chrome.action.setBadgeText({ text: "", tabId: tabId });
    }
  }
});
