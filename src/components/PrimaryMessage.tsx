import React from 'react'
import './PrimaryMessage.css'

interface PrimaryMessageProps {
    backgroundColor: string
    message: string
    key: number
}

function PrimaryMessage({ backgroundColor, message, key }: PrimaryMessageProps) {
  return (
    <div className="message-bx" key={key} style={{backgroundColor: backgroundColor}}>
        <p className="message">
            {message}
        </p>
    </div>
  )
}

export default PrimaryMessage