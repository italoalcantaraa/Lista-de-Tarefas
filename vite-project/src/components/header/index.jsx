import logo from '../../assets/images/LogoPortifolio.png';

import './style.css';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} />
            <p>Portifolio.me</p>
        </div>
    );
}