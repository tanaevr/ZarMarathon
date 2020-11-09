import React, { useState, useEffect } from 'react';

import './static/styles.scss';

import SmallPokeBallPng from './static/img/PokeBall1.png';
import CloudPng from './static/img/Clouds.png';
import PokeBallPng from './static/img/Pokeball2.png';
import PikachuPng from './static/img/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <>
      <div
        className="smallPokeBall"
        style={{
          transform: `translate(${screenX * -0.01}px, ${screenY * -0.01}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className="cloud"
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>

      <div
        className="pokeBall"
        style={{
          transform: `translate(${screenX * -0.03}px, ${screenY * -0.03}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className="pikachu"
        style={{
          transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </>
  );
};

export default Parallax;
