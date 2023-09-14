import React, { useState } from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="admin">
      <header className="admin__header">
        <a href="/" className="logo">
          <h1>Adrijana</h1>
        </a>
        <div className="toolbar">

          <a
            href="/login"
            className="logout"
            onClick={() => window.localStorage.clear()}>
            Log Out
          </a>
        </div>
      </header>
      <nav className="admin__nav">
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/">
              About me
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/qualifications">
              Qualification
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <main className="admin__main">
        <div className="dashboard">
          <div className="dashboard__item">
            <a href="/project">
              <div className="card">
                <div onClick={handleClick}>
                  Add new project
                </div>
              </div>
            </a>
          </div>
          <div className="dashboard__item">
            <a href="/qualification">
              <div className="card">
                <div className="" onClick={handleClick}>
                  Add new qualification
                </div>
              </div>
          </a>
          </div>
          <div className="dashboard__item dashboard__item--full">
            <div className="card">
              <img src="https://imgs.xkcd.com/comics/decline.png" alt="" />
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">A</div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">B</div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">C</div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">D</div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Dashboard;
