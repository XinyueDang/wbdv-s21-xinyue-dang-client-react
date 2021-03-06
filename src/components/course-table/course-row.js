import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
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

  return (
      <tr>
        <td>
            {
                !editing &&
                <Link to={{pathname:`/courses/table/editor/${course._id}`, title:title}}>
                    {title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>
        <td  className="d-none d-md-table-cell">{owner}</td>
        <td className="d-none d-lg-table-cell">{lastModified}</td>
        <td>
            <i onClick={() => {deleteCourse(course); setEditing(false)}} className="fas fa-trash"></i>
            &nbsp;
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
        </td>
      </tr>
  )
}
export default CourseRow
