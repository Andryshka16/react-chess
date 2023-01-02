import React from 'react'
import { NavLink } from 'react-router-dom'

const options = [
    {
        link: '/createGame',
        name: 'Create game'
    },
    {
        link: '/joinGame',
        name: 'Join game'
    }
]

export default function Navbar() {
    return (
        <nav>
            <NavLink to={'/'} className="title">
                <h1>Lapchess</h1>
            </NavLink>

            <div className="options">
                {options.map(({ link, name }) => (
                    <NavLink to={link} className="option" key={link}>
                        <h2>{name}</h2>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
