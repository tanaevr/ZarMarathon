import React from 'react';
import Homepage from './pages/Homepage';
import Pokedex from './pages/Pokedex';
// import Pokemon from './pages/Pokemon';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
  showInMenu: boolean;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Homepage index />,
    showInMenu: true,
  },
  {
    title: 'Pokedex',
    link: '/pokedex/',
    component: () => <Pokedex />,
    showInMenu: true,
  },
  // {
  //   title: 'Pokemon',
  //   link: '/pokemon/:id',
  //   component: ({ id }: number) => <Pokemon id={id} />,
  //   showInMenu: false,
  // },
  {
    title: 'Legendaries',
    link: '/legendaries/',
    component: () => <Legendaries />,
    showInMenu: true,
  },
  {
    title: 'Documentation',
    link: '/documentation/',
    component: () => <Documentation />,
    showInMenu: true,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;

  return acc;
}, {});

export default routes;
