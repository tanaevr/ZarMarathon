import React, { FC } from 'react';
import { A } from 'hookrouter';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/UI/Button';
import Heading from '../../components/UI/Heading';

import Parallax from './Parallax';

import './static/styles.scss';

interface IProps {
  index?: boolean;
}

const Homepage: FC<IProps> = () => {
  return (
    <>
      <Header />
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
              <Button component={A} kind="green" type="button" href="/pokedex/" size="small">
                See pokemons
              </Button>

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
