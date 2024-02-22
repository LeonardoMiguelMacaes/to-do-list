import React from 'react'
import './PrimaryInput.css'

interface PrimaryInputProps {
  className: string
  placeholder: string
}

function PrimaryInput({ placeholder, className }: PrimaryInputProps) {
  return (
    <div className="input-bx">
        <input type="text" className={ className } id='primaryInput' />
        <label htmlFor="primary-input" className="input-placeholder">{ placeholder }</label>
    </div>
  )
}

export default PrimaryInput