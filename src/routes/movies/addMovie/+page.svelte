<script>
    let movie_image ='';
    let description='';
    let rating='';
    let genre='';



    async function addMovie() {
        try {
            const formData = new FormData();
            formData.append('movie_image', movie_image);
            formData.append('description', description);
            formData.append('rating', rating);
            formData.append('genre', genre);

            const send = await fetch('/movies/addMovie', {
                method: 'POST',
                body: formData, // Use the FormData object
            });

            if (send.ok) {
                const data = await send.json();
                console.log("DATA: " + data.body);
            } else {
                console.error('Error sending form data');
            }
        } catch (error) {
            console.error(error);
        }
    }

</script>

<div class="main">
    <h1>Add Movies</h1>
<div class="form-container">
    <form >
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
        
        <button type="submit" on:click={addMovie}>Submit</button>
    </form>
</div>
</div>

<style>
    form {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: 10px;
        align-items: center;
        place-items: center;
    }

    h1 {
        color: white;
        font-family: Arial;
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

    .form-container {
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
    .main {
        background-color: rgb(128, 171, 240);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-content: center;
        width: 100%;
        height: 100vh;
    }
</style>

