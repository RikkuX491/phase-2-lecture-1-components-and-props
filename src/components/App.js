import Header from "./Header";
import PetList from "./PetList";

// App() is a Component
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
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  // The code within this return statement (lines 47 - 51) uses JSX syntax
  return (
    <div className="app">
      <Header />
      {/* pets={pets} -> pets on the left-hand side of the '=' sign is the name of the prop. pets within the {} refers to the pets variable. The value of the pets variable is assigned to be the value of the pets prop */}
      <PetList pets={pets} />
    </div>
  );
}

export default App;