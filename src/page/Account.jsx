import React, { useEffect, useState } from "react";
import NavBar from "../components/template/NavBar";

export default function Account({
  dataDefaultImgAccount,
  dataUsers,
  setDataUsers,
}) {
  const [selectedImage, setSelectedImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(dataDefaultImgAccount);
    console.log(selectedImage);
  }, []);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log(selectedImage);
  };

  const handleName = (e) => {
    event.preventDefault();
    setName(e.target.value);
  };

  const handleSubmitAccount = () => {
    if (name === "" || name.length > 15 || selectedImage === "undefined") {
      console.log("non");
    } else {
      console.log(selectedImage);
      console.log(name);
    }
  };

  return (
    <>
      <div className="account">
        <h2>ACCOUNT</h2>
        <div className="account__name">
          <h2>What is your name ?</h2>
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Niamor"
          />
        </div>

        <div className="account__container_all_list_img">
          <h2>Choose your image</h2>
          <div className="account__container_list_img">
            <span>Animals images</span>
            <div className="account__list_img">
              {dataDefaultImgAccount
                .filter((x) => x.category === "animal")
                .map((x) => (
                  <img
                    key={x.img}
                    src={x.img}
                    alt="Image par défaut"
                    className={
                      x.img === selectedImage
                        ? "account__box selected"
                        : "account__box"
                    }
                    onClick={() => handleImageClick(x.img)}
                  />
                ))}
            </div>
          </div>
          <div className="account__container_list_img">
            <span>Nature images</span>
            <div className="account__list_img">
              {" "}
              {dataDefaultImgAccount
                .filter((x) => x.category === "nature")
                .map((x) => (
                  <img
                    key={x.img}
                    src={x.img}
                    alt="Image par défaut"
                    className={
                      x.img === selectedImage
                        ? "account__box selected"
                        : "account__box"
                    }
                    onClick={() => handleImageClick(x.img)}
                  />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmitAccount}
          className="account__submit_account"
        >
          Next
        </button>
      </div>
    </>
  );
}
