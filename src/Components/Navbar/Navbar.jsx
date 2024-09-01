import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo"></div>
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
