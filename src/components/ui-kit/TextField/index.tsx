import React from 'react'

import { StyledTextField } from './styles'

const CustomTextField = ({
  name,
  helperText,
  label,
  placeholder,
  inputRef,
  fullWidth,
  variant,
  type,
  disabled,
  required,
  InputProps,
  error,
  size,
  onChange,
  value,
  enablevalidation,
  labeltype,
  ...otherProps
}) => {
  return (
    <StyledTextField
      autoComplete="off"
      inputRef={inputRef}
      fullWidth={!!fullWidth}
      name={name}
      variant={variant}
      type={type}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      helperText={labeltype !== 'filter' ? error || helperText : undefined}
      error={labeltype !== 'filter' ? !!error : undefined}
      size={size}
      onChange={onChange}
      value={value}
      labeltype={labeltype}
      {...otherProps}
    />
  )
}

export default CustomTextField

CustomTextField.defaultProps = {
  label: '',
  enablevalidation: false,
  disabled: false,
  type: 'string',
  fullWidth: true,
  variant: 'outlined',
  inputRef: null,
  placeholder: '',
  error: undefined,
  helperText: null,
  size: 'medium',
  multiline: false,
  onChange: () => {},
  value: '',
  name: '',
  labeltype: 'default',
  required: true,
}
