function observer(animationClass, itemsSelector) {
    const animationObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const block = entry.target;
            block.classList.add(animationClass);
          }
      });
    });
  
    const reviews = document.querySelectorAll(itemsSelector);
    reviews.forEach((v) => {
      animationObserver.observe(v);
    });
  }

  export default observer;

  