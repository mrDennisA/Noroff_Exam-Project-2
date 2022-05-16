import { useState, useEffect } from "react";
import { Modal } from "./index.styled";

export default function PageLoader({ loading, loadingProduct = false }) {
  const [visibleModal, setVisibleModal] = useState(true);
  const [visibleLoading, setVisibleLoading] = useState(false);

  useEffect(() => {
    if (loading || loadingProduct) {
      setTimeout(() => {
        setVisibleLoading(true);
      }, 800);
    }

    if (!loading && !loadingProduct) {
      setTimeout(() => {
        setVisibleModal(false);
      }, 400);
    }
  }, [loading, loadingProduct]);

  return visibleModal ? (
    <Modal className={!loading && !loadingProduct ? "" : "active"}>{<div className={visibleLoading ? "active" : ""}>Loading</div>}</Modal>
  ) : null;
}
