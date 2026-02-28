import React from "react";

const ColumnsWithIcons = () => {
  return (
    <div className="container-fluid px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient d-flex justify-content-center align-items-center" style={{height: "4rem"}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833524.png"
              alt="Product Collections"
              style={{width: "2rem", height: "2rem"}}
            />
          </div>
          <h2>Product Collections</h2>
          <p>
            Organize your products efficiently with categorized collections that make browsing simple for your customers.
          </p>
          <a href="https://example.com/collections" className="icon-link">
            Explore Collections
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Arrow Right"
              style={{width: "1em", height: "1em", marginLeft: "0.25rem"}}
            />
          </a>
        </div>

        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient d-flex justify-content-center align-items-center" style={{height: "4rem"}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="Community Support"
              style={{width: "2rem", height: "2rem"}}
            />
          </div>
          <h2>Community Support</h2>
          <p>
            Connect with our vibrant community and get assistance, share knowledge, and collaborate effortlessly.
          </p>
          <a href="https://example.com/community" className="icon-link">
            Join Community
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Arrow Right"
              style={{width: "1em", height: "1em", marginLeft: "0.25rem"}}
            />
          </a>
        </div>

        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient d-flex justify-content-center align-items-center" style={{height: "4rem"}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
              alt="Customizable Settings"
              style={{width: "2rem", height: "2rem"}}
            />
          </div>
          <h2>Customizable Settings</h2>
          <p>
            Tailor the platform to your needs with flexible settings and easy-to-use controls for a personalized experience.
          </p>
          <a href="https://example.com/settings" className="icon-link">
            Customize Now
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Arrow Right"
              style={{width: "1em", height: "1em", marginLeft: "0.25rem"}}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColumnsWithIcons;