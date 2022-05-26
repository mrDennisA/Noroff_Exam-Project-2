const scrollToElement = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop + ref.current.offsetParent.offsetTop + -32,
    behavior: "smooth",
  });
};

export default scrollToElement;
