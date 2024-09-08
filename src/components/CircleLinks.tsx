import React from "react";

const CircleLinks = () => {
  const links = [
    { url: "https://example.com/link1", img: "url-to-image1.jpg" },
    { url: "https://example.com/link2", img: "url-to-image2.jpg" },
    { url: "https://example.com/link3", img: "url-to-image3.jpg" },
  ];

  return (
    <div className="relative bottom-0 left-0 flex items-end ">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 h-32 w-32 transform rounded-full bg-white bg-cover bg-center transition-transform hover:scale-110"
          // style={{ backgroundImage: `url(${link.img})` }}
        ></a>
      ))}
    </div>
  );
};

export default CircleLinks;
