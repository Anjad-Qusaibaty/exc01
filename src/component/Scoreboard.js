import {useState} from "react";
import Player from "./Player"
import Addplayer from "./AddPlayerForm"
import Title from "./Title"

/*------vvv This is for styling vvv------ */
const styleoflist={
    listStyle:"none",
    textAlign:"center",
}

const listfunctions={
    display: "flex",
    justifyContent:"center",
    
}
const buttonsForList={
    border: "none",
    backgroundColor:"DarkTurquoise",
    color: "white",
    fontWeight: "bold",
    borderRadius:"25px",
    padding: "10px",
    marginLeft: "20px",

};

/*------^^^ This is for styling ^^^------ */

export default function Scoreboard(props) {
    const initial_state= [
        { id: 1, name: "My odd neighbour", score: 3 },
        { id: 2, name: "Anjad", score: 14 },
        { id: 3, name: "Abdo", score: 16 },
        { id: 4, name: "Zorro", score: 20 },
        { id: 5, name: "Najada", score: 18 },]

/*-------vvv This section handles updating the score of the players vvv-------*/
    const [allplayers , set_players]=useState(initial_state);
    
    
    function increment(id) {
        
        console.log("I am the the incrementing one!",id);
        const updatedArrayIncrement = allplayers.map( aplayer=>{
            
            if (aplayer.id === id){
                return {
                    ...aplayer,
                    score: aplayer.score+1}
                    
                } else {return aplayer}})
                console.log(updatedArrayIncrement);
                set_players(updatedArrayIncrement);
            }
    function decrement(id) {
        console.log("I am the decrementing one!",id);
        const updatedArrayDecrement = allplayers.map( aplayer=>{
            if (aplayer.id === id && aplayer.score !== 0){
                return{...aplayer, score:aplayer.score-1}
            } else { return aplayer}})
            set_players(updatedArrayDecrement);
    }
/*-------^^^ This section handles updating the score of the players ^^^-------*/

/*-------vvv This section handles sorting the players vvv-------*/
            const [sort_by, set_sort_by] = useState("name");
        
            const sorted_players_name = [...allplayers].sort((a,b) => (a.name>b.name)? 1 : -1);
            
            const sorted_players_score = [...allplayers].sort((a,b)=>
            (a.score>b.score)? -1 : 1);
            
            const sorting = (sort_by === "name") ? sorted_players_name : sorted_players_score;
            
            const change_sorting = (event) => {
                console.log("new sort order:", event.target.value);
                set_sort_by(event.target.value);
                
              };
            
/*-------^^^ This section handles sorting the players ^^^-------*/ 

/*-------vvv This section handles reseting the score vvv-------*/
function reset(){
    const resetArray = allplayers.map( (aplayer) => {
        return{...aplayer, score:0}
    }

    )
    set_players(resetArray);
}
/*-------^^^ This section handles reseting the score ^^^-------*/ 


/*-------vvv This section handles randomizing the score vvv-------*/
function random(){
    const randomArray = allplayers.map( (aplayer) => {
        return{...aplayer, score:aplayer.score=Math.round(Math.random()*100)}
    }

    )
    set_players(randomArray);
}
/*-------^^^ This section handles randomizing the score ^^^-------*/

/*-------vvv This section handles adding a new player vvv-------*/
function aNewOne(newplayer){

    const findnewplayer = allplayers.find(aplayer => aplayer.name === newplayer);

    if (findnewplayer !== undefined){
        return(
            alert("This player already exsits. Please enter a unique name")
        )
    }

    const newplayeradded= {id: allplayers.length +1 , name: newplayer, score: 0}
    // console.log(newplayeradded);
    const arryPlusOnePlayer = [...allplayers,newplayeradded]

    set_players(arryPlusOnePlayer);    
}

/*-------^^^ This section handles adding a new player ^^^-------*/

            return (
    <div>
        <Title/>
        <div style={listfunctions}>
            <p>Sort:</p>
            <select style={buttonsForList} onChange={change_sorting} value={sort_by}>
                <option value="name">By Name</option>
                <option value="score" >By Score </option>
            </select>
            <button style={buttonsForList} onClick={reset}>Reset Scores</button>
            <button style={buttonsForList} onClick={random}>Randomize Scores</button>
        </div>

        <ul style={styleoflist}>
        {sorting.map((aplayer)=> { 
            return (<Player 
                key ={aplayer.id}
                id={aplayer.id}
                name={aplayer.name}
                score ={aplayer.score}
                increase={increment}
                decrease = {decrement}/>)
        })}

        <Addplayer
        addNewPlayer={aNewOne}/>
        </ul>
    </div>
  )
}