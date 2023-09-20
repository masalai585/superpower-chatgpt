// eslint-disable-next-line no-unused-vars
function addSyncBanner() {
  const existingSyncBanner = document.querySelector('#sync-nav-wrapper');
  if (existingSyncBanner) existingSyncBanner.remove();
  const navWrapper = document.createElement('div');
  navWrapper.id = 'sync-nav-wrapper';
  navWrapper.className = 'w-full z-10 bg-transparent transition-all relative top-0';
  navWrapper.style = 'height: 56px;';
  const navbar = document.createElement('div');
  navbar.id = 'sync-navbar';
  navbar.className = 'w-full flex items-center justify-center border-b h-14 border-black/10 bg-gray-50 p-4 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300 shadow-md text-sm';
  navbar.style.backgroundColor = '#ffd70036';

  const syncProgressLabel = document.querySelector('#sync-progresslabel');
  if (syncProgressLabel) {
    navbar.textContent = `Syncing conversations to your computer. Some features like search and folders will be unavailable until sync is complete.${syncProgressLabel.textContent.split('Syncing')[1] || ''}`;
    
    // Create an observer instance
    const observer = new MutationObserver(() => {
      navbar.textContent = `Syncing conversations to your computer. Some features like search and folders will be unavailable until sync is complete.${syncProgressLabel.textContent.split('Syncing')[1] || ''}`;
    });

    // Configuration of the observer
    const config = { attributes: true, childList: true, subtree: true };

    // Pass in the target node, as well as the observer options
    observer.observe(syncProgressLabel, config);
  } else {
    console.error("Element with ID 'sync-progresslabel' not found.");
  }

  navWrapper.appendChild(navbar);

  const main = document.querySelector('main');
  if (main) {
    main.parentNode.insertBefore(navWrapper, main);
  } else {
    console.error("Element with ID 'main' not found.");
  }
}
