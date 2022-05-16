import { useState, useEffect } from "react";
import { Modal } from "./index.styled";

export default function PageLoader({ loading, loadingProduct = false }) {
  const [visible, setVisible] = useState(true);
  const [visibleDiv, setVisibleDiv] = useState(false);

  useEffect(() => {
    if (loading || loadingProduct) {
      setTimeout(() => {
        setVisibleDiv(true);
      }, 800);
    }

    if (!loading && !loadingProduct) {
      setTimeout(() => {
        setVisible(false);
      }, 400);
    }
  }, [loading, loadingProduct]);

  return visible ? <Modal className={!loading && !loadingProduct ? "" : "active"}>{<div className={visibleDiv ? "active" : ""}>Loading</div>}</Modal> : null;
}
