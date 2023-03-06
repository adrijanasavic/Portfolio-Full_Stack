import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 930 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <header className="header">
      <div className="header__content">
        <nav
          className={`${"header__content__nav"} ${menuOpen ? "isMenu" : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
            <li>
              <Link to="/qualifications" onClick={menuToggleHandler}>
                Qualifications
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={menuToggleHandler}>
                Projects
              </Link>
            </li>
          </ul>
          <Link to="/contact" onClick={menuToggleHandler}>
            <button>Contact</button>
          </Link>
        </nav>
        <div className={`${"header__content__toggle"}`}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
