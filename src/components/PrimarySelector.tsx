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
    
    const selectValues = icons.map(value => value.key)
    const iconValues = icons.map(value => value.icon)
    const colorValues = icons.map(value => value.color)
    const [selected, setSelected] = useState('High')
    const [selectIcon, setSelectIcon] = useState(faCaretUp)
    const [iconColor, setIconColor] = useState('var(--primary-green)')

    useEffect(() => {
        setSelected(defaultValue)
    }, [defaultValue])
    
    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value)
        onSelectedChange(event.target.value)
    }

    useEffect(() => {
        setIcon()
    }, [selected])
    
    function setIcon(): IconDefinition {
        icons.map((value, index) => {
            const iconKey = selectValues[index]
            if(iconKey == selected) {
                const selectedIconValue = iconValues[index]
                const selectedIconColor = colorValues[index]
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
            <select className={className} id='selector' value={selected} onChange={handleSelected}>
                {selectValues.map((value) => (
                    <option id='selected' value={value}>
                        {value}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default PrimarySelector