function storeMovies(input) {

    const database = [];

    input.forEach((input) => {
        if (input.startsWith("addMovie")) {
            const [name] = input.split("addMovie ").filter(Boolean);
            database.push({name});
        } else if (input.includes("directedBy")) {
            const [name, director] = input.split(" directedBy ").filter(Boolean);
            const movie = database.find((x) => x?.name === name);
            if (movie?.name) {
                movie.director = director;
            }
        } else if (input.includes("onDate")) {
            const [name, date] = input.split(" onDate ").filter(Boolean);
            const movie = database.find((x) => x?.name === name);
            if (movie?.name) {
                movie.date = date;
            }
        }
    });

    database
        .filter((movie) => movie.name && movie.director && movie.date)
        .forEach((movie) => console.log(JSON.stringify(movie)));
}

storeMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);