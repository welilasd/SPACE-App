const searchButton1 = document.querySelector('#view-details-1');
const searchButton2 = document.querySelector('#view-details-2');
const searchButton3 = document.querySelector('#view-details-3');
const searchButton4 = document.querySelector('#view-details-4');

const outputList1 = document.querySelector('#output-list-1');
const outputList2 = document.querySelector('#output-list-2');
const outputList3 = document.querySelector('#output-list-3');
const outputList4 = document.querySelector('#output-list-4');

searchButton1.addEventListener('click', searchEventFired1);
searchButton2.addEventListener('click', searchEventFired2);
searchButton3.addEventListener('click', searchEventFired3);
searchButton4.addEventListener('click', searchEventFired4);

//Picture information from The Astronomy Picture of the Day API
//let asteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
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


function searchEventFired1(){
    removeAllListItems();  //remove all previous list items

    //astObjDate = astObj.close_approach_date;
    /*let yyyy = "";
    let mm = "";
    let dd = "";
    let date = yyyy + "-" + mm + "-" + dd;

    if ((yyyy >= 1900) && (yyyy<=1950)){
    if (astObjDate == date){*/

        for (aAstObj of astObjArray){
            astObj = aAstObj;
    
            const newItem = document.createElement('ion-item');
            newItem.setAttribute("style", "margin-left:5%;");
            outputList1.appendChild(newItem);
        
            astObjDate = astObj.close_approach_date;
    
            console.log(astObjDate);
            newItem.textContent = astObjDate;
        }
}

function searchEventFired2(){
    removeAllListItems();  //remove all previous list items

    for (aAstObj of astObjArray){
        astObj = aAstObj;

        const newItem = document.createElement('ion-item');
        newItem.setAttribute("style", "margin-left:5%;");
        outputList2.appendChild(newItem);
    
        astObjDate = astObj.close_approach_date;

        console.log(astObjDate);
        newItem.textContent = astObjDate;
    }
}

function searchEventFired3(){
    removeAllListItems();  //remove all previous list items

    for (aAstObj of astObjArray){
        astObj = aAstObj;

        const newItem = document.createElement('ion-item');
        newItem.setAttribute("style", "margin-left:5%;");
        outputList3.appendChild(newItem);
    
        astObjDate = astObj.close_approach_date;

        console.log(astObjDate);
        newItem.textContent = astObjDate;
    }
}

function searchEventFired4(){
    removeAllListItems();  //remove all previous list items

    for (aAstObj of astObjArray){
        astObj = aAstObj;

        const newItem = document.createElement('ion-item');
        newItem.setAttribute("style", "margin-left:5%;");
        outputList4.appendChild(newItem);
    
        astObjDate = astObj.close_approach_date;

        console.log(astObjDate);
        newItem.textContent = astObjDate;
    }
}

function removeAllListItems(){
    while (outputList1.lastElementChild) {
      outputList1.removeChild(outputList1.lastElementChild);
    }
    while (outputList2.lastElementChild) {
        outputList2.removeChild(outputList2.lastElementChild);
    }

    while (outputList3.lastElementChild) {
        outputList3.removeChild(outputList3.lastElementChild);
    }

    while (outputList4.lastElementChild) {
        outputList4.removeChild(outputList4.lastElementChild);
    }
      
  }