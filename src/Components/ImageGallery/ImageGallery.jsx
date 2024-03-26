import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import getPhotos from "../../js/getApi";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ query, currentPage }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const photosData = await getPhotos({ query, currentPage });
        setGallery(photosData.data);
      } catch (error) {
        console.log(error);
        toast.error("Oops, bad reguest");
      }
    };
    fetchPhoto();
  }, [query, currentPage]);

  console.log(gallery);

  return (
    <ul className={css.photolist}>
      {gallery.map((photo) => (
        <li key={photo.id}>
          <div>
            <img
              className={css.image}
              src={photo.urls.small}
              alt={photo.alt_description}
            />
          </div>
        </li>
      ))}
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </ul>
  );
};

export default ImageGallery;
