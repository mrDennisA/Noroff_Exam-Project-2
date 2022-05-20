import { useEffect, useState } from "react";

// Components
import ResponsiveImage from "../../ResponsiveImage";
import { BARCLOSED_ICON } from "../../Icons";

// Styles
import { Modal, Content } from "./index.styled";

export default function ModalImage(props) {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const displayToggle = () => {
    setDisplayModal(!displayModal);
    document.body.style.overflow = document.body.style.overflow ? null : "hidden";
  };

  const closeOnKey = (e) => {
    if (e.keyCode === 27) {
      setDisplayModal(false);
      document.body.style.overflow = null;
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnKey);
    };
  });

  const data = props.data.attributes ? props.data.attributes : props.data.properties;

  return (
    <>
      <button
        onClick={() => {
          displayToggle();
          setModalData(data);
        }}
      >
        {props.data.attributes ? <ResponsiveImage data={data} /> : <img src={data.src} alt={data.alt} />}
      </button>
      {displayModal && (
        <Modal>
          <Content>
            <div>{props.data.attributes ? <ResponsiveImage data={modalData} /> : <img src={modalData.src} alt={modalData.alt} />}</div>
            <div>
              <button onClick={displayToggle}>{BARCLOSED_ICON}</button>
            </div>
          </Content>
        </Modal>
      )}
    </>
  );
}
