// src/Pages/Navigation.jsx
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer'; // we'll create this

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/projecten">Projecten</Link></li>
          <li><Link to="/about">Over mij</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Outlet />

      <Footer /> {/* Footer will appear on all pages */}
    </div>
  );
};

export default Navigation;