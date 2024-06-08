let mexicanImage = [
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167171750-419e95f877d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167359766-1514a5bc6618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const page = document.getElementById("page");
const listContainer = document.getElementById("list");

const fetchMexicanRecipe = () => {
  response = fetch("http://localhost:3000/mexican")
    .then((response) => response.json())
    .then((data) => {
      for (let recipe of data) {

        let listElement = document.createElement("li");
        let card = document.createElement("div");
        card.classList.add("card")
          card.id = recipe.id;
          card.onclick = () => {
            fetch(`http://localhost:3001/${recipe.id}`)
              .then((response) => response.json())
              .then((recipes) => {
                console.log(recipes);
                page.innerHTML = ` <div class="container"
      <section class="main">
        <div class="food-img">
          <img src=${recipes.image} alt="" />
        </div>
        <div class="food-desc">
          <h1>${recipes.title}</h1>
          <p class="desc">Description: ${recipes.description}</p>
          <div class="prep-time">
            <h3>Information</h3>
            <ul>
              <li><span class="bold">Time:</span>${recipes.time}</li>
              <li><span class="bold">Portion size:</span>${recipes.portion}</li>
              <li><span class="bold">Difficulty:</span>${recipes.difficulty}</li>
            </ul>
          </div>
          </div>
      </section>
       <hr>
      <section class="ingrident">
          <h2>Ingredients</h2>
          <ul id="ingredientslist">
          
          </ul>
      </section>
      <hr/>
      <section class="instruction">
          <h2>Instructions</h2>
          <ol id="instructionlist">
           
          </ol>
  
      </section>
      </div>
    `;
                for(ingredient of recipes.ingredients){
                  let el  = document.createElement("li");
                  el.innerText = ingredient;
                  document.getElementById("ingredientslist").append(el)
                }
                let i=1;
                for(instruction of recipes.method){
                  let els = document.createElement("li");
                  els.innerText = instruction[`step ${i}`];
                  i++;
                  document.getElementById("instructionlist").append(els);
                }
              })
              .catch((error) => console.log(error));
          };
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



fetchMexicanRecipe()

// slider

let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);