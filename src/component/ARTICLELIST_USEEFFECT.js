import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react";
import axios from "axios";


let buttonStyle={color:'red'};


export default function ARTICLELIST_USEEFFECT() {
  


  const [articles, set_articles] = useState([]);

async function fetchData() {
            // console.log("Gonna fetch some data!");    
    try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    
    // console.log("Got back:",response.data[0]);

    set_articles(response.data);

    } catch (error){
        console.log("error test:", error.message);
    }

};
useEffect(()=>{
  fetchData()},[]);

  
  function show_hide() {
      if (articles.length !== 0){
      set_articles([]);
      buttonStyle={color:'green'};
 
    } else{
        fetchData()
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



