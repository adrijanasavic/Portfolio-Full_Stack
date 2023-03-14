import React, { useState } from "react";
import "./Dashboard.css";

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
          <a href="/project">
            <button className="btn btn--primary" onClick={handleClick}>
              Add new project
            </button>
          </a>
          <a href="/qualification">
            <button className="btn btn--primary" onClick={handleClick}>
              Add new qualification
            </button>
          </a>
          <a
            href="/login"
            className="logout"
            onClick={()=> window.localStorage.clear()}
          >
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
        <h2>Dashboard</h2>
        <div className="dashboard">
          <div className="dashboard__item">
            <div className="card">
              <strong>41</strong> Foobars
            </div>
          </div>
          <div className="dashboard__item">
            <div className="card">
              <strong>81.712</strong> Doohickeys
            </div>
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
      <footer className="admin__footer">
        <ul className="ticker">
          <li className="ticker__item">A</li>
          <li className="ticker__item">D</li>
          <li className="ticker__item">R</li>
          <li className="ticker__item">I</li>
          <li className="ticker__item">J</li>
          <li className="ticker__item">A</li>
          <li className="ticker__item">N</li>
          <li className="ticker__item">A</li>
        </ul>
        <span>&copy; 2023 Adrijana</span>
      </footer>
    </div>
  );
}

export default Dashboard;
