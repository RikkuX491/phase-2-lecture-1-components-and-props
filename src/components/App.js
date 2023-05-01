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

  return (
    <div className="app">
      <header>
        <h1>
          Flatapets
          <span className="logo" role="img">
            🐈
          </span>
        </h1>
      </header>
      <main>
          <ul className="pet-list">{
            /* render Pet components in here */
          }
            {/* Here's an example / placeholder Pet component */}
            <li className="pet">
              <img src={"https://via.placeholder.com/400"} alt={"pet name"} />
              <h4>{"pet name"}</h4>
            </li>
          </ul>
      </main>
    </div>
  );
}

export default App;