"use strict";
const API_URL = "https://icanhazdadjoke.com/";
//const reportAcudits:any=[];
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
    AddJoke();
}
