// Setting the number of stars to display
const stars = 1000;

// Looping through the stars
for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'star'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

// Getting random values
function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}