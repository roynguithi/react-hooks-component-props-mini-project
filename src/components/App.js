import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";
import blogData  from "../data/blog.js"; 

function App() {
  const { name, about, image, articles } = blogData;

  return (
    <div>
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
