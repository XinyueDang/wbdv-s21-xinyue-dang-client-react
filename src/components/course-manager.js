import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import "./course-manager.css";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: [],
    qwe: 123,
    sdf: 456
  }
  updateCourse = (course) => {
     console.log(course)
     courseService.updateCourse(course._id, course)
         .then(status => this.setState((prevState) => ({
           ...prevState,
           courses: prevState.courses.map(
               (c) => c._id === course._id ? course : c)
         })))
      }
  componentDidMount = () =>
      courseService.findAllCourses()
          .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }
    courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                  ...prevState,
                  courses: [
                      ...prevState.courses,
                      course
                  ]
                })))
  }

  deleteCourse = (courseToDelete) => {
      courseService.deleteCourse(courseToDelete._id)
          .then(status => {
            this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.filter
                  (course => course !== courseToDelete)
            }))
          })
    }

  render() {
    return(
          <div>
            <Link to="/">
              <i className="fas fa-2x fa-home float-right"></i>
            </Link>
              <h1>Course Manager</h1>
              <button onClick={this.addCourse}>Add Course</button>
              <Route path="/courses/table">
                <CourseTable
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
              </Route>
              <Route path="/courses/grid">
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
              </Route>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
    )
  }
}

export default CourseManager
