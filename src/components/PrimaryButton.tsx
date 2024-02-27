import React from 'react'
import './PrimaryButton.css'

interface PrimaryButtonProps {
    className: string
    buttonValue: string
    width: string
    height: string
}

function PrimaryButton({ className, buttonValue, width, height }: PrimaryButtonProps) {
  return (
    <div className="button-bx">
        <button className={className} id='primaryButton' style={{width: width, height: height}}>{ buttonValue }</button>
    </div>
  )
}

export default PrimaryButton