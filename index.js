// const students = [
//     {name: "TJ"},
//     {name: "Sydney"},
//     {name: "Kyle"},
//     {name: "Jenn"}
// ]


// function addStudentName(students) {
//     const list = document.querySelector('ul')
//     students.forEach(student => {
//         const li = document.createElement('li')
//         li.textContent = student.name
//         list.append(li)
//     })
// }


// document.addEventListener('DOMContentLoaded', function() {
//     addStudentName(students)
//   })
// 
function fetchMovies() {
    return fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies => renderMovies(movies))

}

function renderMovies(movies) {
    const main = document.querySelector("#movies")
    movies.forEach(movie => {
        const movieCard = document.createElement('div')
        const movieImage = document.createElement('img')
        const movieTitle = document.createElement('h2')
        const movieIMDB = document.createElement('a')
        const movieDescription = document.createElement('p')

        movieCard.className = 'card'
        movieImage.src = movie.image
        movieIMDB.textContent = movie.title
        movieIMDB.href = movie.url
        movieDescription.textContent = `${movie.year} - ${movie.description}`

        main.appendChild(movieCard)
        movieCard.append(movieImage, movieTitle, movieDescription)
        movieTitle.appendChild(movieIMDB)
        
    })
}


document.addEventListener('DOMContentLoaded', function() {
    fetchMovies()
  })


