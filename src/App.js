import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout.js";
import { Container } from "./components/Styles/Container.styled";

function App() {
  return (
    <Layout>
      <Container>
        <div className="App">Blog Content goes here</div>
      </Container>
    </Layout>
  );
}

export default App;
