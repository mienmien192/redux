import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Navbar from './components/Layout/Navbar';
import Redux from './components/Redux/Redux';
import { Footer } from './components/Layout/Footer';
// import StudentList  from "./components/studentApp/StudentList";
//import StudentList  from "./components/studentApp2/StudentList";
import Calculator from './components/Calculator/Calculator';
import TaskUseReducer from './components/hook/TaskUseReducer';
import WeatherApp from './components/WeatherApp/WeatherApp';
import Count from './components/Redux/redux/Count';
function App() {
    return ( 
    <>
   
    <Router> 
        <Navbar/>
        <Switch>
            <Route exact path="/" component={WeatherApp} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/reducer" component={TaskUseReducer} />
            <Route exact path="/redux" component={Redux} />
            <Route exact path="/count" component={Count} />

            <Route component={PageNotFound} />

        </Switch>
       
        </Router>
        </>
    );
}

export default App;