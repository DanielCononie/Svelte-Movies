<nav>
    <h2><a href="/">Cinematic Movies</a></h2>
    <div>
        <span><a href="/movies/addMovie">Add a movie</a></span>
        <span><a href="/movies/viewMovies">Browse for movies</a></span>
    </div>
</nav>


<slot />

<style>

    nav {
        display: flex;
        justify-content: space-evenly;
        padding: 10px;
        background: linear-gradient(to left, rgb(50, 48, 59), rgb(128, 171, 240));
        width: 106%;
    }

    div{
        display: flex;
        justify-content: space-around;
        padding: 5px;
        border-radius: 12px;
    }

    div span {
        margin: 0px 20px;
    }

    div span a {
        
        font-weight: bold;
        cursor: pointer;
        font-size: 16px;
        transition: 2s font-size;
        color: white;
    }

    div span a:hover {
        font-size: 25px;
    }

    h2 {
        margin: 0;
        padding: 0;
    }

    h2 a {
        text-decoration: none;
        color: white;
        
    }
</style>