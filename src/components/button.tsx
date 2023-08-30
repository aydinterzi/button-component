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

  const btnDisabled = disabled ? 'btn-disabled' : ''
  const btnDisabledShadow = disableShadow ? '' : 'shadow-md'
  const btnSize = size === "sm" ? 'p-1' : size === "md" ? 'p-2' : 'p-3'
  const btnColor = color === "default" ? 'bg-default text-dark' : color === "primary" ? 'bg-primary text-white' : color === "secondary" ? 'bg-secondary text-white' : 'bg-danger text-white'
  const btnVariant = variant === "default" ? '' : variant === "outline" ? `border border-${color} bg-white text-${color}` : `text-${color}`
  return (
    <>
      <button
        className={`flex items-center gap-2  ${btnSize} rounded-lg ${btnColor} ${btnVariant} ${btnDisabledShadow} ${btnDisabled} hover:bg-${color}/70`}
      >
        {startIcon}
        Button
        {endIcon}
      </button>
    </>
  )
}

export default Button