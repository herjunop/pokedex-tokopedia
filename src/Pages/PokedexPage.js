export const PokedexPage = () => {
    const pokedex = localStorage.getItem("pokedex")
    const temp = pokedex ? JSON.parse(pokedex) : []
    console.log('📢 [PokedexPage.js:4]', temp);
    return (
        <div>
            Pokedex Page
        </div>
    )
}