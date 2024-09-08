import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  imageURL: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, imageURL } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : "",
      )}
    >
      <div onClick={onClick} className="embla-thumbs__slide__number">
        <img
          src={imageURL}
          alt="Image description"
          className="transition duration-300 ease-in-out hover:brightness-75"
        />
      </div>
    </div>
  );
};
