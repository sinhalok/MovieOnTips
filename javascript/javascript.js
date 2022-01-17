
    
    const load = async () => {
        var response = await fetch("http://localhost:3000/movies-coming")
        var data = await response.json();
        var previous = document.querySelector('.row');
        previous.remove();
        const addrow = document.querySelector('.container-fluid');
        addrow.innerHTML = `<div class="row"></div`;

        for (let i = 0; i < data.length; i++) {
            const movietable = document.querySelector('.row');
            movietable.innerHTML = movietable.innerHTML + ` <div class="col-md-2 m-a-2">
    <div class="card">
    <img class="card-img-top img-fixed" src="${data[i].posterurl}" onerror="this.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';" alt="Card image cap">
    <div class="card-block">
        <h4 class="card-title"><a onclick="displayadditional('${data[i].posterurl}','${data[i].title}');">${data[i].title}</a></h4>
       
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Imdb Rating : ${data[i].imdbRating}</li>
                <li class="list-group-item">Year : ${data[i].year}</li>
                <li class="list-group-item">Release Date :${data[i].releaseDate}</li>
                <li class="list-group-item">Genres :${data[i].genres}</li>
                <li class="list-group-item">Actors :${data[i] .actors}</li>
    </ul>
    <div class="card-block">
        <button type="button" class="btn btn-dark btn-responsive" onclick="add_to_favorite('${data[i].id}','${data[i].title}','${data[i].posterurl}','${data[i].year}','${data[i].releaseDate}','${data[i].genres}','${data[i].actors}');">Add to favorite</button>
    </div>
    
    </div>

    </div>`
        }
    }

    const movies_in_Theaters = async () => {
        const response = await fetch("http://localhost:3000/movies-in-theaters")
        const data = await response.json();

        var previous = document.querySelector('.row');
        previous.remove();
        const addrow = document.querySelector('.container-fluid');
        addrow.innerHTML = `<div class="row"></div`;
        for (let i = 0; i < data.length; i++) {

            const movietable = document.querySelector('.row');
            movietable.innerHTML = movietable.innerHTML + `<div class="col-md-2 m-a-2">

        <div class="card">
            <img class="card-img-top img-fixed" src="${data[i].posterurl}" onerror="this.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">${data[i].title}</h4>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Imdb Rating : ${data[i].imdbRating}</li>
                <li class="list-group-item">Year : ${data[i].year}</li>
                <li class="list-group-item">Release Date :${data[i].releaseDate}</li>
                <li class="list-group-item">Genres :${data[i].genres}</li>
                <li class="list-group-item">Actors :${data[i] .actors}</li>
            </ul>
            <div class="card-block">
                <button type="button" class="btn btn-dark btn-responsive" onclick="add_to_favorite(${data[i].id},'${data[i].title}','${data[i].posterurl}','${data[i].year}','${data[i].releaseDate}','${data[i].genres}','${data[i].actors}');">Add to favorite</button>
            </div>
        </div>

        </div>
        `
        }
    }

    const top_rated_india = async () => {
        const response = await fetch("http://localhost:3000/top-rated-india")
        const data = await response.json();

        var previous = document.querySelector('.row');
        previous.remove();
        const addrow = document.querySelector('.container-fluid');
        addrow.innerHTML = `<div class="row"></div`;
        for (let i = 0; i < 80; i++) {

            const movietable = document.querySelector('.row');
            movietable.innerHTML = movietable.innerHTML + `<div class="col-md-2 m-a-2">

        <div class="card">
            <img class="card-img-top img-fixed" src="${data[i].posterurl}" onerror="this.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">${data[i].title}</h4>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Imdb Rating : ${data[i].imdbRating}</li>
                <li class="list-group-item">Year : ${data[i].year}</li>
                <li class="list-group-item">Release Date :${data[i].releaseDate}</li>
                <li class="list-group-item">Genres :${data[i].genres}</li>
                <li class="list-group-item">Actors :${data[i] .actors}</li>
            </ul>
            <div class="card-block">
                <button type="button" class="btn btn-dark btn-responsive" onclick="add_to_favorite(${data[i].id},'${data[i].title}','${data[i].posterurl}','${data[i].year}','${data[i].releaseDate}','${data[i].genres}','${data[i].actors}');">Add to favorite</button>
            </div>
        </div>

        </div>
        `
        }
    }

    const top_rated_movies = async () => {
        const response = await fetch("http://localhost:3000/top-rated-movies")
        const data = await response.json();

        var previous = document.querySelector('.row');
        previous.remove();
        const addrow = document.querySelector('.container-fluid');
        addrow.innerHTML = `<div class="row"></div`;
        for (let i = 0; i < 80; i++) {

            const movietable = document.querySelector('.row');
            movietable.innerHTML = movietable.innerHTML + `<div class="col-md-2 m-a-2">

        <div class="card">
            <img class="card-img-top img-fixed" src="${data[i].posterurl}" onerror="this.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">${data[i].title}</h4>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Imdb Rating : ${data[i].imdbRating}</li>
                <li class="list-group-item">Year : ${data[i].year}</li>
                <li class="list-group-item">Release Date :${data[i].releaseDate}</li>
                <li class="list-group-item">Genres :${data[i].genres}</li>
                <li class="list-group-item">Actors :${data[i] .actors}</li>
            </ul>
            <div class="card-block">
                <button type="button" class="btn btn-dark btn-responsive" onclick="add_to_favorite(${data[i].id},'${data[i].title}','${data[i].posterurl}','${data[i].year}','${data[i].releaseDate}','${data[i].genres}','${data[i].actors}');">Add to favorite</button>
            </div>
        </div>

        </div>
        `
        }
    }

    const favorite = async () => { 
        const response = await fetch("http://localhost:3000/favourit")
        const data = await response.json();
        var previous = document.querySelector('.row');
        previous.remove();
        const addrow = document.querySelector('.container-fluid');
        addrow.innerHTML = `<div class="row"></div`;
        for (let i = 0; i < 80; i++) {
            const movietable = document.querySelector('.row');
            movietable.innerHTML = movietable.innerHTML + `<div class="col-md-2 m-a-2">

        <div class="card">
            <img class="card-img-top img-fixed" src="${data[i].posterurl}" onerror="this.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';"  alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">${data[i].title}</h4>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id : ${data[i].id}</li>
                <li class="list-group-item">Year : ${data[i].year}</li>
                <li class="list-group-item">Release Date :${data[i].releasedate}</li>
                <li class="list-group-item">Genres :${data[i].genres}</li>
                <li class="list-group-item">Actors :${data[i] .actors}</li>
            </ul>
            <div class="card-block">
                <button type="button" onclick="removeItem(${data[i].id});" class="btn btn-primary btn-responsive">Remove</button>
            </div>
        </div>

        </div>
        `
        }
    }
    /* FUNCTION TO ADD MOVIE TO FAVORITE */
    function add_to_favorite(a, b, c, d, e,f,g) {
        alert(b + " Is added to Favorite");
        fetch('http://localhost:3000/favourit', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentid: a,
                title: b,
                posterurl: c,
                year: d,
                releasedate: e,
                genres: f,
                actors:g
            })
        }).then(res => res.json())
            .then(res => console.log(res));
    }
    /* REMOVE FUNCTION FOR REMOVING MOVIE FROM FAVORTIE*/
    async function removeItem(id){
    alert(id + " is deleted from Favorite");
    let fetchOpt={method:"delete",mode:"cors",cache:"no-cache"};
    const url = "http://localhost:3000/favourit/"+id;
    fetch(url,fetchOpt);
}  