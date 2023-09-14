import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../pages/Login/Login.css";
import axios from "axios";
import FileService from "../../services/fileService";

const dataInit = {
  title: "",
  description: "",
  link: "",
  github: "",
  skill: "",
  picture: "",
};
function FormAddProject() {

  const [data, setData] = useState(dataInit);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  // dodala
  const handleInputFile = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.files[0];
    setData(newData);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    FileService.toBase64(data.picture).then((picture) => {
    axios
      .post("http://localhost:4000/project", {
        title: data.title,
        description: data.description,
        link: data.link,
        github: data.github,
        skill: data.skill,
        picture: picture,
      })
      .then((res) => {
        console.log(res.data);
      });
  })
    setData(dataInit);
    navigate("/projects")
  };

  return (
    <form className="box" onSubmit={handleSubmit} method="post">
      <div className="box__form">
        <h2>New project</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="title"
            value={data.title}
            name="title"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="title">Title</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="description"
            value={data.description}
            name="description"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="github"
            value={data.github}
            name="github"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Github</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="skill"
            value={data.skill}
            name="skill"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Skill</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="link"
            value={data.link}
            name="link"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="link">Link</label>
          <i></i>
        </div>

        <div className="box__form--input-box">
          <input
            type="file"
            id="picture"
            name="picture"
            placeholder=""
            onInput={handleInputFile}
          />
          <label htmlFor="pdf" type="file" >Picture</label>
          <i></i>
        </div>

        <div className="box__form--link">
          <Link to="/dashboard">Back to Dashboarde</Link>
        </div>
        <input type="submit" value={"Send"} />
      </div>
    </form>
  );
}

export default FormAddProject;
