import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout.js";
import { Container } from "./components/Styles/Container.styled";

import useSwr from "swr";
function App() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSwr("http://localhost:1337/api/posts", fetcher);
  console.log(data?.data);

  return (
    <Layout>
      <Container>
        <div className="App">Blog Content goes here</div>

        {!data && <div>Loading...</div>}
        {error && <div>Failed to load</div>}

        {data &&
          data.data.map((post) => (
            <div key={post.attributes.slug}>
              <h1>{post.attributes.title}</h1>
              <p>{post.attributes.body}</p>
            </div>
          ))}
      </Container>
    </Layout>
  );
}

export default App;
