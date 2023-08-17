import { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  return (
    <nav>
      <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" className="nav__logo" />

      {/* <img src = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" className="nav__avatar" /> */}
    </nav>
  );
};

export default Navbar;
