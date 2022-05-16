import { useState, useEffect } from "react";
import { Modal } from "./index.styled";

export default function PageLoader({ loading, loadingProduct = false }) {
  const [element, setElement] = useState(<Modal className="active" />);

  useEffect(() => {
    if (loading === false && loadingProduct === false) {
      setElement(<Modal className="" />);
      setTimeout(() => {
        setElement(null);
      }, 400);
    }
  }, [loading, loadingProduct]);

  return element;
}
