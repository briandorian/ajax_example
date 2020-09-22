const DOGS_URL = "https://dog.ceo/api/breeds/image/random"
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"
const doggos = document.querySelector(".doggos");

/*<select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
  */  
function populateBreeds(){
    const breedsSelect = document.querySelector(".breeds");
    const promise= fetch(BREEDS_URL);
    promise
        .then(function (response) {
            let processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedReponse) {
            for (key in processedReponse.message) {
                let option = document.createElement("option");
                option.selectedIndex= 1;
                option.value=key;
                option.innerText = key;
                breedsSelect.add(option);
            }
        });
}

function addNewDogo(){
//spinner method
let img = document.createElement("img");
img.id = "loader";
doggos.appendChild(img);

const promise = fetch(DOGS_URL);

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
window.onload = function () {
    populateBreeds();
};
document.querySelector(".addDogo").addEventListener("click",addNewDogo);