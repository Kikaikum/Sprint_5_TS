const API_URL:string="https://icanhazdadjoke.com/";

const reportAcudits:any=[];
const acudit={};
interface Acudit{
  joke:string;
  score:number;
  date:string;
}

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
  const d = new Date();
  let text = d.toISOString();
  
  if(joke !=" " && joke){
    let acudit: Acudit={
      joke:joke,
      score:puntos,
      date:text
    };
    reportAcudits.push(acudit);
    console.log(reportAcudits);
  }
  
  
  AddJoke();
}


 