import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor"

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/courses">
                <CourseManager/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
