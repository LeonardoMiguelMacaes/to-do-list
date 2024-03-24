import React from 'react'
import './PrimaryMessage.css'

interface PrimaryMessageProps {
    backgroundColor: string
    message: string
    key: number
}

//Componente responsável por mostrar mensagens quando uma tarefa é postada ou editada
//Recebe uma mensagem e uma cor

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