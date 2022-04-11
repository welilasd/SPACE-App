const imageTitle = document.querySelector('#img-title');
const imageOfTheDay = document.querySelector('#img-of-the-day');
const imageDate = document.querySelector('#img-date');
const imageInfo = document.querySelector('#img-info');
const imageAuthor = document.querySelector('#img-author');

//Picture information from The Astronomy Picture of the Day API
let pictures = `https://api.nasa.gov/planetary/apod?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;

//let pictureName = "";

//Initialise the app with data to produce a select for the characters
initData();

function initData(){
    fetch(pictures).then(getJson).then(updateDisplay).then(reportError);  
}


function getJson(aResponse){  //fetch response from API
    return aResponse.json();
}


function updateDisplay(jsonObj){ 
    console.log(jsonObj);

    //let charName = jsonObj.title;      //Get character name
    imageTitle.textContent = jsonObj.title; //Get image title
    imageOfTheDay.src=jsonObj.url;
    imageAuthor.textContent = "by " + jsonObj.copyright;
    imageDate.textContent=jsonObj.date;
    imageInfo.textContent=jsonObj.explanation;
}

//-------------------------------------------------------------------

function reportError(anError){
    console.log(anError);
}

const dayInput = document.querySelector('#dayVal');
const monthInput = document.querySelector('#monthVal');
const yearInput = document.querySelector('#yearVal');

const outputLabel = document.querySelector('#lbl-output');

const makeDate = document.querySelector('#btn-date');
const findPicture = document.querySelector('#btn-find-picture');

makeDate.addEventListener('click', writeDate);

let theDate = "2022-01-01";

function writeDate()
{
    theDate = yearInput.value + "-" + monthInput.value + "-"  + dayInput.value;
    console.log(theDate);
    outputLabel.textContent = theDate;
}

findPicture.addEventListener('click', changePicture);

function changePicture(){
    pictures = `https://api.nasa.gov/planetary/apod?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42&date=2022-02-02&concept_tags=True`;
    initData();
    console.log(jsonObj);
}