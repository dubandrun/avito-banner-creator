import html2canvas from "html2canvas";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import { mapDOM } from "./utils/utils";

function App() {
  const [bannerStyles, setImgStyles] = useState({
    backgroundColor: "",
    text: "",
    imageUrl: "",
  });
  const [showImage, setShowImage] = useState(false);

  const onStylesInputChange = (e) => {
    const name = e.target.name;
    setImgStyles({ ...bannerStyles, [name]: e.target.value });
  };

  useEffect(() => {
    bannerStyles.imageUrl.length > 0 ? setShowImage(true) : setShowImage(false);
  }, [bannerStyles]);

  const banner = useRef(null);
  const bannerContainer = useRef(null);

  const createBanner = (e) => {
    e.preventDefault();
    html2canvas(banner.current, { allowTaint: true }).then(function (canvas) {
      bannerContainer.current.innerHTML = "";
      bannerContainer.current.appendChild(canvas);
    });
  };
  
  const copyHtmlToBuffer = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(banner.current.outerHTML);
    alert("HTML-разметка баннера скопирована в буфер обмена.");
  };

  const copyJSONtoBuffer = (e) => {
    e.preventDefault();
    const json = mapDOM(banner.current, true);
    navigator.clipboard.writeText(json);
    alert("HTML-разметка баннера в формате JSON скопирована в буфер обмена.");
  };

  return (
    <div className="app">
      <div className="creation-field">
        <div className="creation-field__preview">
          <Form
            onStylesInputChange={onStylesInputChange}
            createBanner={createBanner}
            copyHtmlToBuffer={copyHtmlToBuffer}
            copyJSONtoBuffer={copyJSONtoBuffer}
            backgroundColor={bannerStyles.backgroundColor}
            imageUrl={bannerStyles.imageUrl}
            text={bannerStyles.text}
          />
          <a href="/" className="creation-field__link">
            <Banner
              ref={banner}
              showImage={showImage}
              backgroundColor={bannerStyles.backgroundColor}
              imageUrl={bannerStyles.imageUrl}
              text={bannerStyles.text}
            />
          </a>
        </div>
        <div className="creation-field__result">
          <h3 className="creation-field__header">Изображение в формате png:</h3>
          <div
            ref={bannerContainer}
            className="creation-field__img-banner"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
