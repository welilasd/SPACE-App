const decades1 = document.querySelector('#decades-1');
const decades2 = document.querySelector('#decades-2');
const decades3 = document.querySelector('#decades-3');
const decades4 = document.querySelector('#decades-4');

const searchButton = document.querySelector('#view-details');


const outputList = document.querySelector('#output-list');

searchButton.addEventListener('click', searchEventFired);

//Picture information from The Astronomy Picture of the Day API
//let asteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`;
let asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;

//let pictureName = "";

//Initialise the app with data to produce a select for the characters
initData();


function initData(){
    fetch(asteroids).then(getJson).then(updateDisplay).then(reportError);  
}



function getJson(aResponse){  //fetch response from API
    return aResponse.json();
}

let astObj = "";
let aAstObj = "";
let astObjArray = "";
let astObjDate = ""; 

function updateDisplay(jsonObj){ 
    astObjArray = jsonObj.near_earth_objects[0].close_approach_data;
    console.log(astObjArray);
/*
    for (aAstObj of astObjArray){
        astObj = aAstObj;

        
    const newItem = document.createElement('ion-item');
    outputList.appendChild(newItem);
    astObjDate = astObj.close_approach_date;

    console.log(astObjDate);
    newItem.textContent = astObjDate; 
}*/
}



function reportError(anError){
    let error = anError;

        //presentAlert(error);
        console.log(error);
    
}





function searchEventFired(){
    console.log('lololol');
    
    //newItem.textContent = "lololol";

    for (aAstObj of astObjArray){
        astObj = aAstObj;

        const newItem = document.createElement('ion-item');
        newItem.setAttribute("style", "margin-left:5%;");
        outputList.appendChild(newItem);
    
        astObjDate = astObj.close_approach_date;

        console.log(astObjDate);
        newItem.textContent = astObjDate;
    }
}