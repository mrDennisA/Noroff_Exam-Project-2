import { useState } from "react";

// Hooks
import useTimeout from "../../../hooks/useTimeout";

// Styles
import { Modal } from "./index.styled";

export default function PageLoader(props) {
  const [visibleModal, setVisibleModal] = useState(true);
  const [visibleLoading, setVisibleLoading] = useState(false);

  const { loading, loadingProduct = false } = props;

  useTimeout(
    () => {
      setVisibleModal(false);
    },
    400,
    !loading && !loadingProduct
  );

  useTimeout(
    () => {
      setVisibleLoading(true);
    },
    800,
    loading || loadingProduct
  );

  return visibleModal ? (
    <Modal className={!loading && !loadingProduct ? "" : "active"}>{<div className={visibleLoading ? "active" : ""}>Loading</div>}</Modal>
  ) : null;
}
