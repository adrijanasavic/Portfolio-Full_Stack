import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FileService from "../../services/fileService";

const dataInit = {
  date: "",
  degree: "",
  school: "",
  description: "",
  keywords: "",
  pdf: "",
}
function FormAddQualification() {

  const [data, setData] = useState(dataInit);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };
  const handleInputFile = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.files[0];
    setData(newData);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    FileService.toBase64(data.pdf).then((pdfString) => {
      axios
        .post("https://portfolio-backend-as.vercel.app/qualification", {
        date: data.date,
        degree: data.degree,
        school: data.school,
        description: data.description,
        keywords: data.keywords,
        pdf: pdfString,
      })
      .then((res) => {
        console.log(res.data);
      });
    })
    setData(dataInit);
    navigate("/qualifications")
  };

  return (
    <form className="box" onSubmit={handleSubmit} method="post">
      <div className="box__form">
        <h2>New qualification</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="degree"
            value={data.degree}
            name="degree"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Degree</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="school"
            value={data.school}
            name="school"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">School</label>
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
            id="keywords"
            value={data.keywords}
            name="keywords"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="link">Keywords</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="date"
            value={data.date}
            name="date"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="title">Date</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            // style={{ display:"none"}}
            type="file"
            id="pdf"
            name="pdf"
            placeholder=""
            onInput={handleInputFile}
          />
          <label htmlFor="pdf" type="file" >PDF</label>
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
export default FormAddQualification;





