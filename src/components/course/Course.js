import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

function Course({ course }) {
  return (
    <div className="course">
      <div className="course__text">
        <div className="course__desc">
          {course.p1 ? <p>{course.p1}</p> : null}
          {course.p2 ? <p>{course.p2}</p> : null}
          {course.p3 ? <p>{course.p3}</p> : null}
          {course.p4 ? <p>{course.p4}</p> : null}
          {course.ul ? <ul>{course.ul}</ul> : null}
          {course.li1 ? <li>{course.li1}</li> : null}
          {course.li2 ? <li>{course.li2}</li> : null}
          {course.li3 ? <li>{course.li3}</li> : null}
          {course.li4 ? <li>{course.li4}</li> : null}
          {course.pLast ? <p>{course.pLast}</p> : null}
          <p>Где: ул. Юности, д. 38</p>
          <a href="tel:89176048821">
            <button>Записаться</button>
          </a>
        </div>
        <img src={course.pic} />
      </div>
      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
}

export default Course;
