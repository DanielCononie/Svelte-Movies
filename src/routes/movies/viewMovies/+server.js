import { request } from 'http';
import { pool } from '../../../lib/db'


export async function PUT({request}) {

    try {
        const formData = await request.formData();
        const movie_id = formData.get('movie_id');
        const description = formData.get('description');
        const rating = formData.get('rating');
        const genre = formData.get('genre');

        console.log("Request body: " , movie_id, description, rating, genre)

        // Update the movie details in the database
        const result = await pool.query(
            "UPDATE movies SET description = $1, rating = $2, genre = $3 WHERE movie_id = $4",
            [description, rating, genre, movie_id]
        );

        return new Response(JSON.stringify({ message: 'Data updated successfully' }), {
            status: 200
          })
    } catch (error) {
        console.error('Error updating movie:', error);
        return new Response(JSON.stringify({ message: 'Error updating movie' }), {
            status: 500
        })
    }
}

export async function DELETE({request}) {
    try {
        const formData = await request.formData();
        const movieID = formData.get('movie_id');
        console.log("Request body: " , movieID)

        const result = await pool.query(
            "DELETE FROM movies WHERE movie_id=$1",
            [movieID]
        );
        return new Response(JSON.stringify({ message: 'Data deleted successfully' }), {
            status: 200
          });

    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({ message: 'Error deleting movie' }), {
            status: 500
        });
    }
}
