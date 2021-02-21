import React from 'react'
import "./course-editor.css"

const CourseEditor = () =>
  <div>
      <div className="wbdv-sticky-top wbdv-padding-5px">
          <div className="row">
              <div className="col-1 nav-btn">
                  <i className="fa fa-times fa-2x"></i>
              </div>
              <div className="col-3 page-header">
                  <h5>CS5610-WebDev</h5>
              </div>
              <div className="col-7">
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <a aria-current="page" className="nav-link nav-tabs active" href="#">
                              Build
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-tabs" href="#">Pages</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-tabs" href="#">Theme</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-tabs" href="#">Store</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-tabs" href="#">Apps</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-tabs" href="#">Settings</a>
                      </li>
                  </ul>
              </div>
              <div className="col-1 add-new">
                  <i className="fa fa-plus fa-2x"></i>
              </div>
          </div>
      </div>
      <br/>
      <div className="container">
          <div className="row">
              <div className="col-4">
                  <ul className="list-group">
                      <li className="list-group-item chosen-item">
                          Module 1 - jQuery
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 2 - React
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 3 - Redux
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 4 - Native
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 5 - Angular
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 6 - Node
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                      <li className="list-group-item">
                          Module 7 - Mongo
                          <i className="pull-right fa fa-trash"></i>
                      </li>
                  </ul>
              </div>
              <div className="col-8">
                  <ul className="nav nav-pills">
                      <li className="nav-item">
                          <a aria-current="page" className="nav-link chosen-item" href="#">Topic 1</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Topic 2</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Topic 3</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Topic 4</a>
                      </li>
                      <li>
                          <a className="nav-link" href="#">
                              <i className="fa fa-plus fa"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

export default CourseEditor