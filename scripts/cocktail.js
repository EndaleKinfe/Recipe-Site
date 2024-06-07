let cocktailImage = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596463989140-3b600dab72e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const listContainer = document.getElementById("list");


const fetchCocktailRecipe = () => {
  // const response = await fetch(cocktailBaseUrl, options);
  response = fetch("http://localhost:3000/coctailList")
    .then((response) => response.json())
    .then((data) => {
      for (let recipe of data) {

        let listElement = document.createElement("li");
        let card = document.createElement("div");
        card.classList.add("card")
        let image = document.createElement("img");
        image.src = recipe.image;
        image.alt = `image of ${recipe.title}`;
        let disc = document.createElement("div")
        disc.classList.add("disc");
        let difficulty = document.createElement("p")
        difficulty.innerText = recipe.difficulty;
        let title = document.createElement("h3")
        title.innerText = recipe.title;
        disc.append(difficulty);
        disc.append(title);
        card.append(image);
        card.append(disc)
        listElement.append(card)
        listContainer.append(listElement)
  }
      
    })
    .catch((error) => console.log(error));

};

function handleCocktail() {
    fetchCocktailRecipe();
  
// console.log(JSON.stringify(data, null, 4));
// console.log(data.length)
// //   var url = window.URL.createObjectURL(fs);
// //   var anchor = document.createElement("a");
// //   anchor.href = url;
// //   anchor.download = "demo.json";
// //   anchor.text = "click";

// //   document.getElementById('homebtn').append(anchor);
//   CocktailPage(data);
//   console.log(data)
}



handleCocktail()
