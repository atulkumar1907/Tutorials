import { NavLink } from'react-router-dom'
import './Navbar.css'
import { useAuth } from './auth'

export function Navbar(){

    const NavLinkStyle =({isActive})=>{
        return {fontWeight : isActive? 'bold' : '500'}
    }
    const auth = useAuth()

    return (
        <nav>
            <NavLink style={NavLinkStyle} className='link' to="/">
                Home
                </NavLink >
            <NavLink style={NavLinkStyle} className='link' to="about">
                About
                </NavLink>
            <NavLink style={NavLinkStyle} className='link' to="products">
                Products
                </NavLink>
            <NavLink style={NavLinkStyle} className='link' to="profile">
                Profile
                </NavLink>
            {
                !auth.user &&(
                    <NavLink style={NavLinkStyle} className='link' to="login">
                    Login
                    </NavLink>
                )
            }
        </nav>
    )
}