const API_URL:string="https://icanhazdadjoke.com/";
const API_URL1:string="https://api.chucknorris.io/jokes/random";
const API_TEMPS:string="https://www.el-tiempo.net/api/json/v2/provincias/08";
interface Acudit{
  joke:string;
  score:number;
  date:string;
}
let oldJoke:string;
var reportAcudits:Array<Acudit>=[];


function AddJoke(){
    fetch(API_URL, {
    headers: {
        'Accept':'application/json'
    }
})
  .then(response => {
    if (response.ok)        
        return response.json();    
  })  
  .then(function(data) {    
    var chiste:string=data.joke;    
    const dom:HTMLElement=document.getElementById("jokes") as HTMLElement;       
    dom.innerHTML = chiste;
    
})
  .catch(err => {
    console.error("ERROR: ", err.message)
  });
}

function AddJoke1(){
  fetch(API_URL1, {
  headers: {
      'Accept':'application/json'
  }
})
.then(response => {
  if (response.ok)        
      return response.json();    
})  
.then(function(data) {    
  var chiste:string=data.value;    
  const dom:HTMLElement=document.getElementById("jokes") as HTMLElement;       
  dom.innerHTML = chiste;
  
})
.catch(err => {
  console.error("ERROR: ", err.message)
});
}

function ShowJokes(){
  var kike=Math.floor(Math.random() * (1 + 1));
  if (kike==0){
    AddJoke();
  }
  else{
    AddJoke1();
  }
}

function Joke(puntos:number){
  const joke=document.getElementById("jokes")?.textContent;
  const data = new Date();
  let dataISO = data.toISOString();
  
  if(joke !=oldJoke && joke){
    let acudit: Acudit={
      joke:joke,
      score:puntos,
      date:dataISO
    };    
    reportAcudits.push(acudit);
    console.log(reportAcudits);
  }  
  ShowJokes();
  if(joke){
    oldJoke=joke;
  }
  
}

function temps(){
  fetch(API_TEMPS, {
    
})
  .then(response => {
    if (response.ok)        
        return response.json();    
  })  
  .then(function(data) {    
    let temps="El tiempo hoy: "+data.ciudades[6].stateSky.description;
    const dom:HTMLElement=document.getElementById("temps") as HTMLElement;       
    dom.innerHTML = temps;       
   
    
})
  .catch(err => {
    console.error("ERROR: ", err.message)
  });

}

window.onload=function(){
  temps();
  ShowJokes()
}

 