"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef(null);

  function handlePickClick() {
    if (imageInput.current) {
      imageInput.current.click(); // Trigger click on file input
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null); // Reset if no file is selected
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result); // Set the image URL
    };
    fileReader.readAsDataURL(file); // Read the file as a data URL
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked Yet</p>}
          {pickedImage && (
            <div className={classes.imageContainer}>
              <Image src={pickedImage} alt="user image picked" fill />
            </div>
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg,image/jpg"
          name={name}
          className={classes.input}
          ref={imageInput} // Attach ref here
          onChange={handleImageChange}
          style={{ display: "none" }} // Hide the file input
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
