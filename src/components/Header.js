import React from 'react'
import './Header.css'
import { BiCoinStack } from 'react-icons/bi'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"><span style={{ marginRight: '4px' }}>What</span>Exchange<BiCoinStack style={{ marginLeft: '4px' }} /></h1>
            <h4 className="about">About</h4>
        </div>
    )
}

export default Header
