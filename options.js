document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-domain-form');
  const input = document.getElementById('domain-input');
  const list = document.getElementById('domain-list');
  const emptyState = document.getElementById('empty-state');

  // Render the list of domains
  const renderDomains = (domains) => {
    list.innerHTML = '';
    
    if (!domains || domains.length === 0) {
      emptyState.classList.remove('hidden');
      return;
    }
    
    emptyState.classList.add('hidden');

    domains.forEach((domain, index) => {
      const item = document.createElement('div');
      item.className = 'domain-item';
      
      const nameCol = document.createElement('div');
      nameCol.className = 'col domain-name';
      nameCol.textContent = domain;
      
      const actionCol = document.createElement('div');
      actionCol.className = 'col action-col';
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.title = chrome.i18n.getMessage("optionsRemove") || "Remove";
      deleteBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"></path>
        </svg>
      `;
      
      deleteBtn.addEventListener('click', () => {
        removeDomain(index);
      });

      actionCol.appendChild(deleteBtn);
      
      item.appendChild(nameCol);
      item.appendChild(actionCol);
      list.appendChild(item);
    });
  };

  // Load domains from storage
  const loadDomains = () => {
    chrome.storage.local.get(['domains'], (data) => {
      renderDomains(data.domains || []);
    });
  };

  // Add domain
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newDomain = input.value.trim().toLowerCase();
    
    if (!newDomain) return;

    chrome.storage.local.get(['domains'], (data) => {
      const domains = data.domains || [];
      if (!domains.includes(newDomain)) {
        domains.push(newDomain);
        chrome.storage.local.set({ domains }, () => {
          input.value = '';
          loadDomains();
        });
      } else {
        // Highlight existing or just clear
        input.value = '';
      }
    });
  });

  // Remove domain
  const removeDomain = (index) => {
    chrome.storage.local.get(['domains'], (data) => {
      const domains = data.domains || [];
      domains.splice(index, 1);
      chrome.storage.local.set({ domains }, () => {
        loadDomains();
      });
    });
  };

  // Initial load
  loadDomains();
  
  // Listen for changes from other pages (like popup)
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.domains) {
      renderDomains(changes.domains.newValue || []);
    }
  });
});
