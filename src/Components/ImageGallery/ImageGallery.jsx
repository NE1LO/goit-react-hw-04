import React, { useEffect, useState } from "react";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ gallery }) => {
  return (
    <>
      {gallery && (
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
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
