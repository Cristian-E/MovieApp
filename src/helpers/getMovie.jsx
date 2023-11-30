

export const getMovie = async (id) => {
    try {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=6d85e62e`;
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la película:', error);
        throw error;
    }
};


