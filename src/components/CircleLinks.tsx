import React from "react";

const CircleLinks = () => {
  const links = [
    {
      url: "https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations",
      img: "mic.jpg",
    },
    {
      url: "https://gogaelsgo.com/sports/wrestling/roster",
      img: "Wrestling.jpg",
    },
    {
      url: "https://www.queensjournal.ca/emerging-entrepreneurs-secure-50000-during-ddqic-summer-pitch-competition/",
      img: "DDQIC.png",
    },
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
          style={{ backgroundImage: `url(${link.img})` }}
        ></a>
      ))}
    </div>
  );
};

export default CircleLinks;
