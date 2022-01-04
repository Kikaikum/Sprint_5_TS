"use strict";
const API_URL = "https://icanhazdadjoke.com/";
const API_URL1 = "https://api.chucknorris.io/jokes/random";
const API_TEMPS = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=346f8bb1ddd8277be9af5c999b9520d1";
var reportAcudits = [];
function AddJoke() {
    fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
        if (response.ok)
            return response.json();
    })
        .then(function (data) {
        var chiste = data.joke;
        const dom = document.getElementById("jokes");
        dom.innerHTML = chiste;
    })
        .catch(err => {
        console.error("ERROR: ", err.message);
    });
}
function AddJoke1() {
    fetch(API_URL1, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
        if (response.ok)
            return response.json();
    })
        .then(function (data) {
        var chiste = data.value;
        const dom = document.getElementById("jokes");
        dom.innerHTML = chiste;
    })
        .catch(err => {
        console.error("ERROR: ", err.message);
    });
}
function ShowJokes() {
    var kike = Math.floor(Math.random() * (1 + 1));
    if (kike == 0) {
        AddJoke();
    }
    else {
        AddJoke1();
    }
}
function Joke(puntos) {
    var _a;
    const joke = (_a = document.getElementById("jokes")) === null || _a === void 0 ? void 0 : _a.textContent;
    const data = new Date();
    let dataISO = data.toISOString();
    if (joke != " " && joke) {
        let acudit = {
            joke: joke,
            score: puntos,
            date: dataISO
        };
        reportAcudits.push(acudit);
        console.log(reportAcudits);
    }
    ShowJokes();
}
function temps() {
    fetch(API_TEMPS, {})
        .then(response => {
        if (response.ok)
            return response.json();
    })
        .then(function (data) {
        let temps = data.weather[0].description;
        const dom = document.getElementById("jokes");
        dom.innerHTML = temps;
    })
        .catch(err => {
        console.error("ERROR: ", err.message);
    });
}
window.onload = function () {
    temps();
};
