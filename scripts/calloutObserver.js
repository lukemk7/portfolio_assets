function observeCalloutById(id) {
  const target = document.getElementById(id);

  if (!target) {
    console.warn(`Element with ID '${id}' not found.`);
    return;
  }

  const callout = target.querySelector('.callout-wrapper');
  if (!callout) {
    console.warn(`.callout-wrapper not found inside element with ID '${id}'.`);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(callout);
}