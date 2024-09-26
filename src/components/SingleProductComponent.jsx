import React, { useState } from "react";

function SingleProductComponent({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleCurrentImage(i) {
    setCurrentImage(i);
    
  }

  return (
    <div className="flex items-start justify-between">
      <div className="left flex flex-col gap-5">
        <div className="bigPhoto ">
          <img
            src={product.images[currentImage]}
            className="w-[400px]"
            alt=""
          />
        </div>
        <div className="smallPhotos flex items-center jus gap-6">
          {product.images.map((el, i) => {
            return (
              <div key={i}>
                <img
                  className="w-[100px] border border-red-400 object-cover"
                  src={el}
                  key={i}
                  alt=""
                  onClick={() => handleCurrentImage(i)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default SingleProductComponent;
