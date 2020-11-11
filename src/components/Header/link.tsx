import React, { FC } from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';

interface NavLinkProps {
  current?: boolean;
  href: string;
  children: any;
}

const NavLink: FC<NavLinkProps> = ({ current, href, children }: NavLinkProps) => {
  return (
    <A href={href} className={cn('header__menu__link', { 'header__menu__link--current': current })}>
      {children}
    </A>
  );
};

NavLink.defaultProps = {
  current: false,
};

export default NavLink;
