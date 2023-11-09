import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
const Navigation: React.FC = () => {
  return (
    <>
      <nav className={NavbarCSS.navbar}>
        <div className={NavbarCSS.brand}>
          <Link to="/">PhishAlert</Link>
        </div>
        <ul className={NavbarCSS.items}>
          <li>
            <Link to="/" className={NavbarCSS.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={NavbarCSS.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className={NavbarCSS.link}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className={NavbarCSS.link}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
