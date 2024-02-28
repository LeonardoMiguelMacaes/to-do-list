import React, { useState } from 'react'
import './PrimaryInput.css'

interface PrimaryInputProps {
  className: string
  placeholder: string
  height: string
  onInputChange: (value: string) => void
}

function PrimaryInput({ placeholder, className, height, onInputChange }: PrimaryInputProps) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value)
  }
  return (
    <div className="input-bx">
        <input type="text" 
          className={ className } 
          id='primaryInput' 
          style={{height: height}} 
          maxLength={35} 
          onChange={handleInputChange} />
        <label htmlFor="primary-input" className="input-placeholder">{ placeholder }</label>
    </div>
  )
}

export default PrimaryInput