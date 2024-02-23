import React, { useState } from 'react'
import './PrimarySelector.css'

interface PrimarySelectorProps {
    className: string
    values: any[]
}

function PrimarySelector({ className, values }: PrimarySelectorProps) {
    const [selected, setSelected] = useState(values[0])

    const handleSelected = (event: any) => {
        setSelected(event.target.value)
    }
  return (
    <div className="selector-bx">
        <select className={className} id='selector' value={selected} onChange={handleSelected}>
            {values.map((value) => (
                <option id='selected' value={value}>{value}</option>
            ))}
        </select>
    </div>
  )
}

export default PrimarySelector