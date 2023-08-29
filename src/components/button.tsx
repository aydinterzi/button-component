import React from 'react'

type ButtonProps = {
  variant?: 'default' | 'outline' | 'text',
  disableShadow?: boolean,
  disabled?: boolean,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  size?: 'sm' | 'md' | 'lg',
  color?: 'default' | 'primary' | 'secondary' | 'danger',
}

function Button({ variant = "default", disableShadow, disabled, startIcon, endIcon, size = "md", color = "default" }: ButtonProps) {
  return (
    <>
      <button
        className={`bg-${color} hover:bg-${color}/[.07]`}
      >
        {startIcon}
        Button
        {endIcon}
      </button>
    </>
  )
}

export default Button