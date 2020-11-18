import React, { FC } from 'react';
import cn from 'classnames';

import './static/styles.scss';

type NativeInputProps = React.HTMLProps<HTMLInputElement>;

export interface IInputProps extends NativeInputProps {
  name?: string;
  value?: string;
  className?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextField: FC<IInputProps> = ({
  name,
  value,
  className: classNameProp,
  type,
  placeholder,
  readOnly,
  disabled,
  fullWidth,
  onChange,
  ...otherProps
}: IInputProps) => {
  const className = cn(
    'input',
    {
      [`input_fullwidth`]: fullWidth,
    },
    classNameProp,
  );

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <input
      {...otherProps}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={readOnly || disabled ? undefined : handlerChange}
      readOnly={!disabled && readOnly}
      disabled={disabled}
    />
  );
};

TextField.defaultProps = {
  name: '',
  type: 'text',
  className: '',
};

export default TextField;
