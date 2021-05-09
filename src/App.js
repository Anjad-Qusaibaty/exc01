import LikeCounter from "./component/Likecounter"
import LikeButton from "./component/LikeButton"
import AwesomeAnimals from "./component/AwesomeAnimals"
import ArticleList from "./component/ArticleList"
import ARTICLELIST_USEEFFECT from "./component/ARTICLELIST_USEEFFECT"
import Title from "./component/Title"      
import Scoreboard from "./component/Scoreboard"
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="blockb">
        <h2>Exc06: Scoreboard</h2>
        <Title/>
        <Scoreboard/>
        </div>
        <div className="blocka">
        <h2>Exc05: useEffect</h2>
        <ARTICLELIST_USEEFFECT/>
        </div>
        <div className="blockb">
        <h2>Exc04: Article List</h2>
        <ArticleList/>
        </div>
        <div className="blocka">
        <h2>Exc03: Map Awesome Animals</h2>
        <AwesomeAnimals/>
        </div>
        <div className="blockb">
        <h2>Exc02: Like/Unlike</h2>
        <LikeButton/>
        </div>
        <div className="blocka">
        <h2>Exc01: Plus, Minus, Reset</h2>
        <LikeCounter/>
        </div>
      </main>
    </div>
  );
}

export default App;
