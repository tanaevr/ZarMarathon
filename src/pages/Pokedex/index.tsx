import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';
import PokemonCard from '../../components/UI/PokemonCard';

import { pokemons } from '../../constants/pokemons';

import './static/styles.scss';

interface IProps {}

const Pokedex: FC<IProps> = () => {
  return (
    <>
      <Header />
      <section className="page-content">
        <Container>
          <Row>
            <Col>
              <Heading component="div" className="pokedex__title">
                800 <strong>Pokemons</strong> for you to choose your favorite
              </Heading>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {pokemons.map((pokemon) => (
              <Col key={pokemon.id} xs={4}>
                <PokemonCard {...pokemon} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Pokedex;
