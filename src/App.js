import LikeCounter from "./component/Likecounter"
import LikeButton from "./component/LikeButton"
import AwesomeAnimals from "./component/AwesomeAnimals"
import ArticleList from "./component/ArticleList"
import ARTICLELIST_USEEFFECT from "./component/ARTICLELIST_USEEFFECT"   
import Scoreboard from "./component/Scoreboard"
import './App.css';
import {Switch , Route} from 'react-router-dom'
import Navbar from './component/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
        <Route path="/likecounter" component={LikeCounter} />
        <Route path="/likebutton" component={LikeButton} />
        <Route path="/awesomeanimals" component={AwesomeAnimals} />
        <Route path="/articleslistapi" component={ARTICLELIST_USEEFFECT} />
        <Route path="/articleslist" component={ArticleList} />
        <Route path="/" component={Scoreboard} />

        </Switch>


    </div>
  );
}

export default App;
