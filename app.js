const searchSong = document.querySelector('#input-song-name');
const pressedButton = document.querySelector('#btn-get-song');
const songName = document.querySelector('#title-name');
const imageDisplay = document.getElementById("img-display");
const songOutput = document.querySelector('#output-song-name');


const nasaAPI = "https://api.spaceflightnewsapi.net/v3/articles";

initData();

function initData(){
    fetch(nasaAPI).then(getJson).then(updateDisplay).catch(reportError);
}

function updateDisplay(jsonObj){
    let nasaObjArray = jsonObj;
    let nasaObject = nasaObjArray;

   
    console.log(nasaObject);
}

function getJson(aResponse){
    return aResponse.json();
  }


function reportError(anError){
    console.log(anError);
}
