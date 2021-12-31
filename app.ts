const API_URL:string="https://icanhazdadjoke.com/";


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
    console.log(data.joke);
})
  .catch(err => {
    console.error("ERROR: ", err.message)
  });
}