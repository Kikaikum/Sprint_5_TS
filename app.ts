const API_URL:string="https://icanhazdadjoke.com/";

interface Acudit{
  joke:string;
  score:number;
  date:string;
}
//const reportAcudits:any=[];
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

function Joke(puntos:number){
  const joke=document.getElementById("jokes")?.textContent;
  const data = new Date();
  let dataISO = data.toISOString();
  
  if(joke !=" " && joke){
    let acudit: Acudit={
      joke:joke,
      score:puntos,
      date:dataISO
    };    
    reportAcudits.push(acudit);
    console.log(reportAcudits);
  }  
  AddJoke();
}


 