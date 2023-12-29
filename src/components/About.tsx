import React from "react";
import companyLogo from "../assets/ai-logo.jpg";
import { Link } from "react-router-dom";

<img src={companyLogo} alt="Company Logo" className="img-fluid" />;

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-5 mt-5">
          <h5 className="text-muted mb-4">About Us</h5>
          <h2 className="text-muted font-weight-bold  mb-4">
            Welcome to GenAIx! We are a leading AI Service provider of
            innovative solutions in the industry.
          </h2>
          <p className="mb-4">
            GenAIx is committed to harnessing the power of artificial
            intelligence to revolutionize industries. We strive to provide
            innovative solutions that empower businesses, enhance efficiency,
            and drive growth.
          </p>

          <Link to="/about" className="btn btn-dark px-5 py-3">
            Learn More
          </Link>
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
