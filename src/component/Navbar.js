import {NavLink} from 'react-router-dom';
import './Navbar.css';

const navbarstyle={
    textDecoration: "none",
    color:"white",
    letterSpacing: "0.5px",
    fontSize: "16px",
    verticalAlign:"middle",
    fontWeight: "bold",
    position: "relative",
    margin:"0 10px"
}

export default function Navbar() {
  return (
    <div className="navBar">

<NavLink  exact activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/">Scoreboard</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/likecounter">Like Counter</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/awesomeanimals">Awesome Animals</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/articleslistapi">Articles (API)</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/articleslist">Articles (Local)</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/likebutton">Like Button</NavLink>
<NavLink  activeStyle ={{color:"rgb(0, 255, 204)"}} style={navbarstyle} to="/movies">Search Movies</NavLink>

    </div>
  )
}