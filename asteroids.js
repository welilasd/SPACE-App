const searchButton1 = document.querySelector('#view-details-1');
const searchButton2 = document.querySelector('#view-details-2');
const searchButton3 = document.querySelector('#view-details-3');
const searchButton4 = document.querySelector('#view-details-4');

const outputList1 = document.querySelector('#output-list-1');
const outputList2 = document.querySelector('#output-list-2');
const outputList3 = document.querySelector('#output-list-3');
const outputList4 = document.querySelector('#output-list-4');

const searchByYear = document.querySelector('#btn-search');
const inputLabel = document.querySelector('#lbl-input');
const outputLabel = document.querySelector('#lbl-output');


searchButton1.addEventListener('click', searchEventFired1);
searchButton2.addEventListener('click', searchEventFired2);
searchButton3.addEventListener('click', searchEventFired3);
searchButton4.addEventListener('click', searchEventFired4);

//Picture information from The Astronomy Picture of the Day API
//let asteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
let asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
let searchValue = "2005-03-08";
//let asteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=` + searchValue + `&end_date=` + searchValue + `&api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
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
    
    //astObjArray = jsonObj //.near_earth_objects[0].close_approach_data;
    
    astObjArray = jsonObj//.near_earth_objects[searchValue][0].close_approach_data[0];//.near_earth_objects[0].close_approach_data;
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
    asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
    initData();


    let astObjArray1 = astObjArray.near_earth_objects[0].close_approach_data;

    //astObjDate = astObj.close_approach_date;
    /*let yyyy = "";
    let mm = "";
    let dd = "";
    let date = yyyy + "-" + mm + "-" + dd;

    if ((yyyy >= 1900) && (yyyy<=1950)){
    if (astObjDate == date){*/

        for (aAstObj of astObjArray1){
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
    removeAllListItems();  
    asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
    initData();
    
    let astObjArray2 = astObjArray.near_earth_objects[1].close_approach_data;

    for (aAstObj of astObjArray2){
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
    removeAllListItems();  
    asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
    initData();
    let astObjArray3 = astObjArray.near_earth_objects[0].close_approach_data;

    for (aAstObj of astObjArray3){
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
    removeAllListItems();
    asteroids = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
    initData();
    let astObjArray4 = astObjArray.near_earth_objects[0].close_approach_data;

    for (aAstObj of astObjArray4){
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

    while (outputLabel.lastElementChild) {
        outputLabel.removeChild(outputLabel.lastElementChild);
    }
      
  }

  
  searchByYear.addEventListener('click', displayDetails);

  
function displayDetails() {
    removeAllListItems();
  
    asteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=` + searchValue + `&end_date=` + searchValue + `&api_key=3CI8CnF7E6wnqAFTQaXaFjs01Q1HBZJCSFqYVg42`;
    searchValue = inputLabel.value;
        
    initData();

    updateOutputLabel();
 

}

function updateOutputLabel(){
    //astObjArray = astObjArray.near_earth_objects[searchValue][0].close_approach_data[0];//.near_earth_objects[0].close_approach_data;
    
    let astObjArray5 = astObjArray.near_earth_objects[searchValue][0].close_approach_data[0];//.near_earth_objects[0].close_approach_data;
     //astObjArray5 = astObjArray.near_earth_objects["2005-03-08"][0].close_approach_data//.near_earth_objects[searchValue][0].close_approach_data[0];//.near_earth_objects[0].close_approach_data;
    console.log(astObjArray5);
    
    //date
    const approachDate = document.createElement('ion-item');
    approachDate.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(approachDate);
    approachDate.textContent = "Approach Date: " + astObjArray5.close_approach_date_full; 
    //astObjArray = astObjArray.near_earth_objects[0].close_approach_data;
    //distance
    const astDistance = document.createElement('ion-item');
    astDistance.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(astDistance);
    astDistance.textContent = "Astronomical Distance: " + astObjArray5.miss_distance.astronomical;
    
    const kmDistance = document.createElement('ion-item');
    kmDistance.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(kmDistance);
    kmDistance.textContent = "Kilomenters Distance: " + astObjArray5.miss_distance.kilometers;

    const lunarDistance = document.createElement('ion-item');
    lunarDistance.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(lunarDistance);
    lunarDistance.textContent = "Lunar Distance: " + astObjArray5.miss_distance.lunar;

    const milDistance = document.createElement('ion-item');
    milDistance.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(milDistance);
    milDistance.textContent = "Miles Distance: " + astObjArray5.miss_distance.miles;


    //velocity
    const kmVelocity = document.createElement('ion-item');
    kmVelocity.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(kmVelocity);
    kmVelocity.textContent = "Kilometers per hour: " + astObjArray5.relative_velocity.kilometers_per_hour;

    const milVelocity = document.createElement('ion-item');
    milVelocity.setAttribute("style", "margin-left:5%; margin-top:0%");
    outputLabel.appendChild(milVelocity);
    milVelocity.textContent = "Miles per hour: " + astObjArray5.relative_velocity.miles_per_hour;
    console.log(astObjArray5);
}
