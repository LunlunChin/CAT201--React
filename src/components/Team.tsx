import React from "react";

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="team-member">
              <img src="team-member-1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="team-member-2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src="team-member-3.jpg" alt="Team Member 3" />
              <h3>Mike Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
