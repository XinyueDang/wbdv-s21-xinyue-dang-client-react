import React, {useState, useEffect} from 'react'
import './course-editor.css'
import { Link, useParams } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import courseService from '../../services/course-service'
import ModuleList from './module-list'
import moduleReducer from '../../reducers/module-reducer'
import LessonTabs from './lesson-tabs'
import lessonReducer from '../../reducers/lesson-reducer'
import TopicPills from './topic-pills'
import topicReducer from '../../reducers/topic-reducer'
import WidgetList from '../widgets/widget-list'
import widgetReducer from '../../reducers/widget-reducer'

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
})

const store = createStore(reducer)

const CourseEditor = ({ history}) => {
    const {layout, courseId} = useParams();
    const [courseTitle, setCourseTitle] = useState("");
    useEffect(()=>{
        courseService.findCourseById(courseId)
            .then((res)=>{setCourseTitle(res.title)})
    }, []);
    return (
        <Provider store={store}>
            <div>
                <div className="wbdv-sticky-top wbdv-padding-5px">
                    <div className="row">
                        <div className="col-1 nav-btn">
                            <i
                                className="fa fa-times fa-2x"
                                onClick={() => history.push(`/courses/${layout}`)}
                            ></i>
                            &nbsp;
                            <Link to="/">
                                <i className="fas fa-2x fa-home"></i>
                            </Link>
                        </div>
                        <div className="col-3 page-header">
                            <h5>{courseTitle}</h5>
                        </div>
                        <div className="col-7">
                            <ul className="nav nav-tabs header-tab">
                                <li className="nav-item">
                                    <a
                                        aria-current="page"
                                        className="nav-link nav-tabs header-tab active"
                                        href="#"
                                    >
                                        Build
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-tabs header-tab"
                                        href="#"
                                    >
                                        Pages
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-tabs header-tab"
                                        href="#"
                                    >
                                        Theme
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-tabs header-tab"
                                        href="#"
                                    >
                                        Store
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-tabs header-tab"
                                        href="#"
                                    >
                                        Apps
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-tabs header-tab"
                                        href="#"
                                    >
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
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default CourseEditor
