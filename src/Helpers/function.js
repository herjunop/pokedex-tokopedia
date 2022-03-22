export const validateName = (array, name) => {
    return array.some(data => data.unique_name.toLowerCase() === name.toLowerCase())
}

export const countOwned = (pokedex, pokemon) => {
    return pokedex.filter(data => data.id === pokemon.id).length
}