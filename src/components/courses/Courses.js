import React from "react";
import "./Courses.css";
import { courses } from "../../data";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="courses">
      <div className="courses__heading">
        <h1>Популярные курсы</h1>
        <p>
          Мы помогаем интеллектуальному развитию детей и реализации их
          творческого потенциала.
        </p>
      </div>
      <div className="courses__list">
        {courses.map((course) => (
          <div className="courses__course" key={courses.name}>
            <img src={course.pic} />
            <Link to={`/courses/${course.name}`}><button>Узнать больше</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
