import React from "react";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import service4 from "../assets/service-4.png";
import service5 from "../assets/service-5.png";

const Service: React.FC = () => {
  return (
    <section className="py-5">
      <h1 className="text-center">At a Glance</h1>
      <ul className="list-unstyled text-center ">
        <li>Mine your business data for hidden insights</li>
        <li>Receive recommendations on actions to take</li>
        <li>
          Let AI make faster, more accurate, and automated decisions for you
        </li>
      </ul>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="card border-0">
              <img src={service1} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h4 className="card-title text-center text-danger ">
                  GOING BEYOND INSIGHTS
                </h4>
                <p className="card-text text-center">
                  Analyzing data makes you aware of everything going on in and
                  around your organization. Once you have been alerted to
                  opportunities and threats, GenAIx goes one step further and
                  recommends the best actions to take to get the best outcome
                  for your business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img src={service2} className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h4 className="card-title text-center text-danger">
                  GOING BEYOND INSIGHTS
                </h4>
                <p className="card-text text-center">
                  Analyzing data makes you aware of everything going on in and
                  around your organization. Once you have been alerted to
                  opportunities and threats, GenAIx goes one step further and
                  recommends the best actions to take to get the best outcome
                  for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card border-0">
              <img src={service3} className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h4 className="card-title text-center text-danger">
                  GOING BEYOND INSIGHTS
                </h4>
                <p className="card-text text-center">
                  Analyzing data makes you aware of everything going on in and
                  around your organization. Once you have been alerted to
                  opportunities and threats, GenAIx goes one step further and
                  recommends the best actions to take to get the best outcome
                  for your business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img src={service4} className="card-img-top" alt="Service 4" />
              <div className="card-body">
                <h4 className="card-title text-center text-danger">
                  GOING BEYOND INSIGHTS
                </h4>
                <p className="card-text text-center">
                  Analyzing data makes you aware of everything going on in and
                  around your organization. Once you have been alerted to
                  opportunities and threats, GenAIx goes one step further and
                  recommends the best actions to take to get the best outcome
                  for your business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img src={service5} className="card-img-top" alt="Service 5" />
              <div className="card-body">
                <h4 className="card-title text-center text-danger">
                  GOING BEYOND INSIGHTS
                </h4>
                <p className="card-text text-center">
                  Analyzing data makes you aware of everything going on in and
                  around your organization. Once you have been alerted to
                  opportunities and threats, GenAIx goes one step further and
                  recommends the best actions to take to get the best outcome
                  for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
