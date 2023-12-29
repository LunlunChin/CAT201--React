import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MissionSection = () => {
  return (
    <section>
      <h1
        className="mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "darkred",
        }}
      >
        Our Mission, Vision, and Values
      </h1>{" "}
      <Container>
        <Row>
          <Col>
            <h3 className="text-center mb-3">Mission</h3>
            <p>
              GenAIx is committed to harnessing the power of artificial
              intelligence to revolutionize industries. We strive to provide
              innovative solutions that empower businesses, enhance efficiency,
              and drive growth.
            </p>
          </Col>
          <Col>
            <h3 className="text-center mb-3">Vision</h3>
            <p>
              Our vision is to be a global leader in AI technology, recognized
              for our cutting-edge solutions, ethical AI practices, and
              contribution to a smarter and more sustainable future.
            </p>
          </Col>
          <Col>
            <h3 className="text-center mb-3">Values</h3>
            <ul>
              <li>
                Innovation: We believe in the power of innovation to transform
                businesses and society.
              </li>
              <li>
                Integrity: We uphold the highest standards of integrity in all
                of our actions.
              </li>
              <li>
                Quality: We are dedicated to delivering high-quality solutions
                that exceed customer expectations.
              </li>
              <li>
                Collaboration: We foster a collaborative environment that
                encourages teamwork and mutual respect.
              </li>
              <li>
                Sustainability: We are committed to making a positive impact on
                the environment and society.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionSection;
