import Header from "./Header";
import PetList from "./PetList";

function App() {

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    }
]

  return (
    <div className="app">
      <Header />
      <PetList pets={pets}/>
    </div>
  );
}

export default App;