module.exports = function whenVisible($element, callback, options) {
  if (typeof IntersectionObserver === `undefined`) {
    callback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Use `intersectionRatio` because of Edge 15's
      // lack of support for `isIntersecting`.
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
      if (!isIntersecting) return;
      observer.unobserve($element);
      callback();
    });
  }, options);
  observer.observe($element);
};
