import React from "react";
import teammember1 from "../assets/team-member-1.jpg";
import teammember2 from "../assets/team-member-2.jpg";
import teammember3 from "../assets/team-member-3.jpg";


const Team: React.FC = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="team-member">
            <img src={teammember1} className="card-img-top" alt="Team Member 1" />
              <h3>CHIN ZHIE LUN</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img src={teammember2} className="card-img-top" alt="Team Member 2" />
              <h3>ZHAO RAN</h3>
              <p>CTO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
            <img src={teammember3} className="card-img-top" alt="Team Member 3" />
              <h3>YANG QU</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
