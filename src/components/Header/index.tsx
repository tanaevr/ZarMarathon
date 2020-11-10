import React, { FC } from 'react';
import { usePath } from 'hookrouter';
import { Container, Row, Col } from 'react-bootstrap';

import './static/styles/header.scss';
import img from './static/img/pokemonlogo.svg';

import { GENERAL_MENU } from '../../routes';

import NavLink from './link';

const Header: FC<{}> = () => {
  const path = usePath();

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
              {GENERAL_MENU.filter((item) => item.showInMenu === true).map((item) => (
                <li key={item.title} className="header__menu__item">
                  <NavLink current={item.link === path} href={item.link}>
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
