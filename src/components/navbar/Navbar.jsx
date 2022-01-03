import { Link } from 'react-router-dom'
import './Navbar.style.css'

export function Navbar() {
    return (
        <nav className="navbar-component">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/state" className="navbar-item">State</Link>
            <Link to="/reducer" className="navbar-item">Reducer</Link>
            <Link to="/effect" className="navbar-item">Effect</Link>
            <Link to="/ref" className="navbar-item">Ref</Link>
        </nav>
    )
}