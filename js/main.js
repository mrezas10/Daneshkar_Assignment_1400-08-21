function Card(title, description, img,rating) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.rating = rating;
}

const cardsInfo = [];
cardsInfo.push(new Card('Avengers: Endgame', 'the 4th Avengers movie', 'img/avengers.jpg', 8.8))
cardsInfo.push(new Card('Hobbs & Shaw', 'a Fast and Furious spin-off', 'img/hobbs%20and%20shaw.jpg', 7.8))
cardsInfo.push(new Card('John Wick 3', 'the 3rd John Wick movie', 'img/John-Wick-3-1.jpg',8.5))
cardsInfo.push(new Card('Deadpool 2', 'the 2nd Deadpool movie', 'img/deadpool-2-1.jpg',9.0))
cardsInfo.push(new Card('The Lion King', 'the live-action Lion King', 'img/the%20lion%20king.jpg',7.5))
cardsInfo.push(new Card('Mad Max: Fury Road', 'Mad Max franchise reboot', 'img/mad-max.jpg',10))
cardsInfo.push(new Card('Aquaman', 'the live-action adaptation of Aquaman', 'img/aquaman.jpg',7.0))
cardsInfo.push(new Card('Mission Impossible', 'javascript library', 'img/mission-impossible.jpg',5.0))


const cardView = (cardInfo) => {
    return `
        <div class="movie">
           <div class="movie-img">
            <img class="movie-img" src=${cardInfo.img} alt=${cardInfo.title}>
           </div>
           <div class="movie-caption">
               <h2 class="movie-title">${cardInfo.title}</h2>
               <div class="movie-rating-div">
                   <span class="movie-rating">${cardInfo.rating}</span>
                   <span>/10</span>
               </div>
           </div>
           <p class="movie-desc">${cardInfo.description}</p>
       </div>
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("movies-div");
cardContainer.innerHTML = generateCards(cardsInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })

    cardContainer.innerHTML = generateCards(filteredCards)
}


const searchBox = document.getElementById("search-box")
const movies = document.getElementsByClassName("movie")

function searchInTitle() {
    let query = searchBox.value.toLowerCase()
    for (let movie of movies)
    {
        let content = movie.textContent.toLowerCase()
        if(!(content.includes(query)))
        {
            movie.style.display = "none"
        }
        else {
            movie.style.display = "flex"
        }
    }
}

searchBox.addEventListener("input", searchInTitle)