import React from "react";
import Article from "./Article"; // Ensure the path to Article is correct

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id} // Unique key for each Article
          title={article.title}
          date={article.date}
          preview={article.preview}
          minutesToRead={article.minutesToRead} // Optional prop
        />
      ))}
    </main>
  );
}

export default ArticleList;