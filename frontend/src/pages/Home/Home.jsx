import React, { useEffect, useState } from "react";
import axios from "axios";
import Typical from "react-typical";
import cv from "./../../pdf/Adrijana_Savic_CV.pdf";
import "./Home.css";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = axios.create({
    baseURL: "https://portfolio-backend-as.vercel.app/",
  });

  useEffect(() => {
    client.get().then((response) => {
      setData(response.data);
      setLoading(false);
    });
    setLoading(true);
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Spinner/>
      ) : (
          <div className="home-container">
            {data.map((item, index) => {
              return (
                <div className="profile-container" key={index}>
                  <div className="profile">
                    <div className="profile-details">
                      <div className="profile-details-name">
                        <span className="primary-text">
                          <h3> Hello, I'm </h3>
                          <span className="highlighted-text">
                            <h3>
                              <p>{item.name}</p>
                            </h3>
                          </span>
                        </span>
                      </div>

                      <div className="profile-details-role">
                        <span className="primary-text">
                          {" "}
                          <h1>
                            <Typical
                              loop={Infinity}
                              steps={[
                                "Web Developer ",
                                1000,
                                "Adroid Developer ",
                                1000,
                              ]}
                            />
                          </h1>
                        </span>
                        <span className="profile-role-tagline">
                          <h4>
                            <p>{item.description}</p>
                          </h4>
                        </span>
                      </div>

                      <div className="profile-details-cv">
                        <a href={cv} target="_blank" rel="noopener noreferrer">
                          <button className=" btn-get">View Resume</button>
                        </a>
                      </div>
                    </div>

                    <div className="profile-picture">
                      <div className="profile-picture-background"></div>
                      <div className="cols-icon">
                        <a href="https://www.linkedin.com/in/adrijana-savi%C4%87-50249176/">
                          <i
                            className="fa fa-linkedin"
                            style={{ fontSize: "36px" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="https://github.com/adrijanasavic">
                          <i
                            className="fa fa-github"
                            style={{ fontSize: "36px" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <Footer />
          </div>
      )}

    </div>
  );
}

export default Home;
