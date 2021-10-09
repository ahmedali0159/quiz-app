import "../components/Styles/App.css";
import Layout from "./Layout";
import Home from "../components/Pages/Home";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import Login from "../components/Pages/Login";
import Quiz from "./Pages/Quiz";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/signup" component={Signup} />
          <Route  path="/login" component={Login} />
          <Route  path="/quiz" component={Quiz} />
          <Route  path="/result" component={Result} />
        </Switch>  
        </AuthProvider>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
