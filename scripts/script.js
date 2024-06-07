

const page = document.getElementById("page");



let recipeId = "";

let currentCocktailImage= 0;
let currentCakeImage =0;
let currentChineseImage =0;
let currentMexicanImage= 0;
let currentHomeImage =0; 


let isLoading = false;
let current = "";

let homeImage = [
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let cocktailImage = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596463989140-3b600dab72e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let chineseImage = [
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570604127008-f644337cfb8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let cakeImage = [
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let mexicanImage = [
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167171750-419e95f877d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167359766-1514a5bc6618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const cocktailBaseUrl = "https://the-cocktail-db3.p.rapidapi.com/";
const chineseBaseUrl = "https://chinese-food-db.p.rapidapi.com/";
const mexicanBaseUrl = "https://the-mexican-food-db.p.rapidapi.com";
const cakeBaseUrl = "https://the-birthday-cake-db.p.rapidapi.com";


const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
    "x-rapidapi-host": "the-cocktail-db3.p.rapidapi.com",
  },
};

const options1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
    "x-rapidapi-host": "chinese-food-db.p.rapidapi.com",
  },
};
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
    "x-rapidapi-host": "the-birthday-cake-db.p.rapidapi.com",
  },
};
const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3c71195215msh25bb6f9a25c6cfap1aec8ejsnb119586d6393",
    "x-rapidapi-host": "the-mexican-food-db.p.rapidapi.com",
  },
};




function handleHome(){
    if(current ==="home"){
      return
    }
    home();
    current = "home"
}








function home(){
    page.innerHTML = `
                <div class="header">
                <img src="${
                  homeImage[ currentHomeImage]
                }" alt="Photo of food">
                <div>
                    <h1>get more than 2000 Recipes</h1>
                     <h2 id="image-backward1" class="backward"><<h2>
                     <h2 id="image-forward1" class="forward">><h2 >
                </div>
        </div>
        <div class="header">
            <img src="${
              chineseImage[ currentChineseImage]
            }" alt="Photo of food">
            <div>
                <h1>chinese Recipes</h1>
                 <h2 id="image-backward2" class="backward"><<h2>
                <h2 id="image-forward2" class="forward">><h2>
            </div>
        </div>
        <div class="header">
            <img src="${
              mexicanImage[ currentMexicanImage]
            }" alt="Photo of food">
            <div>
                <h1>Mexican Recipes</h1>
                 <h2 id="image-backward3" class="backward"><<h2>
                <h2 id="image-forward3" class="forward">><h2>
            </div>
        </div>
        <div class="header">
            <img src="${
              cakeImage[ currentCakeImage]
            }" alt="Photo of food">
            <div>
                <h1>Cake Recipes</h1>
                 <h2 id="image-backward4" class="backward"><<h2>
                <h2 id="image-forward4" class="forward">><h2>
            </div>
        </div>
        <div class="header">
            <img src="${
              cocktailImage[ currentCocktailImage]
            }" alt="Photo of food">
            <div>
                <h1>Cocktail Recipes</h1>
                <h2 id="image-backward5" class="backward"><<h2>
                <h2 id="image-forward5" class="forward">><h2>
            </div>
        </div>
      `;
}



function imageBackward(s){
      if(currentHomeImage === 0){
      currentHomeImage = 4;
     }
   else{
      currentHomeImage--;
      }
}

function imageforward(s) {
      if (currentHomeImage === 4) {
        currentHomeImage = 0;
      } else {
        currentHomeImage++;
      }

}


handleHome();

// EventListener



let forwardBtn1 = document.getElementById("image-forward1");
let forwardBtn2 = document.getElementById("image-forward2");
let forwardBtn3 = document.getElementById("image-forward3");
let forwardBtn4 = document.getElementById("image-forward4");
let forwardBtn5 = document.getElementById("image-forward5");

let backwardBtn1 = document.getElementById("image-backward1");
let backwardBtn2 = document.getElementById("image-backward2");
let backwardBtn3 = document.getElementById("image-backward3");
let backwardBtn4 = document.getElementById("image-backward4");
let backwardBtn5 = document.getElementById("image-backward5");


forwardBtn1.addEventListener("click", () => {
  imageforward("home");
});
forwardBtn2.addEventListener("click", () => {
  imageforward("chinese");
});
forwardBtn3.addEventListener("click", () => {
  imageforward("mexican");
});
forwardBtn4.addEventListener("click", () => {
  imageforward("cake");
});
forwardBtn5.addEventListener("click", () => {
  imageforward("cocktail");
});

backwardBtn1.addEventListener("click", () => {
  imageforward("home");
});
backwardBtn2.addEventListener("click", () => {
  imageforward("chinese");
});
backwardBtn3.addEventListener("click", () => {
  imageforward("mexican");
});
backwardBtn4.addEventListener("click", () => {
  imageforward("cake");
});
backwardBtn5.addEventListener("click", () => {
  imageforward("cocktail");
});

// var myFile = new File(["CONTENT"], "demo.txt", {
//   type: "text/plain;charset=utf-8",
// });

// saveAs(myFile);

