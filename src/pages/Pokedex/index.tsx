import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { usePokemons } from '../../hooks/usePokemons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';
import PokemonCard from '../../components/UI/PokemonCard';

import './static/styles.scss';

export type TsArrayElem = string;

export type TsObjectElem = {
  [n: string]: number;
};

export interface IPokemonProps {
  // name_clean: string;
  abilities: TsArrayElem[];
  stats: TsObjectElem;
  types: TsArrayElem[];
  img: string;
  name: string;
  // base_experience: number;
  height: number;
  id: number;
  // is_default: boolean;
  order: number;
  weight: number;
}

interface IProps {}

const Pokedex: FC<IProps> = () => {
  const { data, isLoading, isError } = usePokemons({ limit: 300 });

  if (isError) return <div>isError</div>;

  return (
    <>
      <Header />
      <section className="page-content">
        {isLoading ? (
          <Container>
            <Row>
              <Col>
                <Heading component="div" className="pokedex__title">
                  Loading...
                </Heading>
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            <Container>
              <Row>
                <Col>
                  <Heading component="div" className="pokedex__title">
                    {data.total} <strong>Pokemons</strong> for you to choose your favorite
                  </Heading>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                {data.pokemons.map((pokemon: IPokemonProps) => (
                  <Col key={pokemon.id} xs={4}>
                    <PokemonCard {...pokemon} />
                  </Col>
                ))}
              </Row>
            </Container>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Pokedex;
