import "./Navbar.css";
import logo from "../../Images/KrisAcziV4.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src={logo} alt="copmany's logo" />
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li>OFFER</li>
            <li>MY PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
