import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './PrimarySelector.css'
import SelectorConverter from '../__selector-converter/SelectorConverter'

interface PrimarySelectorProps {
    className: string
    icons: { key: string; icon: IconDefinition; color: string }[]
    defaultValue: string
    selectorTitle: string
    onSelectedChange: (value: string) => void
}

function PrimarySelector({ className, icons, defaultValue, selectorTitle, onSelectedChange }: PrimarySelectorProps) {
    const converter = new SelectorConverter()
    
    //Valores passados como parâmetros para o componente
    const listedValues = icons.map(value => value.key)
    const listedIcons = icons.map(value => value.icon)
    const colors = icons.map(value => value.color)
    //--------------------------------------------------

    //Variáveis de estado do componente
    const [selectedListedValue, setSelectedListedValue] = useState(defaultValue)
    const [selectIcon, setSelectIcon] = useState(faCaretUp)
    const [iconColor, setIconColor] = useState('')

    useEffect(() => {
        setIcon()
    }, [selectedListedValue])
    
    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedListedValue(event.target.value)
        onSelectedChange(event.target.value)
    }
    
    //Função que define o ícone de acordo com o valor selecionado
    function setIcon(): IconDefinition {
        icons.map((value, index) => {
            const iconListedValue = listedValues[index]
            if(iconListedValue == selectedListedValue) {
                const selectedIconValue = listedIcons[index]
                const selectedIconColor = colors[index]
                setSelectIcon(selectedIconValue)
                setIconColor(selectedIconColor)
            }
        })

        return selectIcon
    }

return (
    <div className="selector-bx">
        <div className="selector-label">
            <p className="selector-title">{selectorTitle}</p>
        </div>
        <div className="selector-bx-wrapper">
            <div className="icon-bx" style={{backgroundColor: iconColor}}>
                <FontAwesomeIcon icon={selectIcon}/>
            </div>
            <select className={className} id='selector' value={selectedListedValue} onChange={handleSelected}>
                {listedValues.map((value) => (
                    <option id='selected' value={value}>
                        {value}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default PrimarySelector