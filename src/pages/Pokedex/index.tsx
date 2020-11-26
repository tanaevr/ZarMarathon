import React, { FC, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useData } from '../../hooks/useData';

import { IPokemonsProps, IPokemonProps } from '../../interface';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';
import TextField from '../../components/UI/TextField';
import PokemonCard from '../../components/UI/PokemonCard';

import './static/styles.scss';

interface IQuery {
  name?: string;
  limit?: number;
  offset?: number;
}

interface IProps {}

const Pokedex: FC<IProps> = () => {
  const [query, setQuery] = useState<IQuery>({
    limit: 21,
    offset: 0,
  });

  const { data, isLoading, isError } = useData<IPokemonsProps>('getPokemons', query, [JSON.stringify(query)]);

  const handleSearch = (e: any) => {
    function keyUp() {
      setQuery((prevState: IQuery) => ({
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
                {!isLoading && data && data.total} <strong>Pokemons</strong> for you to choose your favorite
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
            {data && !data.total ? (
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
                  {data &&
                    data.pokemons.map((pokemon: IPokemonProps) => (
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
