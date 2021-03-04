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
    newInput:''
  }
  updateCourse = (course) => {
     courseService.updateCourse(course._id, course)
         .then(status => this.setState((prevState) => ({
           ...prevState,
           courses: prevState.courses.map(
               (c) => c._id === course._id ? course : c)
         })))
      }

  componentDidMount = () =>
      courseService.findAllCourses()
          .then(courses => {
          this.setState({...this.state, courses:courses})
        })
  addCourse = () => {
    const newCourse = {
      title: this.state.newInput,
      owner: "me",
      lastModified: "1/1/2021"
    }
    this.setState({newInput:''})
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
  handleInputChange = (event) => {
      this.setState({
        newInput: event.target.value
      });
    }

  render() {
    return(
          <div>
              <div className="headers">
                      <div className="wbdv-sticky-top wbdv-padding-5px">
                          <div className="row">
                              <div className="col-1 nav-btn">
                                  <i className="fa fa-bars fa-2x"></i>
                                  <Link to="/">
                                      <i className="fas fa-2x fa-home"></i>
                                  </Link>
                              </div>
                              <div className="col-3 page-header d-none d-sm-block">
                                  <h5>Course Manager</h5>
                              </div>
                              <div className="col-7">
                                  <input className="form-control" placeholder="New Course Title"
                                  onChange={this.handleInputChange}
                                  value={this.state.newInput}/>
                              </div>
                              <div className="col-1 add-new">
                                  <i className="fa fa-plus fa-2x" onClick={this.addCourse}></i>
                              </div>
                          </div>
                      </div>
              </div>
              <div className="courses">
                  <Route path={["/courses", "/courses/table"]} exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        addCourse={this.addCourse}
                        courses={this.state.courses}/>
                  </Route>
                  <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        addCourse={this.addCourse}
                        courses={this.state.courses}/>
                  </Route>
                  <Route path="/courses/editor" exact={true}
                        render={(props) => <CourseEditor {...props}/>}>
                  </Route>
              </div>
            </div>
    )
  }
}

export default CourseManager
