import React from 'react'
import './course-editor.css'
import { Link, Route } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ModuleList from './module-list'
import moduleReducer from '../../reducers/module-reducer'
import LessonTabs from './lesson-tabs'
import lessonReducer from '../../reducers/lesson-reducer'
import TopicPills from './topic-pills'
import topicReducer from '../../reducers/topic-reducer'

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
})

const store = createStore(reducer)

const CourseEditor = ({ history }) => (
    <Provider store={store}>
        <div>
            <div className="wbdv-sticky-top wbdv-padding-5px">
                <div className="row">
                    <div className="col-1 nav-btn">
                        <i
                            className="fa fa-times fa-2x"
                            onClick={() => history.goBack()}
                        ></i>
                        &nbsp;
                        <Link to="/">
                            <i className="fas fa-2x fa-home"></i>
                        </Link>
                    </div>
                    <div className="col-3 page-header">
                        <h5>CS5610-WebDev</h5>
                    </div>
                    <div className="col-7">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a
                                    aria-current="page"
                                    className="nav-link nav-tabs active"
                                    href="#"
                                >
                                    Build
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-tabs" href="#">
                                    Pages
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-tabs" href="#">
                                    Theme
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-tabs" href="#">
                                    Store
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-tabs" href="#">
                                    Apps
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-tabs" href="#">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 add-new">
                        <i className="fa fa-plus fa-2x"></i>
                    </div>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col-4">
                    <ModuleList />
                </div>
                <div className="col-8">
                    <LessonTabs />
                    <TopicPills />
                </div>
            </div>
        </div>
    </Provider>
)
export default CourseEditor
