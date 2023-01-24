import { Routes, Route } from "react-router-dom";
import { courses } from "../../data";
import IndividualCourse from "../../pages/course/IndividualCourse";
import Main from "../../pages/main/Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Main />} />
        {courses.map((course) => (
          <Route path={`/courses/${course.name}`} exact element={<IndividualCourse course={course} />} />
        ))}
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
