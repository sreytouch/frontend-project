import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="main-sidebar">
            <ul>
                <li>a1</li>
                <li>a2</li>
                <li>a3</li>
                <li>a4</li>
            </ul> 
        </aside>
    )
}

export default Sidebar