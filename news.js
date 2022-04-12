const searchbarInput = document.querySelector('#searchbar');

const newsTitle = document.querySelector('#news-title');
const newsImage = document.querySelector('#news-img');
const newsInfo = document.querySelector('#news-info');

const outputList = document.getElementById("list-output");

//Picture information from The Astronomy Picture of the Day API
//let news = `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&title_contains=space`;
let news = `https://api.spaceflightnewsapi.net/v3/articles?_limit=10`;

//let pictureName = "";

//Initialise the app with data to produce a select for the characters
initData();


function initData(){
    fetch(news).then(getJson).then(updateDisplay).then(reportError);  
}



function getJson(aResponse){  //fetch response from API
    return aResponse.json();
}



function updateDisplay(jsonObj){ 
    let newsObjArray = jsonObj;

    for (let aNewsObj of newsObjArray){
        let newsObj = aNewsObj;
    //for (let i=0; i<10; i++){
        const newCardNews = document.createElement('ion-card');
        newCardNews.setAttribute("style", "margin-bottom:5%;");

        const newCardHeader = document.createElement('ion-card-header');

        const cardTitle = document.createElement('ion-card-title');
        cardTitle.className = "small ion-text-center"; //Assign div class

        const newCardContent = document.createElement('ion-card-content');
        newCardContent.setAttribute("style", "margin-bottom:5%;");

        const cardImage = document.createElement('ion-img');
        cardImage.setAttribute("style", "margin-bottom:5%;"); //Set div attributes

        const newsInfo = document.createElement('p');
        newsInfo.className = "ion-text-center";
        newsInfo.setAttribute("style", "margin-bottom:5%;");

        const rightDiv = document.createElement('div');
        rightDiv.className = "ion-text-right";

        const link = document.createElement('a');


        //const cardTitle = document.createElement('ion-card-title');

        //for (let aNewsObj of newsObjArray){
          //  let newsObj = aNewsObj;
            //makeDetailsList(newsObj);
            outputList.appendChild(newCardNews);
            newCardNews.appendChild(newCardHeader);
            newCardHeader.appendChild(cardTitle);

            newCardNews.appendChild(newCardContent);
            newCardContent.appendChild(cardImage);
            newCardContent.appendChild(newsInfo);
            newCardContent.appendChild(rightDiv);
            rightDiv.appendChild(link);

            cardTitle.textContent = newsObj.title;
            cardImage.src = newsObj.imageUrl;
            newsInfo.textContent = newsObj.summary;
            link.href = newsObj.url;
            link.innerHTML = "Read more";
            
    }
    console.log(newsObjArray);    
}



function reportError(anError){
    let error = anError;
    console.log(error);
    
}

function searchInput()
{
    let output = searchbarInput.value;
    console.log(output);
}
/*
function makeDetailsList(aNewsObj){
    let characterPropertyList = ["birthday", "nickname", "portrayed", "status"];
  
    for (let characterProperty of characterPropertyList){
      const newItem = document.createElement('ion-item');
      let outputText = characterProperty.toUpperCase() + ":   " + aNewsObj[characterProperty];
      newItem.textContent = outputText;
  
      outputList.appendChild(newItem);
    }
}
*/