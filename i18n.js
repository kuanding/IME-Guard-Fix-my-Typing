document.addEventListener('DOMContentLoaded', () => {
  // Localize text content and placeholders
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const message = chrome.i18n.getMessage(el.getAttribute('data-i18n'));
    if (message) {
      if (el.tagName === 'INPUT') {
        el.placeholder = message;
      } else {
        el.textContent = message;
      }
    }
  });
  
  // Localize titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const message = chrome.i18n.getMessage(el.getAttribute('data-i18n-title'));
    if (message) {
      el.title = message;
    }
  });
});
