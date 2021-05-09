import {useState} from 'react';

export default function Addplayer(props) {

  const [newplayer, set_newplayer]=useState("");

  function forchange(event){
    set_newplayer(event.target.value);
  }

  function handel(event) {
    event.preventDefault();
    if( newplayer.length < 2){
      return(
      alert("Please provide a name that has at least two letters")
      )
    }
    props.addNewPlayer(newplayer);
    set_newplayer("");
  }

  return (
    <div>
      <form onSubmit={handel}>
        Add a player: <input 
        value={newplayer}
        onChange={forchange}
        type="text"
        placeholder="Player's Name"/>
         <button>+ player</button>
      </form>
    </div>
  )
}