import React, { FC } from 'react';
import cn from 'classnames';

interface LinkProps {
  current?: boolean;
  link: string;
  children: any;
}

const Link: FC<LinkProps> = ({ current, link, children }: LinkProps) => {
  {
    /* TODO: подключить Link (React-Router-Dom) */
  }
  return (
    <a href={link} className={cn('header__menu__link', { 'header__menu__link--current': current })}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  current: false,
};

export default Link;
