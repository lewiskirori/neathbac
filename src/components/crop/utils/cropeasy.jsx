import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropimage";
import "./cropeasy.scss";

const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation
      );
      setPhotoURL(url);
      setFile(file);
      setOpenCrop(false);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="cropeasy">
      <div className="cropcontent">
        <div
        className="cropper"
          style={{
            // background: "#333",
            // position: "relative",
            width: "100%",
            height: 400,
            minWidth: { sm: 500 },
          }}
        >
          <Cropper
            image={photoURL}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
          />
        </div>
        <div className="buttons">

        <button
          style={{
            position: "relative",
            zIndex: 2,
          }}
          className="cancel"
          onClick={() => setOpenCrop(false)}
        >
          Cancel
        </button>
        <button onClick={cropImage}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default CropEasy;
