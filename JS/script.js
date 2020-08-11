
var wrapper = document.querySelector('#wrapper')

movieOutput(movies)

//Output filter

let newMovies = movies.filter(function (el) { return el.Year >= 2014; });

let avnMovies = movies.filter(item => item.Title.indexOf('Avengers') !== -1);

let xMovies = movies.filter(item => item.Title.indexOf('X-Men') !== -1);

let prsMovies = movies.filter(item => item.Title.indexOf('Princess') !== -1);

let bmMovies = movies.filter(item => item.Title.indexOf('Batman') !== -1);

var rad = document.getElementsByName("drone");

//Output decider

for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('click', function () {
        if (this.value == 1) {
            movieOutput(newMovies)
        } else if (this.value == 2) {
            movieOutput(avnMovies)
        } else if (this.value == 3) {
            movieOutput(xMovies)
        } else if (this.value == 4) {
            movieOutput(prsMovies)
        } else if (this.value == 5) {
            movieOutput(bmMovies)
        }
    });
}

//Output function

function movieOutput(name) {
    wrapper.innerHTML = '<ul>' + name.map(function (movies) {
        return '<li><a href="https://www.imdb.com/title/' + movies["imdbID"] + '/?ref_=nv_sr_srsg_0"><img src="' + movies["Poster"] + '" alt=""></img></a></li>';
    }).join('') + '</ul>';
}