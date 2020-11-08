import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

interface NavLinkProps {
  current?: boolean;
  href: string;
  children: any;
}

const NavLink: FC<NavLinkProps> = ({ current, href, children }: NavLinkProps) => {
  const history = useHistory();

  const handleClick = (url: string) => {
    history.push(url);
  };

  return (
    <a
      href={href}
      className={cn('header__menu__link', { 'header__menu__link--current': current })}
      onClick={() => handleClick(href)}>
      {children}
    </a>
  );
};

NavLink.defaultProps = {
  current: false,
};

export default NavLink;
