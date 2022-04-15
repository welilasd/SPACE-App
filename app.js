const imageTitle = document.querySelector('#img-title');
const imageOfTheDay = document.querySelector('#img-of-the-day');
const imageDate = document.querySelector('#img-date');
const imageInfo = document.querySelector('#img-info');
const imageAuthor = document.querySelector('#img-author');

//changing date of the pic
const dayInput = document.querySelector('#dayVal');
const monthInput = document.querySelector('#monthVal');
const yearInput = document.querySelector('#yearVal');

const findPicture = document.querySelector('#btn-find-picture');

//saving the picture to local storage
const savePicLocal = document.getElementById('btn-save-local');
const getPicLocal = document.getElementById('btn-get-local');
const outputImage = document.getElementById('output-image');


//Picture information from The Astronomy Picture of the Day API
let pictures = `https://api.nasa.gov/planetary/apod?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;


//Initialise the app with data to produce a select for the characters
initData();


function initData(){
    fetch(pictures).then(getJson).then(updateDisplay).then(reportError);  
}



function getJson(aResponse){  //fetch response from API
    return aResponse.json();
}



function updateDisplay(jsonObj){ 
    let picObj = jsonObj;
    console.log(picObj);

    imageTitle.textContent = picObj.title; //Get image title

    imageOfTheDay.src=picObj.url;

    if (picObj.copyright === undefined){
        imageAuthor.textContent = "";
    }
    else {
        imageAuthor.textContent = "by " + picObj.copyright;
    }

    imageDate.textContent=picObj.date;
    imageInfo.textContent=picObj.explanation;

    //alert - wrong date
    if (picObj.code === 400){
        presentAlert();

        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Check the date';
            alert.message = picObj.msg;
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            alert.present();
        }
    }
}


function reportError(anError){
    let error = anError;
    console.log(error);
    
}

//changing the picture of the day
findPicture.addEventListener('click', changePicture);

function changePicture(){
    let theDate = "";
    theDate = yearInput.value + "-" + monthInput.value + "-"  + dayInput.value;

    pictures = `https://api.nasa.gov/planetary/apod?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42&date=` + theDate + `&concept_tags=True`;
    initData();
}

//saving pictures to local storage
savePicLocal.addEventListener('click', saveToLocalStorage);
getPicLocal.addEventListener('click', getLocalStorage);

function saveToLocalStorage(){
    localStorage.setItem('Image URL', imageOfTheDay.src);
    console.log("Saved to Local Storage", imageOfTheDay.textContent);
}

function getLocalStorage(){
    const localData = localStorage.getItem('Image URL');
    console.log("Local data is ", localData);
    const newImage = document.createElement('ion-img');
    outputImage.appendChild(newImage);
    newImage.src=localData;
}
