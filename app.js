// HTTP - hyper text transfer protocol
// Request - what do we want to do?
// Response - What was actually done?


const puzzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzzleEl.textContent = game1.puzzle
guessesEl.textContent= game1.statusMessage


window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)

    }
})

// Making an HTTP request
// const countryCode = "ME"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country)  => country.alpha2Code === countryCode)
//         console.log('test 3:' + country.name)
        
//     } 

    
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()
