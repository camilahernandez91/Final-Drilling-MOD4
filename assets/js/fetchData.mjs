async function fetchStarWarsData (pageNumber) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
        
        if(!response.ok) {
            throw new Error('No se pudo ingresar al API de Star Wars')
        }
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error(error)
    }
}

export default fetchStarWarsData