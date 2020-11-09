import React, { FC } from 'react';
import cn from 'classnames';
import { LinkProps } from 'react-router-dom';

import './static/styles.scss';

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<LinkProps>;

export interface IButtonProps extends NativeButtonProps {
  kind?: 'green' | 'third' | 'primary' | 'second' | 'danger' | 'light';
  type?: 'button' | 'submit' | 'reset';
  size?: 'default' | 'small';
  component?: any;
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: FC<IButtonProps> = ({
  component: ComponentProp,
  className: classNameProp,
  kind,
  size,
  type,
  fullWidth,
  children,
  ...otherProps
}: IButtonProps) => {
  const className = cn(
    'btn',
    {
      [`btn_${kind}`]: kind,
      [`btn_${size}`]: size,
      [`btn_fullwidth`]: fullWidth,
    },
    classNameProp,
  );

  return (
    <ComponentProp {...otherProps} className={className}>
      {children}
    </ComponentProp>
  );
};

Button.defaultProps = {
  kind: 'green',
  type: 'button',
  size: 'default',
  component: 'button',
  className: '',
  children: '',
};

export default Button;
