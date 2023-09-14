import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FileService from '../../services/fileService';
import { Link } from "react-router-dom";

const dataInit = {
  date: "",
  degree: "",
  school: "",
  description: "",
  keywords: "",
  pdf: ""
};

function FormEditQualification() {
  const [data, setData] = useState(dataInit);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getQualificationById();
  }, [])

  const getQualificationById = async () => {
    const response = await axios.get(`/qualification/${id}`);
    console.log(response);
    setData(response.data);
  }

  const updateQualification = async (e) => {
    e.preventDefault();

    axios.patch(`/qualification/${id}`, {
      data: data.date,
      degree: data.degree,
      school: data.school,
      description: data.description,
      keywords: data.keywords,
      pdf: data.pdf
    });
    navigate("/qualifications");
  }

  const updateData = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }

  const updateQualificationFile = (event) => {
    FileService.toBase64(event.target.files[0]).then((pdfString) => {
      const newData = { ...data };
      newData[event.target.name] = pdfString;
      setData(newData);
    })
  }
  return (
    <form className="box" onSubmit={updateQualification} method="post">
      <div className="box__form">
        <h2>Edit qualification</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="degree"
            value={data.degree}
            name="degree"
            placeholder=""
            required="required"
            onChange={updateData}
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
            onChange={updateData}
          />
          <label htmlFor="title">School</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="description"
            value={data.description}
            name="description"
            placeholder=""
            onChange={updateData}
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
            onChange={updateData}
          />
          <label htmlFor="description">keywords</label>
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
            onChange={updateData}
          />
          <label htmlFor="description">Date</label>
          <i></i>
        </div>
      

        <div className="box__form--input-box">
          <input
            type="file"
            id="pdf"
            name="pdf"
            placeholder=""
            onInput={updateQualificationFile}
          />
          <label htmlFor="pdf" type="file">
            PDF
          </label>
          <i></i>
        </div>

        <div className="box__form--link">
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
        <input type="submit" value={"Send"} />
      </div>
    </form>
  )
}

export default FormEditQualification
