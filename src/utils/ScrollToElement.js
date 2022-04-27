const scrollToElement = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToElement;
