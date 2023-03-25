import './menu.css'
import logo from '../assets/logo.png'

export const Menu = () => {
  return (
    <div className="nav-container" >
        <img src={logo} />
        <div className="nav-menu" >
            <a href="/" className="nav-link" >HOME</a>
            <a href="/membros" className="nav-link" >MEMBROS</a>
        </div>
    </div>
  );
};
