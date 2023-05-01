// Pet() is a Component
// Destructuring {pet} gives us easy access to this prop
function Pet({pet}) {
  return (
    <li className="pet">
      <img src={pet.image} alt={pet.name} />
      <h4>{pet.name}</h4>
    </li>
  );
}

export default Pet;