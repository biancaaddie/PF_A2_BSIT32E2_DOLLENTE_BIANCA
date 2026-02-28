import React from "react";

const HangingIcons = () => {
  const items = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
      title: "Chill Beats",
      description:
        "Relax and focus with this chill beats playlist, perfect for studying or winding down.",
      youtubeLink: "https://youtu.be/B33a8YkS-hU?si=9gXMHIBq7FFq5Gz7",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/727/727240.png",
      title: "Alternative Rock",
      description:
        "Experience the best of alternative rock with legendary tracks from the 70s and 80s.",
      youtubeLink: "https://www.youtube.com/watch?v=nw0tZFyExtY",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/727/727243.png",
      title: "Pop Hits",
      description:
        "Stay updated with the latest pop hits and trending music videos from around the world.",
      youtubeLink: "https://youtu.be/4FUIEcnvT04?si=Z_jJUft95uA5boAl",
    },
  ];

  return (
    <div className="container-fluid px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Hanging icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {items.map((item, idx) => (
          <div className="col d-flex align-items-start" key={idx}>
            <div
              className="icon-square bg-light text-dark flex-shrink-0 me-3 d-flex justify-content-center align-items-center"
              style={{ width: "4rem", height: "4rem" }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{ width: "2rem", height: "2rem" }}
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a
                href={item.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HangingIcons;