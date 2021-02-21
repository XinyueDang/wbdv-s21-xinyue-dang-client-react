import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
  }

 render() {
     return(
       <div>
         <table className="table">
         <thead>
            <tr>
                <th>Title</th>
                <th className="d-none d-md-table-cell">Owned By</th>
                <th className="d-none d-lg-table-cell">Last Modified</th>
                <th>
                    <i className="fas fa-lg fa-folder"></i>
                    &nbsp;
                    <i className="fas fa-lg fa-sort-alpha-up"></i>
                    &nbsp;
                    <Link to="/courses/grid">
                        <i className="fas fa-lg fa-th"></i>
                    </Link>
                </th>
            </tr>
         </thead>
         <tbody>
           {
             this.props.courses.map((course) =>
               <CourseRow
                 updateCourse={this.props.updateCourse}
                 deleteCourse={this.props.deleteCourse}
                 key={course._id}
                 course={course}
                 title={course.title}
                 owner={course.owner}
                 lastModified={course.lastModified}
               />)
           }
         </tbody>
         </table>
       </div>
     )
   }
 }
