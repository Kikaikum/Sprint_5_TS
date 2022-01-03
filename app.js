"use strict";
const API_URL = "https://icanhazdadjoke.com/";
const reportAcudits = [];
const acudit = {};
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
function Joke(puntos) {
    var _a;
    const joke = (_a = document.getElementById("jokes")) === null || _a === void 0 ? void 0 : _a.textContent;
    const d = new Date();
    let text = d.toISOString();
    if (joke != " " && joke) {
        let acudit = {
            joke: joke,
            score: puntos,
            date: text
        };
        reportAcudits.push(acudit);
        console.log(reportAcudits);
    }
    AddJoke();
}
