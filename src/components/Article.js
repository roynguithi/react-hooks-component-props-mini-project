import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const renderReadTime = () => {
    if (minutesToRead !== undefined) {
      const coffeeEmoji = "☕️";
      const bentoBoxEmoji = "🍱";
      let emoji = "";
      let time = minutesToRead;

      if (time < 30) {
        emoji = coffeeEmoji.repeat(Math.ceil(time / 5));
        return `${emoji} ${time} min read`;
      } else {
        emoji = bentoBoxEmoji.repeat(Math.ceil(time / 10));
        return `${emoji} ${time} min read`;
      }
    }
    return null;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadTime()}</p>
    </article>
  );
}

export default Article;