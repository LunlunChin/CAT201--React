import React from "react";
import companyLogo from "../assets/ai-logo.jpg";

<img src={companyLogo} alt="Company Logo" className="img-fluid" />;

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-5">
          <h5 className="text-muted mb-4">About Us</h5>
          <h2 className="text-muted font-weight-bold  mb-4">
            Welcome to our company! We are a leading provider of innovative
            solutions in the industry.
          </h2>
          <p className="mb-4">
            Our mission is to deliver high-quality products and services that
            exceed customer expectations.
          </p>
          <button className="btn btn-dark px-5 py-3" type="button">
            Learn More
          </button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
