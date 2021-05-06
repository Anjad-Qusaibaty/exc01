import LikeCounter from "./component/Likecounter"
import LikeButton from "./component/LikeButton"
import AwesomeAnimals from "./component/AwesomeAnimals"
import ArticleList from "./component/ArticleList"
import './App.css';




function App() {
  return (
    <div className="App">
      <main>
        <h2>Exc01: Plus, Minus, Reset</h2>
        <LikeCounter/>
        <h2>Exc02: Like/Unlike</h2>
        <LikeButton/>
        <h2>Exc03: Map Awesome Animals</h2>
        <AwesomeAnimals/>
        <h2>Exc04: Article List</h2>
        <ArticleList/>

      </main>
    </div>
  );
}

export default App;
