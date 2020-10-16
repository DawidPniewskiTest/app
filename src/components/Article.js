import React from "react";

const Article = (props) => {
  return (
    <article>
      <h3>{props.tittle}</h3>
      <span>{props.author}</span>
      <h5 className="textArticle">{props.text}</h5>
    </article>
  );
};

export default Article;
