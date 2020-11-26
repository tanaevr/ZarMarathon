import React, { FC, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import useData from '../../hooks/useData';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';
import TextField from '../../components/UI/TextField';
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
  const [query, setQuery] = useState({
    limit: 21,
    offset: 0,
  });

  const { data, isLoading, isError } = useData('getPokemons', query, [JSON.stringify(query)]);

  const handleSearch = (e: any) => {
    function keyUp() {
      setQuery((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    const id = setInterval(keyUp, 500);
    return () => clearInterval(id);
  };

  if (isError) return <div>isError</div>;

  return (
    <>
      <Header />
      <section className="page-content">
        <Container>
          <Row>
            <Col>
              <Heading component="div" className="pokedex__title">
                {!isLoading && data.total} <strong>Pokemons</strong> for you to choose your favorite
              </Heading>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField name="name" fullWidth placeholder="Enter the name of the pokemon" onChange={handleSearch} />
            </Col>
          </Row>
        </Container>
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
            {!data.total ? (
              <Container>
                <Row>
                  <Col xs={12}>
                    <Heading component="div" className="pokedex__title">
                      Empty result
                    </Heading>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container>
                <Row>
                  {data.pokemons.map((pokemon: IPokemonProps) => (
                    <Col key={pokemon.id} xs={4}>
                      <PokemonCard {...pokemon} />
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Pokedex;
