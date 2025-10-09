import { Fragment, useState } from "react";

const ImageView = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openModal = (src) => {
    setImageSrc(src);
    setImageModal(true);
  };

  const closeModal = () => {
    setImageModal(false);
    setImageSrc("");
  };

  return (
    <Fragment>
      {imageModal && (
        <div className="mfp-bg mfp-ready" onClick={closeModal}>
          <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor">
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <img className="mfp-img" src={imageSrc} alt="" />
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ImageView;