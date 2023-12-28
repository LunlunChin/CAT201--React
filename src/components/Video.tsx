import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import introVid from "../assets/intro-vid.mp4";

const Video: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h2 className="mb-3">Introduction Video</h2>
            <p className="lead mb-4">Watch this video to learn more about us</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="embed-responsive embed-responsive-16by9">
              <video
                src={introVid}
                controls
                className="embed-responsive-item"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Video;
