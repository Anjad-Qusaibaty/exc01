import {Link} from 'react-router-dom';
import './Navbar.css';

const navbarstyle={
    textDecoration: "none",
    color:"white",
    letterSpacing: "0.5px",
    position: "relative",
    marginRight: "3%",
    fontSize: "16px",
    verticalAlign:"middle",
    fontWeight: "bold",
}

export default function Navbar() {
  return (
    <div className="navBar">

<Link  style ={navbarstyle} to="/">Scoreboard</Link>
<Link  style ={navbarstyle} to="/likecounter">Like Counter</Link>
<Link  style ={navbarstyle} to="/awesomeanimals">Awesome Animals</Link>
<Link  style ={navbarstyle} to="/articleslistapi">Articles (API)</Link>
<Link  style ={navbarstyle} to="/articleslist">Articles (Local)</Link>
<Link  style ={navbarstyle} to="/likebutton">Like Button</Link>

    </div>
  )
}