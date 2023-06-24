import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../../pages/Login/Login.css";
import axios from "axios";
import FileService from "../../services/fileService";
import { useNavigate, useParams } from "react-router-dom";

const dataInit = {
  title: "",
  description: "",
  link: "",
  github: "",
  skill: "",
  picture: "",
};
function FormEditProject() {
  const [data, setData] = useState(dataInit);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    getProjectById();
  }, []);

  const getProjectById = async () => {
    const response = await axios.get(`/project/${id}`);
    console.log(response);
    setData(response.data);
  };

  const updateProject = async (e) => {
    e.preventDefault();

    axios.patch(`/project/${id}`, {
      title: data.title,
      description: data.description,
      link: data.link,
      github: data.github,
      skill: data.skill,
      picture: data.picture,
    });
    navigate("/projects");
  };

  const updateData = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  };

  const updateProjectFile = (event) => {
    FileService.toBase64(event.target.files[0]).then((pictureString) => {
      const newData = { ...data };
      newData[event.target.name] = pictureString;
      setData(newData);
    });
  };

  return (
    <form className="box" onSubmit={updateProject} method="post">
      <div className="box__form">
        <h2>Edit project</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="title"
            value={data.title}
            name="title"
            placeholder=""
            required="required"
            onChange={updateData}
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
            onChange={updateData}
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
            onChange={updateData}
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
            onChange={updateData}
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
            onChange={updateData}
          />
          <label htmlFor="link">Link</label>
          <i></i>
        </div>

        <div className="box__form--input-box">
          <input
            // style={{ display:"none"}}
            type="file"
            id="picture"
            name="picture"
            placeholder=""
            onInput={updateProjectFile}
          />
          <label htmlFor="pdf" type="file">
            Picture
          </label>
          <i></i>
        </div>

        <div className="box__form--link">
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
        <input type="submit" value={"Send"} />
      </div>
    </form>
  );
}

export default FormEditProject;
