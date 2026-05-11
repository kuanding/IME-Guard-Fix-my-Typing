// State Management
let isComposing = false;
let protectedDomains = [];
let isGuardActive = false;

// Convert wildcard domain to regex
const wildcardToRegex = (wildcard) => {
  const escaped = wildcard.replace(/[.+?^${}()|[\]\\]/g, '\\$&'); // escape special characters
  const regexStr = "^" + escaped.replace(/\\\*/g, '.*') + "$";
  return new RegExp(regexStr);
};

// Check if current site is protected
const checkSiteProtection = () => {
  const currentHost = window.location.hostname;
  isGuardActive = protectedDomains.some(domain => {
    return wildcardToRegex(domain).test(currentHost);
  });
  
  // Inform background script of status
  chrome.runtime.sendMessage({
    type: "STATUS_UPDATE",
    isProtected: isGuardActive
  });
};

// Load domains from storage
const loadDomains = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['domains'], (data) => {
      protectedDomains = data.domains || [];
      checkSiteProtection();
      resolve();
    });
  });
};

// Listen for updates from popup/options
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.domains) {
    protectedDomains = changes.domains.newValue || [];
    checkSiteProtection();
  }
});

// Initialize
loadDomains();

// Interceptor Logic
document.addEventListener('compositionstart', () => { 
  if (!isGuardActive) return;
  isComposing = true; 
}, true);

document.addEventListener('compositionend', () => {
  if (!isGuardActive) return;
  // Safari delay fix: ensures 'Enter' is caught before flag reset
  setTimeout(() => { isComposing = false; }, 50); 
}, true);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && isComposing && isGuardActive) {
    // The nuclear option: stops other scripts from seeing the event
    e.stopImmediatePropagation(); 
    // Note: We do NOT preventDefault() so the IME can still finalize the character
    console.log("[IME Guard: Fix my Typing] Intercepted premature Enter key.");
  }
}, true); // Setting 'true' here is vital for the Capture Phase
