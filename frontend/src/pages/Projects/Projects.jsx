import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import { projects } from "../../data";

export default function Projects() {

  const [loading, setLoading] = useState(false);

  return (
    <div className="projects">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
            {projects.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-image">
                  {item.picture ? (
                    <img src={item.picture} />
                  ) : (
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_71ksAtibBFpeRLd2oFjLf6DHWIuy4EUQKaIVrlZYFRW4hAalL6wHJFxqbO20x9WYFYQ" />
                  )}
                </div>
                <div className="card-text">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-meal-type">{item.skill}</p>
                  <p className="card-body">{item.description}</p>
                </div>
                <div className="card-link">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to live site"
                  >
                    <i className="fas fa-link" title="Go to live site" />
                  </a>
                </div>
                <div className="card-git">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to github"
                  >
                    {" "}
                    <i className="fab fa-github" title="Go to github" />
                  </a>
                </div>
              
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}
