const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"
const doggos = document.querySelector(".doggos");


function addNewDogo(){
const promise = fetch(BREEDS_URL);

promise
    .then(function(response){
        let processingPromise=response.json();
        return processingPromise;
    })
    .then(function (processedReponse) {
        let img=document.createElement("img");
        img.src=processedReponse.message;
        img.alt="Cute doggo"
        doggos.appendChild(img);
    });
}
document.querySelector(".addDogo").addEventListener("click",addNewDogo);

