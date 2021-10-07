import "../components/Styles/App.css";
import Layout from "./Layout";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Layout>
          {/* <Home /> */}
          <Signup />
      </Layout>
    </div>
  );
}

export default App;
