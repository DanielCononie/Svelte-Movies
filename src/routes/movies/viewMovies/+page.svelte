<script>
    // import batman from '../../../../static/batman.png'
    export let data;
    let movies = [];

    function initializeMovies() {
        movies = data.movies.map(movie => ({
            ...movie,
            editing: false,
            updatedDescription: movie.description,
            updatedRating: movie.rating,
            updatedGenre: movie.genre,
        }));
    }

     initializeMovies();

    function enableEditing(index) {
        movies[index].editing = true;
    }

    async function updateMovie(index) {

        const formData = new FormData();
        formData.append('movie_id', movies[index].movie_id)
        formData.append('description', movies[index].updatedDescription);
        formData.append('rating', movies[index].updatedRating);
        formData.append('genre', movies[index].updatedGenre);
        console.log(formData)

        try {
            // const response = await fetch(`/movies/viewMovies/${movies[index].movie_id}`, {
                const response = await fetch(`/movies/viewMovies`, {
                method: 'PUT',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                body: formData,
            });
            console.log("Front end :" , response)

            if (response.ok) {
                const data = await response.json()
                console.log("DATA: " + data.body);

                movies[index].description = movies[index].updatedDescription;
                movies[index].rating =  movies[index].updatedRating;
                movies[index].genre =  movies[index].updatedGenre;
                movies[index].editing = false; // Disable editing
            } else {
                console.error('Error updating movie');
            }
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    }

    async function deleteMovie(movieID) {
        try {

            const formData = new FormData();
            formData.append('movie_id', movieID)

            const response = await fetch(`/movies/viewMovies`, {
                method: 'DELETE',
                body: formData,
            });


            if (response.ok) {
                const data = await response.json()
                console.log("DATA: " + data.body);
                // Remove the movie from the local state
                movies = movies.filter(movie => movie.movie_id !== movieID);
            } else {
                console.error('Error deleting movie');
            }
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    }

</script>

<section>
<h1>View movies</h1>
<div class="movie-container">
    {#each movies as movie, index}
        <div key={index} class="movie">
            <img src={movie.movie_image} alt="movie">
            <hr>
            <p>{movie.description}</p>
            <hr>
            <p>{movie.rating}</p>
            <hr>
            <p>{movie.genre}</p>
            {#if movie.editing}
            <div class="edit-form-container">
                <form on:submit|preventDefault={() => updateMovie(index)} class="edit-form">
                    <input type="text" bind:value={movie.updatedDescription} placeholder="Description">
                    <input type="number" bind:value={movie.updatedRating} min="0" max="5" placeholder="Rating">
                    <input type="text" bind:value={movie.updatedGenre} placeholder="Genre">
                    <button type="submit">Save</button>
                    <button on:click={() => movie.editing = false}>Cancel</button>
                </form>
            </div>
            {:else}
            <span>
                <button on:click={() => enableEditing(index)}>Edit</button>
                <button on:click={() => deleteMovie(movie.movie_id)}>Delete</button>
            </span>
            {/if}
        </div>
    {/each}
</div>
</section>
<style>
    h1 {
        text-align: center;
        margin-bottom: 50px;
    }

    .movie-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
    }

    .movie {
        border: 5px ridge white;
        padding: 15px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 300px;
        background-color: black;
        color: white;
        border-radius: 12px;

    }

    img {
        height: 180px;
        width: 210px;
        margin-bottom: 25px;
        border: 3px ridge white;
        border-radius: 12px;
    }

    section {
        padding: 30px;
        width: 100%;

    }

    hr {
        width: 100%;
        background-color: black;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .edit-form {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .edit-form > input {
        margin: 5px;
    }

    .edit-form-container {
       position: absolute;
       background-color: rgb(40, 39, 44);
       padding: 20px;
       border-radius: 20px;
    }

    .edit-form > button {
        background-color: black;
        color: white;
        border-radius: 20px;
        margin: 5px;
    }

    @media only screen and (max-width: 1000px) {
        .movie-container {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>