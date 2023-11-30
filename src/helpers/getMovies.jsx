










export const getMovies = async (category) => {


    const url = `https://www.omdbapi.com/?s=${encodeURI(category)}&apikey=6d85e62e`
    const resp = await fetch(url)
    const { Search } = await resp.json()
    // const movies = Search.slice(0, 3).map(img => {
    const movies = Search.map(item => {
        return {
            title: item.Title,
            year: item.Year,
            img: item.Poster,
            id: item.imdbID
        };
    });
    console.log(movies);
    return movies
}

