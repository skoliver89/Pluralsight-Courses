import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import Status from "./Status";

export default function ({
  form,
  status,
  onChange,
  onSubmit,
  connecting,
  disable,
}) {
  return (
    <Form>
      <Row>
        <Form.Group as={Col} md={6} controlId="product">
          <Form.Label>What's your poison?</Form.Label>
          <Form.Control type="text" value={form.product} onChange={onChange} />
        </Form.Group>
        <Form.Group as={Col} md={6} controlId="size">
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" value={form.size} onChange={onChange} />
        </Form.Group>
      </Row>
      <Row>
        <Col md={12}>
          <Button
            type="button"
            block
            onClick={onSubmit}
            disabled={connecting || disable}
          >
            {connecting ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden
                />{" "}
                Connecting
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Status text={status} />
        </Col>
      </Row>
    </Form>
  );
}
