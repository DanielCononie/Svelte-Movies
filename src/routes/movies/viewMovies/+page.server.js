// Database connection
import {pool} from '../../../lib/db'

export async function load({data}) {
    const fetchMovies = async () => {
            try {
              const { rows } = await pool.query("SELECT * FROM movies");
              console.log("Fetched movies:", rows);
              return rows;
            } catch (error) {
              console.error("Error fetching movies:", error);
              throw error;
            }
    }
    const movies  = await fetchMovies();
    return {
        movies: movies,
    }
}

