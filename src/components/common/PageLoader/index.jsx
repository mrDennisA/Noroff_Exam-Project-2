import { useState, useEffect } from "react";
import { Modal } from "./index.styled";

export default function PageLoader({ loading, loadingProduct = false }) {
  const [element, setElement] = useState(<Modal style={{ opacity: 1 }}>{/* <div>Loading</div> */}</Modal>);

  useEffect(() => {
    if (loading === false && loadingProduct === false) {
      setElement(<Modal style={{ opacity: 0 }}>{/* <div>Loading</div> */}</Modal>);
      setTimeout(() => {
        setElement(null);
      }, 800);
    }
  }, [loading, loadingProduct]);

  return element;
}
