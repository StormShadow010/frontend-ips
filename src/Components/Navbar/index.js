import {Link} from 'react-router-dom'
import logo from '../../Images/logo.png'
import './style.scss'

export const Navbar = () => {
    return (
        <div className='NavbarContainerComponent'>
            <div className='LogoNavComponent'>
                <img src={logo} width="320" alt="logo"/>
            </div>
            <div className='NavMenuContainerComponent' >
                <Link className='NavLink' to='/home'>
                    <li className='NavItemComponent'>Podcast</li>
                </Link>
                <Link className='NavLink'  to='/'>
                    <li className='NavItemComponent'>Productos</li>
                </Link>
                <Link className='NavLink' to='/home'>
                    <li className='NavItemComponent'>Servicios</li>
                </Link>
                <Link className='NavLink' to='/'>
                    <li className='NavItemComponent'>Equipo Cinndet</li>
                </Link>
                <Link className='NavLink' to='/home'>
                    <li className='NavItemComponent'>Moodle</li>
                </Link>
            </div>
        </div>
    )
}