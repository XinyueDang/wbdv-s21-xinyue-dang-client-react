import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-card.css';

const CourseCard = (
   {
       deleteCourse,
       updateCourse,
       course,
       lastModified,
       title,
       owner
   }) => {
   const [editing, setEditing] = useState(false)
   const [newTitle, setNewTitle] = useState(title)

   const saveTitle = () => {
       setEditing(false)
       const newCourse = {
            ...course,
            title: newTitle
       }
       updateCourse(newCourse)
   }
   return(
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
              <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <div>
                    {
                        !editing &&
                        <h5>
                            {title}
                        </h5>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }
                </div>
                <p className="card-text">Descriptions</p>
                <Link to={`/courses/editor/${course._id}`} className="btn btn-primary">
                    {course.title}
                </Link>
                {!editing && <i onClick={() => {setEditing(true)}} className="fas fa-edit"></i>}
                <div className="my-controls-at-top-right">
                {editing && <i onClick={() => {deleteCourse(course);setEditing(false)}} className="fas fa-trash"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
                </div>
                </div>
            </div>
          </div>
          )
  }

export default CourseCard