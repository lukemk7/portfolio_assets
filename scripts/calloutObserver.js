// scripts/calloutObserver.js

function observeCalloutById(blockId, threshold = 0.5) {
  const el = document.querySelector(`#${blockId} .notion-callout__content`);
  if (!el) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: threshold,
  });

  observer.observe(el);
}

// Example usage:
// observeCalloutById('block-abc123');
