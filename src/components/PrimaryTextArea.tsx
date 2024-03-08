import React from 'react'
import './PrimaryTextArea.css'

interface PrimaryTextAreaProps {
    className: string
    placeholder: string
    height: string
    defaultValue: string
    onTextAreaChange: (value: string) => void
  }

function PrimaryTextArea({ className, placeholder, height, defaultValue, onTextAreaChange }: PrimaryTextAreaProps) {

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextAreaChange(event.target.value)
  }
  return (
    <div className="textarea-bx">
        <textarea 
          className={className} 
          id='primaryTextArea' 
          cols={20} 
          rows={10} 
          style={{height: height}} 
          maxLength={80} 
          onChange={handleTextAreaChange}
          value={defaultValue}>
        </textarea>
        <label htmlFor="textarea-bx" className="textarea-placeholder">{ placeholder }</label>
    </div>
  )
}

export default PrimaryTextArea