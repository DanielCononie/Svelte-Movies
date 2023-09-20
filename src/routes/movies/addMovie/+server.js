import { pool } from '../../../lib/db.js';

// export const actions = {
//     default: async ({ request }) => {
      
//       try {
//         const data = await request.formData();
//         pool.query("INSERT INTO movies (movie_image, description, rating, genre) VALUES ($1, $2, $3, $4) RETURNING *", [data.get('movie_image'), data.get('description'), data.get('rating'), data.get('genre')])
//       } catch(err) {
//         console.error(err.message);
//       }
//     }
//   }

export const POST = async ({request}) => {
  try {
      const formData = await request.formData();
      const movie_image = formData.get('movie_image');
      const description = formData.get('description');
      const rating = formData.get('rating');
      const genre = formData.get('genre');

      // Insert the data into the database
      const result = await pool.query("INSERT INTO movies (movie_image, description, rating, genre) VALUES ($1, $2, $3, $4) RETURNING *", [movie_image, description, rating, genre]);

      return new Response(JSON.stringify({ message: 'Data received successfully' }), {
        status: 201
      })
          // status: 200,
          // body: JSON.stringify({ message: 'Data received successfully' }),
      
  } catch (err) {
      console.error(err.message);
      return {
          status: 500,
          body: JSON.stringify({ message: 'Error processing the form data' }),
      };
  }

};