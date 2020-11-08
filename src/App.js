import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import CoursesList from "./components/courses-list.component";
import Schedule from "./components/schedule.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={CoursesList} />
      <Route path="/schedule" component={Schedule} />
      
      </div>
    </Router>
  );
}

export default App;
