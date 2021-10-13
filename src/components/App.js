import "../components/Styles/App.css";
import Layout from "./Layout";
import Home from "../components/Pages/Home";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import Login from "../components/Pages/Login";
import Quiz from "./Pages/Quiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/result" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
  );
}

export default App;
