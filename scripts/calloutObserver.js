function observeCalloutById(blockId) {
  const blockEl = document.getElementById(blockId);

  if (!blockEl) {
    console.warn(`Element with ID ${blockId} not found.`);
    return;
  }

  const wrapper = blockEl.querySelector('.callout-wrapper');
  if (!wrapper) {
    console.warn(`.callout-wrapper not found within ${blockId}.`);
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5,
  });

  observer.observe(wrapper);
}
