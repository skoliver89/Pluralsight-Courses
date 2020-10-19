import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import * as Logo from "../images/wired-brain-coffee-logo.png";

export default function () {
  return (
    <header>
      <Row style={{ textAlign: "center" }}>
        <Col md={12}>
          <Image src={Logo} alt="logo" />
        </Col>
      </Row>
    </header>
  );
}
