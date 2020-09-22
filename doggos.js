const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"
const doggos = document.querySelector(".doggos");


function addNewDogo(){
//spinner method
let img = document.createElement("img");
img.id = "loader";
doggos.appendChild(img);


const promise = fetch(BREEDS_URL);

promise
    .then(function(response){
        let processingPromise=response.json();
        return processingPromise;
    })
    .then(function (processedReponse) {
        img=document.getElementById("loader");
        img.id="";
        img.src=processedReponse.message;
        img.alt="Cute doggo"
        doggos.appendChild(img);
    });
}
document.querySelector(".addDogo").addEventListener("click",addNewDogo);