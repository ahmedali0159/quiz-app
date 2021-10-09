import "../components/Styles/App.css";
import Layout from "./Layout";
import Result from "./Pages/Result";
// import Signup from "./Pages/Signup";
// import Login from "../components/Pages/Login";
// import Quiz from "./Pages/Quiz";

function App() {
  return (
    <div className="App">
      <Layout>
          {/* <Home /> */}
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <Quiz /> */}
          <Result />
      </Layout>
    </div>
  );
}

export default App;
