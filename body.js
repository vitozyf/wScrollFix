document.body.addEventListener(
  "touchmove",
  event => {
    if (!event._isScroller) {
      event.preventDefault();
    }
  },
  { passive: false }
);
