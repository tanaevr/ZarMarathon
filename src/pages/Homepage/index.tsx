import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';

import Parallax from './Parallax';

import './static/styles.scss';

const Homepage: FC = (props) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <Container className="container-xl">
          <Row className="align-items-center">
            <Col className="homepage__content">
              <Heading className="homepage__title" component="h1">
                <strong>Find</strong> all your favorite <strong>Pokemon</strong>
              </Heading>
              <div className="homepage__desc">
                You can know the type of Pokemon, its strengths, disadvantages and abilities
              </div>

              <div className="homepage__pokemon-parallax">
                <Parallax />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
