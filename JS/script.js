var wrapper = document.querySelector('#wrapper')

function btnClick1() {

    let newMovies = movies.filter(function (el) { return el.Year >= 2014; });

    wrapper.innerHTML = '<ul>' + newMovies.map(function (movies) {
        return '<li><img src="' + movies["Poster"] + '" alt=""></img></li>';
    }).join('') + '</ul>';
}

function btnClick2() {

    let avnMovies = movies.filter(item => item.Title.indexOf('Avengers') !== -1);

    wrapper.innerHTML = '<ul>' + avnMovies.map(function (movies) {
        return '<li><img src="' + movies["Poster"] + '" alt=""></img></li>';
    }).join('') + '</ul>';
}

function btnClick3() {

    let xMovies = movies.filter(item => item.Title.indexOf('X-Men') !== -1);

    wrapper.innerHTML = '<ul>' + xMovies.map(function (movies) {
        return '<li><img src="' + movies["Poster"] + '" alt=""></img></li>';
    }).join('') + '</ul>';
}

function btnClick4() {

    let prsMovies = movies.filter(item => item.Title.indexOf('Princess') !== -1);

    wrapper.innerHTML = '<ul>' + prsMovies.map(function (movies) {
        return '<li><img src="' + movies["Poster"] + '" alt=""></img></li>';
    }).join('') + '</ul>';
}

function btnClick5() {

    let bmMovies = movies.filter(item => item.Title.indexOf('Batman') !== -1);

    wrapper.innerHTML = '<ul>' + bmMovies.map(function (movies) {
        return '<li><img src="' + movies["Poster"] + '" alt=""></img></li>';
    }).join('') + '</ul>';
}