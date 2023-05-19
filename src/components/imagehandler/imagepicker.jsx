import React from "react";
import Cropper from "react-easy-crop";
import { useState } from "react";
import { app, storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import "./ImagePicker.scss";
import CropEasy from "../crop/utils/cropeasy";

const ImagePicker = ({ isMulti = false }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState(null);
  const [label, setLabel] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setSelectedImages((prevState) => [
        ...prevState,
        URL.createObjectURL(file),
      ]);
      setImages((prevState) => [...prevState, file]);
      setOpenCrop(true);
    }
  };
  const handleChanges = (e) => {
    if (e.target.files.length == 0) {
      return;
    }
    const selected = Array.from(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      console.log(newImage.width);
      setImages((prevState) => [...prevState, newImage]);
      var _URL = window.URL || window.webkitURL;
      var file, img;
      if ((file = e.target.files[i])) {
        img = new Image();
        var objectUrl = _URL.createObjectURL(file);
        img.onload = function () {
          // alert(this.width + " " + this.height);
          _URL.revokeObjectURL(objectUrl);
        };
        img.src = objectUrl;
        // ()=><Cropper image={objectUrl} />;
      }
    }
    // console.log(images);
    // console.log(selected);
    selected.map((image) => {
      setSelectedImages((prevState) => [
        ...prevState,
        URL.createObjectURL(image),
      ]);
      // console.log(URL.createObjectURL(image));
    });
  };

  const handleUpload = () => {
    if (images == null) {
      return;
    }
    images.map((image, index) => {
      const imageRef = ref(storage, `images/${label + index}`);
      // console.log(label+index);
      uploadBytes(imageRef, image).then((snapshot) => {
        // console.log("Uploaded a blob or file!");
      });
    });
    // const uploadTask =storage.ref(`images/${images.name}`).put
  };
  const handleForm = (event) => {
    event.preventDefault();
  };

  return openCrop ? (
    <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
  ) : (
    <div>
      {/* <h1>{label}</h1> */}
      {/* <form onSubmit={handleForm}> */}
      <div className="imagepicker">
        <label style={{ cursor: "pointer" }}>
          + add image
          {isMulti == true ? (
            <input
              type="file"
              onChange={handleChange}
              multiple
              accept="image/* "
              name=""
              id=""
            />
          ) : (
            <input
              type="file"
              onChange={handleChange}
              // multiple
              accept="image/* "
              name=""
              id=""
            />
          )}
          {/* <input
            type="file"
            onChange={handleChange}
            // multiple
            accept="image/* "
            name=""
            id=""
          /> */}
        </label>
        <div className="imagelist">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={index} id="imageContainer">
                  <img src={image} alt="" height={200} />
                  <button
                    id="delete"
                    // onClick={}
                    onClick={() => {
                      const index = selectedImages.indexOf(image);
                      // let tempArray = selectedImages;
                      // delete tempArray[index];
                      let originalRef = images[index];
                      // console.log(originalRef);
                      // console.log(images);
                      // delete tempArray[index];
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      );
                      // tempArray = images;
                      // delete tempArray[index];
                      setImages(images.filter((e) => e !== originalRef));
                      // setImages(tempArray);
                      // console.log(selectedImages.indexOf(image));
                      // console.log(tempArray);
                      // setTimeout(() => {
                      //   console.log(images);
                      // }, 5000);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
          {/* <img src={photoURL} alt={file.name} /> */}
        </div>
      </div>
      {/* <input
        type="text"
        name="label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Enter product label"
      /> */}

      {/* <button type="submit">boom</button> */}
      {/* <button onClick={handleUpload}>boom</button> */}
      {/* </form> */}
    </div>
  );
};

export default ImagePicker;
