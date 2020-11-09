import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './static/styles/header.scss';
import img from './static/img/pokemonlogo.svg';

import NavLink from './link';

const MENU = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Pokedex',
    href: '/pokedex/',
  },
  {
    id: 3,
    title: 'Legendaries',
    href: '/legendaries/',
  },
  {
    id: 4,
    title: 'Documentation',
    href: '/documentation/',
  },
];

const Header: FC<{}> = ({ match }: any) => {
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
              {MENU.map((item) => (
                <li key={item.id} className="header__menu__item">
                  <NavLink current={match.path === item.href} href={item.href}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
