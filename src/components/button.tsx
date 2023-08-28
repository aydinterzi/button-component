import React from 'react'

type ButtonProps = {
  variant?: 'outline' | 'text',
  disableShadow?: boolean,
  disabled?: boolean,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  size?: 'sm' | 'md' | 'lg',
  color?: 'default' | 'primary' | 'secondary' | 'danger',
}

function Button({ variant, disableShadow, disabled, startIcon, endIcon, size = "md", color = "default" }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} btn-${color}`}
      disabled={disabled}
    >
      {startIcon}
      Button
      {endIcon}
    </button>
  )
}

export default Button