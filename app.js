(async function () {
      const response = await fetch('http://127.0.0.1:5501/data.json');
      let movies = await response.json();
      data = movies
      renderData(data)
})();
let movieList = document.getElementById('movie-list');

// For Language
movieList.innerHTML = ' '
function renderData(data) {
      //its not working i dont why
      // alert('')
      //       data.filter(v => v.language.toLowerCase().includes(value.toLowerCase())).forEach((movie, inde) => {
      //             let movieItem = document.createElement('div');

      //             movieItem.innerHTML = `
      //     <p>${inde}</p>
      //     <h2> ${movie.title} </h2>
      //     <span> ${movie.language} </span>
      //     <p>${movie.genres}</p>
      //     <p>${movie.release_date}</p>
      //     <p>${movie.vote_average}</p>
      //     `
      //     movieList.appendChild(movieItem);
      //       });
}



function getComboL(selectObject) {
      var value = selectObject.value;
      console.log(value)
      filterByLanguage = value;
      data.filter(v => v.language.toLowerCase().includes(value.toLowerCase())).forEach((movie, inde) => {
            let movieItem = document.createElement('div');
            movieItem.innerHTML = `
            <div class='movieItem'>
          <p class='indexNumber'>${inde}</p>
          <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" class='movieImg'/>
          <div class='detailBox'>
          <h2 class='title'> ${movie.title} </h2>
          <div class='subheading'>
          <span>${movie.certification}</span>
          <p>${movie.genres}</p>
          </div>
        `
            movieList.appendChild(movieItem);
      });

}


// For Genres

movieList.innerHTML = ' ';
function renderData(data) {

}

function getComboG(select) {

      var value = select.value;
      console.log(value)
      filterByLanguage = value;
      data.filter(g => (value.toLowerCase(g))).forEach((movie, inde) => {
            let movieItem = document.createElement('div');
            movieItem.innerHTML = `
            <div class='movieItem'>
            <p class='indexNumber'>${inde}</p>
            <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" class='movieImg'/>
            <div class='detailBox'>
            <h2 class='title'> ${movie.title} </h2>
            <div class='subheading'>
            <span>${movie.certification}</span>
            <p>${movie.genres}</p>
            </div>
            </div>
            <p>${movie.release_date}</p>
            </div>`

            movieList.appendChild(movieItem);
      });


}

// For Rating

movieList.innerHTML = '';
function renderData(data) {

}

function getComboR(select) {
      var value = select.value;
      console.log(value)
      filterByLanguage = value;
      data.filter(r => (value.toLowerCase(r))).forEach((movie, inde) => {
            let movieItem = document.createElement('div');
            movieItem.innerHTML = `
            <div class='movieItem'>
            <p class='indexNumber'>${inde}</p>
            <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" class='movieImg'/>
            <div class='detailBox'>
            <h2 class='title'> ${movie.title} </h2>
            <div class='subheading'>
            <span>${movie.certification}</span>
            <p>${movie.genres}</p>
            </div>`

            movieList.appendChild(movieItem);
      });
}

// For Date

movieList.innerHTML = '';
function renderData(data) {
      data.filter(data => data.language.toLowerCase().includes(value.toLowerCase())).forEach((movie) => {
            let movieItem = document.createElement('div');
            movieItem.innerHTML = `
            <p>${movie.release_date}</p>`
            movieList.appendChild(movieItem);
      });
}
function getComboD(date) {
      var value = date.value;
      console.log(value)
      filterByLanguage = value;
      data.filter(date => date.language.toLowerCase().includes(value.toLowerCase())).forEach((movie, inde) => {
            let movieItem = document.createElement('div');
            movieItem.innerHTML = `
            <div class='movieItem'>
            <p class='indexNumber'>${inde}</p>
            <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" class='movieImg'/>
            <div class='detailBox'>
            <h2 class='title'> ${movie.title} </h2>
            <div class='subheading'>
            <span>${movie.certification}</span>
            <p>${movie.genres}</p>
            </div>
            <div>
            <p>${movie.release_date}</p>
            </div>`

            movieList.appendChild(movieItem);
      });
}

