import Pet from "./Pet";

// PetList() is a Component
// Destructuring {pets} gives us easy access to this prop
function PetList({pets}) {

  const petComponents = pets.map(pet => {
    return <Pet key={pet.id} pet={pet} />
  })

  return (
    <main>
        <ul className="pet-list">{petComponents}</ul>
    </main>
  );
}

export default PetList;