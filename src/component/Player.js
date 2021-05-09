const listyle ={
  margin:"10px",
}

export default function Player(props) {

function handle1() {
  console.log("I am increasing");
  props.increase(props.id);
};
function handle2(){
  console.log("I am decreasing");
props.decrease(props.id)
};

  return (
    <li style={listyle}>
        {props.name} :score({props.score}) <button onClick={handle1}>+</button><button onClick={handle2}>-</button>
    </li>
  )
}