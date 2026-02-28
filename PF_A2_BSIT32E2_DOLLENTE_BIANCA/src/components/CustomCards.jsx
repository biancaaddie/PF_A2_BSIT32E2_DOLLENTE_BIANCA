import React from "react";

const CustomCards = () => {
  const cards = [
  {
  title: "Tokyo at Night",
  img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
  location: "Tokyo, Japan",
  days: "4d",
  },
  {
    title: "Santorini Sunset Views",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    location: "Santorini, Greece",
    days: "3d",
  },
  {
    title: "New York Skyline",
    img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f",
    location: "New York, USA",
    days: "5d",
  },
];

  return (
    <div className="container-fluid px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {cards.map((card, idx) => (
          <div className="col" key={idx}>
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{ backgroundImage: `url('${card.img}')` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {card.title}
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>{card.location}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>{card.days}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCards;