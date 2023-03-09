import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

export default function Projects() {
  const [data, setData] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost:4000/projects",
  });
  useEffect(() => {
    client.get().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-image">
              <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">{item.skill}</p>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-body">{item.description}</p>
            </div>
            <div class="card-link">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to live site"
              >
                <i className="fas fa-link" title="Go to live site" />
              </a>
            </div>
            <div class="card-git">
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
  );
}
