import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './static/styles/footer.scss';

const Footer: FC = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            Make with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Col>
          <Col xs="auto">Ours Team</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
