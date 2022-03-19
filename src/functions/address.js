function generateStreet() {
    let street = '';
    do {
        street += getRandomCharacter()
    } while(Math.random() < 0.5 && street.length < 50);
    return street;
}

function generateStreetNumber() {
    let streetNumber = getRandomNumber(1, 999);
    if (Math.random() < 0.5) streetNumber += getRandomCharacter().toUpperCase();
    return streetNumber;
}

function generateFloor() {
    let floor = getRandomNumber(0, 99);
    if (floor === 0) floor = 'st';
    return floor;
}

function getRandomCharacter() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅØÆabcdefghijklmnopqrstuvwxyzåøæ";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

//both values included
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {generateFloor, generateStreetNumber, generateStreet}