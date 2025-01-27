import "./Navbar.css";
import logo from "../../Images/KrisAcziV4.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <a href="#MAIN">
            <img className="logo" src={logo} alt="copmany's logo" />
          </a>
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li>
              <a className="menuLinks" href="#OFFER">
                OFFER
              </a>
            </li>
            <li>
              <a className="menuLinks" href="#MY PROJECTS">
                MY PROJECTS
              </a>
            </li>
            <li>
              <a className="menuLinks" href="#CONTACT">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
