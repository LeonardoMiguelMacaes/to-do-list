import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import './PrimarySelector.css'

interface PrimarySelectorProps {
    className: string
    icons: { key: string; icon: IconDefinition; color: string }[]
    defaultValue: string
    defaultIcon: IconDefinition
    defaultIconColor: string
    selectorTitle: string
    onSelectorChange: (value: number) => void
}

function PrimarySelector({ className, icons, defaultValue, defaultIcon, defaultIconColor, selectorTitle, onSelectorChange }: PrimarySelectorProps) {
    const selectValues = icons.map(value => value.key)
    const iconValues = icons.map(value => value.icon)
    const colorValues = icons.map(value => value.color)
    const [selected, setSelected] = useState(defaultValue)
    const [selectIcon, setSelectIcon] = useState(defaultIcon)
    const [iconColor, setIconColor] = useState(defaultIconColor)
    
    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value)
        onSelectorChange(definePriority(event.target.value))
    }

    function definePriority(priority: string) {
        if(priority == 'High') {
            return 1
        }
        else if(priority == 'Medium') {
            return 2
        }
        else {
            return 3
        }
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