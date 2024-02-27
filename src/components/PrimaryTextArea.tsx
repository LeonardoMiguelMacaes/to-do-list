import React from 'react'
import './PrimaryTextArea.css'

interface PrimaryTextAreaProps {
    className: string
    placeholder: string
    height: string
  }

function PrimaryTextArea({ className, placeholder, height }: PrimaryTextAreaProps) {
  return (
    <div className="textarea-bx">
        <textarea className={className} id='primaryTextArea' cols={20} rows={10} style={{height: height}} maxLength={80}></textarea>
        <label htmlFor="textarea-bx" className="textarea-placeholder">{ placeholder }</label>
    </div>
  )
}

export default PrimaryTextArea