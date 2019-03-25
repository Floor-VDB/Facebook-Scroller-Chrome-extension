function clickPlanet() {
    var planets = document.getElementsByClassName("_606w"),
        randomplanet = Math.floor(Math.random() * planets.length),
        clickplanet = planets[randomplanet];

    clickplanet.click();
}

clickPlanet();