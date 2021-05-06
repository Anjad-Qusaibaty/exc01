import ArticleCard from "./ArticleCard"

import { useState } from "react";


let buttonStyle={color:'red'};

export default function ArticleList() {
  let initial_state = [
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!"
    },
    {
      id: 3,
      title: "One placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders"
    }
  ]   
  const [articles, set_articles] = useState(initial_state);
  
  function show_hide() {
      if (articles.length !== 0){
      set_articles( articles => []);
      buttonStyle={color:'green'};
 
    } else{
        set_articles(initial_state);
        buttonStyle={color:'red'};
    }   
}

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button  style ={buttonStyle} onClick={show_hide}>{articles.length!==0 ? "Hide Articles (-)":"Show Articles (+)"}</button>
      {
          articles.map((article)=>
          <div key={article.id}>
            <ArticleCard title={article.title} content={article.body}/>
            </div>
          )
      }
    </div>
  );
}