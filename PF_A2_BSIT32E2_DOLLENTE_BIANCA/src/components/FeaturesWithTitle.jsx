import React from "react";

const FeaturesWithTitle = () => {
  return (
    <section className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Features with title</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">

        {/* Left-aligned feature column */}
        <div className="col d-flex flex-column align-items-start gap-2">

          {/* GitHub Icon */}
          <div className="mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width="60"
              alt="GitHub Icon"
            />
          </div>

          <h2 className="fw-bold text-body-emphasis">
            Learn How to Use GitHub for Your Projects
          </h2>

          <p className="text-body-secondary">
            GitHub is a platform where developers store and manage their code.
            It allows collaboration, version control, and project tracking.
            Students and professionals use GitHub to share projects and build portfolios.
          </p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Visit GitHub
          </a>
        </div>

        {/* Right-aligned feature column */}
        <div className="col">
          <div className="row g-4 row-cols-1 row-cols-sm-2">

            {/* Feature 1 */}
            <div className="col d-flex flex-column align-items-start gap-2">

              <div className="mb-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8HWzTFj0lyNIxORyTTMvjF98JKOidFWWDw&s"
                  width="40"
                  alt="Repository Icon"
                />
              </div>

              <h3 className="fs-5 text-body-emphasis">
                Create Repositories
              </h3>

              <p className="text-body-secondary">
                Store your projects in repositories where you can organize and manage your files.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="https://cdn.creazilla.com/icons/3264590/track-changes-icon-size_256.png">

              <div className="mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  width="40"
                  alt="Track Changes Icon"
                />
              </div>

              <h3 className="fs-5 text-body-emphasis">
                Track Changes
              </h3>

              <p className="text-body-secondary">
                GitHub allows you to track code changes and return to previous versions when needed.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="col d-flex flex-column align-items-start gap-2">

              <div className="mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
                  width="40"
                  alt="Collaboration Icon"
                />
              </div>

              <h3 className="fs-5 text-body-emphasis">
                Collaborate
              </h3>

              <p className="text-body-secondary">
                Work together with classmates or teammates by sharing and editing projects online.
              </p>

            </div>

            {/* Feature 4 */}
            <div className="col d-flex flex-column align-items-start gap-2">

              <div className="mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                  width="40"
                  alt="Access Icon"
                />
              </div>

              <h3 className="fs-5 text-body-emphasis">
                Access Anywhere
              </h3>

              <p className="text-body-secondary">
                Access your projects from any device connected to the internet.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesWithTitle;