










export const getMovies = async (category) => {
    // const url = `https://www.omdbapi.com/?t=${encodeURI(category)}&apikey=6d85e62e`
    const url = `https://www.omdbapi.com/?s=${encodeURI(category)}&apikey=6d85e62e`
    const resp = await fetch(url)
    const { Search } = await resp.json()

    // const movies = Search.map(img => {
    //     return {
    //         title: img.Title,
    //         year: img.Year,
    //         img: img.Poster
    //     }
    // })

    const movies = Search.slice(0, 3).map(img => {
        return {
            title: img.Title,
            year: img.Year,
            img: img.Poster
        };
    });

    return movies

}

