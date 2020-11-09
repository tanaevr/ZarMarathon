import React, { FC } from 'react';
import cn from 'classnames';

import './static/styles.scss';

interface IProps {
  component?: any;
  className?: string;
  title?: boolean;
  children?: React.ReactNode;
}

const Heading: FC<IProps> = ({
  component: ComponentProp,
  className: classNameProp,
  title,
  children,
  ...otherProps
}: IProps) => {
  const className = cn(
    'heading',
    {
      heading_title: title,
    },
    classNameProp,
  );

  return (
    <ComponentProp className={className} {...otherProps}>
      {children}
    </ComponentProp>
  );
};

Heading.defaultProps = {
  component: 'div',
  className: '',
  title: false,
  children: '',
};

export default Heading;
