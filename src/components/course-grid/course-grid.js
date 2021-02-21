import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
  <div>
  <div className="row">
    <div className="col-4">
    <h5 className="d-none d-md-block">Recent Documents</h5>
    </div>
    <div className="col-4">
    <h5 className="d-none d-md-block">Owned by me</h5>
    </div>
    <div className="col-4 text-right">
          <i className="fas fa-lg fa-folder"></i>
          &nbsp;
          <i className="fas fa-lg fa-sort-alpha-up"></i>
          &nbsp;
          <Link to="/courses/table">
              <i className="fas fa-lg fa-list"></i>
          </Link>
          </div>
    </div>
    <div className="row">
    {
      courses.map((course) =>
        <CourseCard
         updateCourse={updateCourse}
         deleteCourse={deleteCourse}
         key={course._id}
         course={course}
         title={course.title}
         owner={course.owner}
         lastModified={course.lastModified}/>
      )
    }
    </div>
  </div>

export default CourseGrid