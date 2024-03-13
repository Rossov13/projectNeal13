import './style.css'

// JS_PZ_Module_15_16_Week_21_1548323208.pdf

// 1. HTML page with tabs.



const tabs = document.querySelectorAll('[data-tab-value]') as NodeListOf<HTMLElement>
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.dataset.tabValue) {
      const target = document.getElementById(tab.dataset.tabValue)
      tabInfos.forEach(tabInfo => {
        tabInfo.classList.remove('active')
      })
      if (target) target.classList.add('active')
    }
  })
})


// 2. Modal window.
// const updateButton = document.getElementById('updateDetails') as HTMLElement;
// const dialog = document.getElementById("favDialog") as HTMLDialogElement;
// // const cancelButton = dialog.querySelector("[type=reset]") as HTMLElement;
// // const confirm = dialog.querySelector("[type=submit]") as HTMLElement;
// const select = dialog.querySelector("#favAnimal") as HTMLSelectElement

// dialog.addEventListener('close', (e) => {
//   if (dialog.returnValue == 'cancel') {
//     console.log("Canceled");
//   } else {
//     console.log(select.value)
//   }
// })


// // function openCheck(dialog: any) {
// //     if (dialog.open) {
// //         console.log("Dialog open");
// //     } else {
// //         console.log("Dialog closed");
// //     }
// // }

// updateButton.addEventListener("click", () => {
//   dialog.showModal();
// });


// cancelButton.addEventListener("click", () => {
//     dialog.close();
//     console.log("animalNotChosen")
//     openCheck(dialog);
// });

// confirm.addEventListener("click", () => {
//     dialog.close();
//     const 
//     openCheck(dialog);
// });

// return.value = "favDialog"

// 3. Text field with autocomplete.
// 4. User rating score card

// const rating = {
//   "header": "User rating",
//   "maxvalue": 254,
//   "data": [
//     {
//       "title": "5 stars",
//       "value": 150
//     },
//     {
//       "title": "4 stars",
//       "value": 63
//     },
//     {
//       "title": "3 stars",
//       "value": 15
//     },
//     {
//       "title": "2 stars",
//       "value": 6
//     },
//     {
//       "title": "1 star",
//       "value": 20
//     }
//   ]
// }

// const ratingDiv = document.querySelector('.userRating') as HTMLDivElement

// function renderRating() {
//   ratingDiv.innerHTML = ''
//   ratingDiv.innerHTML += `<span class="heading">${rating.header}</span>`
//   ratingDiv.innerHTML += `<hr style="border: 3px solid #f1f1f1">`
//   rating.data.forEach(el => {
//     ratingDiv.innerHTML += `<div class="side">
//     <div>${el.title}</div>
//   </div>
//   <div class="middle">
//     <div class="bar-container">
//       <div style="width:${el.value / rating.maxvalue * 100}%" class="bar-${el.title[0]}"></div>
//     </div>
//   </div>
//     <div class="side right">
//       <div>${el.value}</div>
//     </div>`
//   })
// }

// renderRating()


// Card game Heh
// const cards = document.querySelectorAll('.memory-card') as NodeListOf<HTMLDivElement>
// const startGame = document.querySelector('#startGame') as HTMLButtonElement
// const cardsSvg = ['2D', '4H', '7D', '9S', '2D', '4H', '7D', '9S']
// const shuffleArray = (array: any[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }

// let isGameRun = false
// let showPause = false
// let card1: Element | undefined
// let card2: Element | undefined

// document.body.addEventListener('click', (e: MouseEvent) => {

//   if (e.target == startGame) {
//     isGameRun = !isGameRun
//     if (isGameRun) {
//       startGame.textContent = 'Finish'
//       shuffleArray(cardsSvg)
//       cards.forEach((el, i) => {
//         (el.querySelector('.front-face') as HTMLImageElement).src = 'images/' + cardsSvg[i] + '.svg'
//       })
//     } else {
//       startGame.textContent = 'Start'
//       cards.forEach(el => {
//         el.classList.remove('flip')
//       })
//     }
//   }

//   const card = (e.target as HTMLElement).closest('.memory-card')

//   if (card && isGameRun && !showPause) {
//     card.classList.toggle('flip')
//     if (card.classList.contains('flip')) {
//       if (!card1) {
//         card1 = card
//       } else {
//         card2 = card
//       }
//       if (card1 && card2) {
//         // check value
//         if ((card1.querySelector('.front-face') as HTMLImageElement).src == (card2.querySelector('.front-face') as HTMLImageElement).src) {
//           // if same value clear cards
//           console.log('true')
//           card1 = card2 = undefined
//         } else {
//           console.log('false')
//           // if not same -> clear cards and toggle flip
//           showPause = true
//           setTimeout(() => {
//             showPause = false
//             card1?.classList.toggle('flip')
//             card2?.classList.toggle('flip')
//             card1 = card2 = undefined
//           }, 3000)
//         }
//       }

//     }
//   }

// })


// const stars = document.querySelectorAll(".stars i");
// stars.forEach((star, index1) => {
//   star.addEventListener("click", () => {
//     stars.forEach((star, index2) => {
//       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
//     });
//   });
// });

// TO DO List
// let myNodelist = document.getElementsByTagName("LI");
// let i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }


// let closebtns = document.getElementsByClassName("close");
// let k;

// for (k = 0; k < closebtns.length; k++) {
//   closebtns[k].addEventListener("click", function() {
//     this.parentElement.style.display = 'none';
//   });
// }


// const todoUL = document.getElementById('myUL')
// const addBtn = document.querySelector('.addBtn')
// addBtn?.addEventListener('click', addNewElement)


// function addNewElement() {
//   todoUL?.insertAdjacentHTML('afterbegin', `<li>${(document.getElementById("myInput")as HTMLInputElement)?.value}<span class="close">\u00D7</span></li>`)
// }

let myNodelist = document.getElementsByTagName("LI");
let k;
for (k = 0; k < myNodelist.length; k++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[k].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement as HTMLDivElement
    div.style.display = "none"
  }
}

// Add a "checked" symbol when clicking on a list item

let list = document.querySelector('ul') as HTMLElement
list.addEventListener('click', function (ev) {

  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const todoUL = document.getElementById('myUL')
const addBtn = document.querySelector('.addBtn')
addBtn?.addEventListener('click', addNewElement)


function addNewElement() {
  todoUL?.insertAdjacentHTML('afterbegin', `<li>${(document.getElementById("myInput") as HTMLInputElement)?.value}<span class="close">\u00D7</span></li>`)
}

const markl = 'hello';


const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = "39bc7b6c3005d0c1c22ee964387eb1d8"; // API key for OpenWeatherMap API

const createWeatherCard = (cityName, weatherItem, index) => {
  if (index === 0) { // HTML for the main weather card
    return `<div class="details">
                    <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.weather[0].description}</h6>
                </div>`;
  } else { // HTML for the other five day forecast card
    return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
  }
}

const getWeatherDetails = (cityName, latitude, longitude) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
    // Filter the forecasts to get only one forecast per day
    const uniqueForecastDays = [];
    const fiveDaysForecast = data.list.filter(forecast => {
      const forecastDate = new Date(forecast.dt_txt).getDate();
      if (!uniqueForecastDays.includes(forecastDate)) {
        return uniqueForecastDays.push(forecastDate);
      }
    });

    // Clearing previous weather data
    cityInput.value = "";
    currentWeatherDiv.innerHTML = "";
    weatherCardsDiv.innerHTML = "";

    // Creating weather cards and adding them to the DOM
    fiveDaysForecast.forEach((weatherItem, index) => {
      const html = createWeatherCard(cityName, weatherItem, index);
      if (index === 0) {
        currentWeatherDiv.insertAdjacentHTML("beforeend", html);
      } else {
        weatherCardsDiv.insertAdjacentHTML("beforeend", html);
      }
    });
  }).catch(() => {
    alert("An error occurred while fetching the weather forecast!");
  });
}

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (cityName === "") return;
  const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  // Get entered city coordinates (latitude, longitude, and name) from the API response
  fetch(API_URL).then(response => response.json()).then(data => {
    if (!data.length) return alert(`No coordinates found for ${cityName}`);
    const { lat, lon, name } = data[0];
    getWeatherDetails(name, lat, lon);
  }).catch(() => {
    alert("An error occurred while fetching the coordinates!");
  });
}

const getUserCoordinates = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords; // Get coordinates of user location
      // Get city name from coordinates using reverse geocoding API
      const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
      fetch(API_URL).then(response => response.json()).then(data => {
        const { name } = data[0];
        getWeatherDetails(name, latitude, longitude);
      }).catch(() => {
        alert("An error occurred while fetching the city name!");
      });
    },
    error => { // Show alert if user denied the location permission
      if (error.code === error.PERMISSION_DENIED) {
        alert("Geolocation request denied. Please reset location permission to grant access again.");
      } else {
        alert("Geolocation request error. Please reset location permission.");
      }
    });
}

locationButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());


//Game Brick Destroyer

// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrecy = document.querySelector(".from");
let toCurrecy = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// Function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// When user clicks, it calls function getresults 
convert.addEventListener("click", getResults);

// Function getresults
function getResults() {
  fetch(`${api}`)
    .then(currency => {
      return currency.json();
    }).then(displayResults);
}

// Display results after conversion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML =
    ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}

// When user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
};



// Hello. It's a game
const grid = document.querySelector('.grid')

const boardWidth = 640
const boardHeight = 300
const ballDiameter = 20
const blockWidth = 100
const blockHeight = 20

const userStart = [285, 5]
let currentPosition = userStart

const ballStart = [325, 40]
let ballCurrentPosition = ballStart

const ball = document.createElement('div')
ball.classList.add('ball')
ball.style.left = ballCurrentPosition[0] + 'px'
ball.style.bottom = ballCurrentPosition[1] + 'px'

let timerId
let xDirection = 2
let yDirection = 2

//create block 
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
  }
}

//all blocks
const blocks = [
  new Block(5, 275), new Block(110, 275), new Block(215, 275), new Block(320, 275), new Block(425, 275), new Block(530, 275),
  new Block(5, 250), new Block(110, 250), new Block(215, 250), new Block(320, 250), new Block(425, 250), new Block(530, 250),
  new Block(5, 225), new Block(110, 225), new Block(215, 225), new Block(320, 225), new Block(425, 225), new Block(530, 225)
]

// console.log(blocks)

//draw the block
const drawBlocks = () => {

  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
  }
}

drawBlocks()

//user Block
const userBlock = document.createElement('div')
userBlock.classList.add('userBlock')
userBlock.style.left = currentPosition[0] + 'px'
userBlock.style.bottom = currentPosition[1] + 'px'
grid.appendChild(userBlock)

//draw current user block
const drawUserBlock = () => {
  userBlock.style.left = currentPosition[0] + 'px'
  userBlock.style.bottom = currentPosition[1] + 'px'
}

const drawBall = () => {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}


//move user block
const moveUserBlock = (event) => {
  switch (event.code) {
    case 'ArrowLeft':
      if (currentPosition[0] > 5) {
        currentPosition[0] -= 10
        drawUserBlock()
      }
      break;
    case 'ArrowRight':
      if (currentPosition[0] < 530) {
        currentPosition[0] += 10
        drawUserBlock()
      }
      break;
    default:
      break;
  }
}

const moveBall = () => {
  ballCurrentPosition[0] += xDirection
  ballCurrentPosition[1] += yDirection
  drawBall()
  checkForCollisions()
}



//change direction of the ball
const changeDirection = () => {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}


//check the collision logic
const checkForCollisions = () => {

  //check for block collision
  for (let i = 0; i < blocks.length; i++) {
    if (
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0]) &&
      (ballCurrentPosition[0] <
        blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) >
        blocks[i].bottomLeft[1]) &&
      (ballCurrentPosition[1] < blocks[i].topLeft[1])
    ) {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
      blocks.splice(i, 1)
      changeDirection()

      //check if the user wins
      if (blocks.length === 0) {
        const cnfrm = confirm("YOU WIN ! WANT TO PLAY AGAIN !")
        if (cnfrm) {
          location.reload()
        }
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUserBlock)
      }
    }
  }

  //check for the user block collisions
  if (
    ((ballCurrentPosition[0] > currentPosition[0]) &&
      (ballCurrentPosition[0] < currentPosition[0] + blockWidth)
    ) &&
    ((ballCurrentPosition[1] > currentPosition[1]) &&
      (ballCurrentPosition[1] <
        currentPosition[1] + blockHeight)
    )
  ) {
    changeDirection()
  }

  //check for wall collision
  if ((ballCurrentPosition[0] >= (boardWidth - ballDiameter)) || (ballCurrentPosition[1] >= (boardHeight - ballDiameter)) ||
    (ballCurrentPosition[0] <= 0)) {
    changeDirection()
  }

  //checkfor game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId)
    document.removeEventListener('keydown', moveUserBlock)
    const cnfrm = confirm("YOU LOSE ! WANT TO PLAY AGAIN !")
    if (cnfrm) {
      location.reload()
    }
  }
}

//create a ball

const startGame = document.querySelector('#startGame') as HTMLButtonElement //added  
startGame.addEventListener('click', () => {
  grid.appendChild(ball)
  timerId = setInterval(moveBall, 20)
})



document.addEventListener('keydown', (event) => {
  moveUserBlock(event)
})



