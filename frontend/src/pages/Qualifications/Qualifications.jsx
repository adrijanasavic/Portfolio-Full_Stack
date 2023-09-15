import React, { useEffect, useState } from "react";
import "./Qualifications.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import { ReactComponent as SchoolIcon } from "./school.svg";
import Spinner from "../../components/Spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Qualifications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const client = axios.create({
    baseURL: "https://portfolio-backend-as.vercel.app/qualifications",
  });

  useEffect(() => {
    client.get().then((response) => {
      setData(response.data.reverse());
      setLoading(false);
      showBtn();
    });
    setLoading(true);
  }, []);

  const showBtn = () => {
    if (localStorage.hasOwnProperty("user")) {
      setUser(true);
    }
  }

  const deleteQualification = async (id) => {
    axios.delete(`/qualification/${id}`).then((res) => {
      setData(res.data);
      navigate("/qualifications")
    });
  };

  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="education">
      {loading ? (
        <Spinner />
      ) : (
        <VerticalTimeline>
          {data.map((element, index) => {
            return (
              <VerticalTimelineElement className="vertical-timeline-element-date"
                key={index}
                date={element.date}
                iconStyle={schoolIconStyles}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.degree}
                </h3>
                <h3 className="vertical-timeline-element-title">
                  {element.school}
                </h3>
                <p>{element.description}</p>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.keywords}
                </h5>

                {element.pdf && (
                  <div>
                    <a
                      href={element.pdf}
                      type="file"
                      // target="_blank"
                      // rel="noreferrer"
                      download={element.pdf}
                    >
                      <button className="edu_btn" rel="opener">
                        View Resume
                      </button>

                    </a>
                  </div>
                )}
                {user && (
                  <div>
                    <button className="edu_btn"><Link to={`/qualification/${element._id}`}>Edit</Link></button>
                    <button className="edu_btn" ><Link onClick={() => deleteQualification(element._id)} > Delete</Link></button>
                  </div>
               )}
              </VerticalTimelineElement>

            );
          })}


        </VerticalTimeline>
      )}
      <Footer/>
    </div>
  );
}
export default Qualifications;
