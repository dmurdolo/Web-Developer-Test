import React, { useEffect } from 'react'
import Image from 'next/image'

function Header() {
    useEffect(() => {
        const nav = document.getElementsByClassName('mobile-nav-menu')[0];
        setNavDisplay(nav, 'none');
    }, []);

    const toggleMobileMenu = () => {
        const nav = document.getElementsByClassName('mobile-nav-menu')[0];
        if (nav.style.display == 'none') {
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
            <div className="mobile-nav">
                <button>
                    <p>Menu</p>
                    <span>
                        <Image src="/images/icon-burger-menu.png" width={16} height={14} alt="Menu" onClick={toggleMobileMenu} />
                    </span>
                </button>
            </div>
            <nav className="mobile-nav-menu">
                <a href="#">Products</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="/cart"><Image src="/images/icon-basket.png" width={19.7} height={16.3} alt="Basket" /></a>
            </nav>
            <nav className="desktop-nav-menu">
                <a href="#">Products</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="/cart"><Image src="/images/icon-basket.png" width={19.7} height={16.3} alt="Basket" /></a>
            </nav>
        </header>
    );
}

export default Header