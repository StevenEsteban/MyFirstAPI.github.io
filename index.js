/*

displayData = data => {
    const displayDiv = document.querySelector('#displayDiv');
    data.forEach(data => {
        const dataElem = document.createElement('p');
        dataElem.innerText = "here's the joke u're waiting for: ${data.joke}";

        displayDiv.append(dataElem)

    });
}*/


function displayJoke(joke) {
    const inDiv = document.getElementById('displayDiv')
    const jokeElem = document.createElement('h3');
    jokeElem.innerText = joke
    inDiv.append(jokeElem)
}



fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(data => displayJoke(data.joke))