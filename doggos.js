const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"
const doggos = document.querySelector(".doggos");

const promise = fetch(BREEDS_URL);
promise
    .then(function(response){
        const processingPromise=response.json();
        return processingPromise;
    })
    .then(function (processedReponse) {
        const img=document.createElement("img");
        img.src=processedReponse.message;
        img.alt="Cute doggo"
        doggos.appendChild(img);
    });

console.log("This will log first");

