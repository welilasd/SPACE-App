const searchbarInput = document.querySelector('#searchbar');

const newsTitle = document.querySelector('#news-title');
const newsImage = document.querySelector('#news-img');
const newsInfo = document.querySelector('#news-info');

const outputList = document.getElementById("list-output");

//Picture information from The Astronomy Picture of the Day API
let news = `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&title_contains=nasa`;

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
        const newCardHeader = document.createElement('ion-card-header');
        const cardTitle = document.createElement('ion-card-title');

        const newCardContent = document.createElement('ion-card-content');
        const cardImage = document.createElement('ion-img');
        const newsInfo = document.createElement('p');

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

            cardTitle.textContent = newsObj.title;
            cardImage.src = newsObj.imageUrl;
            newsInfo.textContent = newsObj.summary;
        //}
    }
    console.log(newsObjArray);    
}



function reportError(anError){
    let error = anError;
    console.log(error);
    
}

function makeDetailsList(aNewsObj){
    let characterPropertyList = ["birthday", "nickname", "portrayed", "status"];
  
    for (let characterProperty of characterPropertyList){
      const newItem = document.createElement('ion-item');
      let outputText = characterProperty.toUpperCase() + ":   " + aNewsObj[characterProperty];
      newItem.textContent = outputText;
  
      outputList.appendChild(newItem);
    }
}