function Pet({pet}){
    return (
        <li key={pet.id} className="pet">
            <img src={pet.image} alt={pet.name} />
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;