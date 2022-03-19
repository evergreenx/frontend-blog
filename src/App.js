import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout.js";

import Home from "./routes/Home";
import BlogDetails from "./routes/BlogDetails";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog/:id" element={<BlogDetails />} />

          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
       </Routes>
      </BrowserRouter>
      ,{/* </Container> */}
    </Layout>
  )
}

export default App;
