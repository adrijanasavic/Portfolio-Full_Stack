import React, { useState } from 'react'
import { skills } from '../../data';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import "./Skills.css"
function Skills() {

    const [loading, setLoading] = useState(false);
  return (
      <div className="skills">
          {loading ? (
              <Spinner />
          ) : (
              <div className="container">
                  {skills.map((item, index) => {
                      return (
                          <div className="card" key={index}>
                              <div className="card-image">
                                  {item.image ? (
                                      <img src={item.image} />
                                  ) : (
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_71ksAtibBFpeRLd2oFjLf6DHWIuy4EUQKaIVrlZYFRW4hAalL6wHJFxqbO20x9WYFYQ" />
                                  )}
                              </div>
                              <div className="card-text">
                                  <h2 className="card-title">{item.title}</h2>             
                              </div>
                          </div>
                      );
                  })}
              </div>
          )}
          <Footer />
      </div>
  )
}

export default Skills
