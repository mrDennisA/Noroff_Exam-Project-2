const scrollToElement = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop + ref.current.offsetParent.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToElement;
