function initCalloutAnimation() {
    // Clean up any previously injected script
    document.querySelectorAll('script[src*="calloutObserver.js"]').forEach(script => script.remove());

    // Inject fresh script
    const script = document.createElement('script');
    script.src = "https://lukemk7.github.io/portfolio_assets/scripts/calloutObserver.js";
    script.onload = () => {
      observeCalloutById("block-204462bfe5cb80c6a76ffc96f92d10ab"); // use the ID of your .super-embed
    };
    document.body.appendChild(script);
  }

  // Run on first load
  initCalloutAnimation();

  // Re-run on every internal Super page load
  window.addEventListener('super:load', () => {
    initCalloutAnimation();
  });