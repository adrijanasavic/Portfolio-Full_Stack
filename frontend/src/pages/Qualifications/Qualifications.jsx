import React, { useEffect, useState } from "react";
import "./Qualifications.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import { ReactComponent as SchoolIcon } from "./school.svg";

function Qualifications() {
  const [data, setData] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:4000/qualifications",
  });

  useEffect(() => {
    client.get().then((response) => {
      setData(response.data);
    });
  }, []);

  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="education">
      <VerticalTimeline>
        {data.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.degree}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.school}
              </h5>
              <p id="description">{element.description}</p>
              <h5 className="vertical-timeline-element-subtitle">
                {element.keywords}
              </h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default Qualifications;
