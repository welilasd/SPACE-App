const imageTitle = document.querySelector('#img-title');
const imageOfTheDay = document.querySelector('#img-of-the-day');
const imageDate = document.querySelector('#img-date');
const imageInfo = document.querySelector('#img-info');
const imageAuthor = document.querySelector('#img-author');

//Picture information from The Astronomy Picture of the Day API
const pictures = `https://api.nasa.gov/planetary/apod?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;

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