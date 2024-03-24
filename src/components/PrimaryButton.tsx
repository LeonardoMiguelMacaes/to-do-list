import React from 'react'
import './PrimaryButton.css'

interface PrimaryButtonProps {
    className: string
    buttonValue: string
    width: string
    height: string
    onClickedAction: () => void
}

//Componente de botão

function PrimaryButton({ className, buttonValue, width, height, onClickedAction }: PrimaryButtonProps) {
  return (
    <div className="button-bx">
        <button 
          className={className} 
          id='primaryButton' 
          style={{width: width, height: height}} 
          onClick={onClickedAction}>
            { buttonValue }
      </button>
    </div>
  )
}

export default PrimaryButton