

const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor"
  ];

  const styleofList = 
  {listStyle:'none'};



export default function AwesomeAnimals() {

  return (
    <ul style={styleofList}>
      {
        animals.map((animal,index)=>{
          return(<li key={index}>Awesomness level {index+1} : {animal}</li>)
        })
      }
    </ul>
  );
  }