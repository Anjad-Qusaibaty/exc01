import { useState } from "react";

let catStyle = {};

export default function LikeButton() {

    const initial_state = "Like this";
    const [Like, Set_Like] = useState(initial_state);

    function Liked_Unliked(){
        if (Like === initial_state){
        Set_Like(Like => "You've liked this. Click to unlike");
        catStyle = {color:'coral',};
        } else {
            Set_Like(Like => initial_state);
            catStyle = {};
        }
    }
    // console.log("A render!");

    // useEffect(() => {
    //   console.log("The useEffect action!");
    // }, []);

  return (
    <div>
    <p>Cats cats cats.. loads of cats!</p>
    <p style={catStyle}>/ᐠ｡ꞈ｡ᐟ\ /ᐠ｡ꞈ｡ᐟ\ /ᐠ｡ꞈ｡ᐟ\</p>
    <button onClick={Liked_Unliked} style={catStyle}>{Like}</button>
    </div>
  )
}


