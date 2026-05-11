document.addEventListener('DOMContentLoaded', async () => {
  const statusCard = document.getElementById('status-card');
  const statusTitle = document.getElementById('status-title');
  const currentDomainEl = document.getElementById('current-domain');
  const toggleBtn = document.getElementById('toggle-btn');
  const settingsBtn = document.getElementById('settings-btn');
  
  // Settings button
  settingsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // Get active tab
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tabs || tabs.length === 0) return;
  const activeTab = tabs[0];
  
  if (!activeTab.url || activeTab.url.startsWith('chrome://') || activeTab.url.startsWith('about:') || activeTab.url.startsWith('safari-web-extension://')) {
    statusTitle.textContent = chrome.i18n.getMessage("statusNotAvailableTitle") || "Not available";
    currentDomainEl.textContent = chrome.i18n.getMessage("statusNotAvailableDesc") || "Cannot protect this page";
    toggleBtn.disabled = true;
    return;
  }

  let url;
  try {
    url = new URL(activeTab.url);
  } catch(e) {
    return;
  }
  const hostname = url.hostname;
  currentDomainEl.textContent = hostname;

  // Convert wildcard domain to regex
  const wildcardToRegex = (wildcard) => {
    const escaped = wildcard.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
    const regexStr = "^" + escaped.replace(/\\\*/g, '.*') + "$";
    return new RegExp(regexStr);
  };

  const updateUI = (isProtected) => {
    statusCard.className = 'status-card ' + (isProtected ? 'protected' : 'unprotected');
    statusTitle.textContent = isProtected ? (chrome.i18n.getMessage("statusProtected") || "Guard Active") : (chrome.i18n.getMessage("statusUnprotected") || "Unprotected");
    
    toggleBtn.disabled = false;
    if (isProtected) {
      toggleBtn.className = "primary-btn remove";
      toggleBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
        <span>${chrome.i18n.getMessage("btnRemoveProtection") || "Remove Protection"}</span>
      `;
    } else {
      toggleBtn.className = "primary-btn";
      toggleBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M5 12h14"></path>
        </svg>
        <span>${chrome.i18n.getMessage("btnProtectSite") || "Protect Current Site"}</span>
      `;
    }
  };

  // Check storage
  chrome.storage.local.get(['domains'], (data) => {
    const domains = data.domains || [];
    const isProtected = domains.some(domain => wildcardToRegex(domain).test(hostname));
    updateUI(isProtected);

    // Setup toggle
    toggleBtn.addEventListener('click', () => {
      chrome.storage.local.get(['domains'], (currentData) => {
        let currentDomains = currentData.domains || [];
        
        if (isProtected) {
          // Find and remove matching rules
          currentDomains = currentDomains.filter(domain => !wildcardToRegex(domain).test(hostname));
        } else {
          // Add standard hostname
          if (!currentDomains.includes(hostname)) {
            currentDomains.push(hostname);
          }
        }
        
        chrome.storage.local.set({ domains: currentDomains }, () => {
          updateUI(!isProtected);
          
          // Optionally reload the tab to inject script or let content script handle storage changes
          chrome.tabs.reload(activeTab.id);
        });
      });
    });
  });
});
