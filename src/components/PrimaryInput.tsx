import React from 'react'
import './PrimaryInput.css'

interface PrimaryInputProps {
  className: string
  placeholder: string
  height: string
}

function PrimaryInput({ placeholder, className, height }: PrimaryInputProps) {
  return (
    <div className="input-bx">
        <input type="text" className={ className } id='primaryInput' style={{height: height}} maxLength={35}/>
        <label htmlFor="primary-input" className="input-placeholder">{ placeholder }</label>
    </div>
  )
}

export default PrimaryInput