import React, { useEffect } from 'react'
import Image from 'next/image'

function Header() {
    const toggleMobileMenu = () => {
        const nav = document.getElementById('nav-menu');
        if (nav.style.display == 'none' || nav.style.display == '') {
            
            setNavDisplay(nav, 'block');
        } else {
            setNavDisplay(nav, 'none');
        }
    }

    const setNavDisplay = (nav, value) => {
        nav.style.display = value;
    }

    return (
        <header>
            <a href="/" alt="Home">
                <Image src="/images/app-logo.png" width={59.4} height={19} alt="App logo" />
            </a>
            <div id="mobile-nav">
                <button onClick={toggleMobileMenu}>
                    <p>Menu</p>
                    <span>
                        <Image src="/images/icon-burger-menu.png" width={16} height={14} alt="Menu" />
                    </span>
                </button>
            </div>
            <nav id="nav-menu">
                <a href="#">Products</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="/cart"><Image src="/images/icon-basket.png" width={19.7} height={16.3} alt="Basket" /></a>
            </nav>
        </header>
    );
}

export default Header