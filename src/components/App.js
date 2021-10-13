import "../components/Styles/App.css";
import Layout from "./Layout";
import Home from "../components/Pages/Home";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import Login from "../components/Pages/Login";
import Quiz from "./Pages/Quiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PublicRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/quiz" component={Quiz} />
              <PrivateRoute exact path="/result" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
  );
}

export default App;
