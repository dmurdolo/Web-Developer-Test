import Image from 'next/image'

function Header() {
    return (
        <header>
            <Image src="/images/app-logo.png" width={59.4} height={19} alt="App logo" />
            <nav>
                <a href="#">Products</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="#"><Image src="/images/icon-basket.png" width={19.7} height={16.3} alt="Basket" /></a>
            </nav>
        </header>
    );
}

export default Header