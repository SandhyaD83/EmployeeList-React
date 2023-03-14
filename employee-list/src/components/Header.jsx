import React from 'react'

function Header(props) {
    return (
        <div className="header">
            <h3>{props.txt}</h3>
        </div>
    )
}

export default Header