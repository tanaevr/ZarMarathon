import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './static/styles/header.scss';
import img from './static/img/pokemonlogo.svg';

import Link from './link';

const Header: FC = () => {
  return (
    <section className="header">
      <Container className="container-xl">
        <Row className="align-items-center">
          <Col>
            <a href="/">
              <img src={img} alt="logo" />
            </a>
          </Col>
          <Col>
            <ul className="header__menu">
              <li className="header__menu__item">
                <Link current link="/">
                  Home
                </Link>
              </li>
              <li className="header__menu__item">
                <Link link="/">Pokédex</Link>
              </li>
              <li className="header__menu__item">
                <Link link="/">Legendaries</Link>
              </li>
              <li className="header__menu__item">
                <Link link="/">Documentation</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
