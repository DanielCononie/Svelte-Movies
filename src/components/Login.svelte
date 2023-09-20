<script>
    let movie_image;
    let description;
    let rating;
    let genre;

    export async function addMovie() {
        try {
            const send = await fetch('/movies/addMovie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                movie: {
                    movie_image: movie_image,
                    description: description,
                    rating: rating,
                    genre, genre
                }
            });
            if(send.ok) {
                const data = await res.json();
                console.log("DATA: " + data);
            }
        } catch (error) {
            console.error(error)
        }
    }

</script>

<div>
    <form>
        <label for="movie_img">Image Path</label>
        <input name="movie_img" 
                type="text"
                placeholder="Path of movie image..."
                bind:value={movie_image}>
        
        <label for="description">Description</label>
        <textarea name="description" 
                    id="description" 
                    cols="40" 
                    rows="10"
                    placeholder="Description"
                    bind:value={description}></textarea>
        
        <label for="rating">Rating</label>
        <input name="rating" 
        type="number" 
        min="0" 
        max="5"
        placeholder="1-5"
        bind:value={rating}>
        
        <label for="genre">Genre</label>
        <input 
            name="genre" 
            type="text"
            placeholder="genre..."
            bind:value={genre}>
        
        <button type="submit" onclick={addMovie}>Submit</button>
    </form>
</div>

<style>
    form {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: 10px;
        align-items: center;
        place-items: center;
    }

    label {
        text-align: right;
        font-weight: bold;
        font-family: Arial;
        color: white;
    }

    input, textarea {
        width: 100%;
        border: 2px solid black;
        border-radius: 12px;
        padding: 5px;
    }

    div {
        padding: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgb(50, 48, 59);
        margin: 15px;
        border-radius: 12px;
    }

    button {
        width: 100%;
        margin-left: 550%;
    }
</style>