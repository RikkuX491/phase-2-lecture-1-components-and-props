import Pet from "./Pet"

function PetList({pets}){
    return <main>
                <ul className="pet-list">{
                    /* render Pet components in here */
                    pets.map(pet => {
                    return <Pet key={pet.id} pet={pet}/>
                    })
                }
                </ul>
            </main>
}

export default PetList