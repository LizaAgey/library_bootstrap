console.log('start script')

import {
    startConfetti,
    stopConfetti
} from './confetti.js'


// ADD FAV MOVIES TO THE PAGE
const moviesJSON = '../json/movies.json';

async function getMovies() {
    return await fetch(moviesJSON)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let arrayIDs = []
            for (let i = 0; i < data.length; i++) {
                arrayIDs.push(i);
            }
            console.log(arrayIDs)

            arrayIDs.forEach((id) => {

                let moviesWrapper = document.getElementById("la-movies-wrapper")
                let movieContainer = document.createElement("div");
                movieContainer.classList.add("text-center")
                movieContainer.classList.add("la-movie-container")
                movieContainer.classList.add("col-xl-4")
                movieContainer.classList.add("col-md-6")
                movieContainer.classList.add("col-sm-12")


                movieContainer.innerHTML =
                    `<div class="movie-img mb-3">
                <a href="${data[id].wiki}" target="_blank" class="h5 text-center mb-3">
                
                <img src="${data[id].poster}" alt="movie"> <div class="movie-title mb-3 mt-1"> ${data[id].name} </div></a>
                </div>
                 `

                moviesWrapper.append(movieContainer)
            })

        })
}

getMovies()

// ADD CONFETTI ANIMATION TO BUTTON

const buttonConfetti = document.querySelector('.btn-cool')

buttonConfetti.addEventListener('click', confettiProcess)


function confettiProcess() {
    startConfetti();
    setTimeout(stopConfetti, 3000)
}

// ADD BTN to TOP while scrolling

let btnTop = document.querySelector("#btn-top");

btnTop.addEventListener('click', topFunction)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



console.log('end script')