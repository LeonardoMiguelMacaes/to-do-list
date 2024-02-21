import React from 'react'
import img from '../assets/to-do-list-img.png'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
        <div className="pseudo-element"></div>
        <div className="landing-image">
            <img src={img} alt="to-do-list" />
        </div>
        <div className="landing-title">
            <h1 className="landing-title-text">Manage your tasks with To-Do-List</h1>
            <p className="landing-text">Increase your productivity today. Manage your tasks and save time with few clicks</p>
        </div>
    </div>
  )
}

export default Landing