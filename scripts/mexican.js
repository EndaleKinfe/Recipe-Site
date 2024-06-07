let mexicanImage = [
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167171750-419e95f877d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625167359766-1514a5bc6618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


const fetchMexicanRecipe = () => {
  let datas = [];

  // const response = await fetch(MexicanBaseUrl, options);
  response = fetch("http://localhost:3000/mexican")
    .then((response) => response.json())
    .then((data) => {
      for (let recipe of data) {
        datas.push(recipe);
      }
    })
    .catch((error) => console.log(error));
  return datas;
};


function handleMexican() {
  if (current === "Mexican") {
    return;
  }
  let some = [];
  let data = fetchMexicanRecipe();

  var s = "";
  var se = data.forEach((element) => {
    s.concat(element);
  });
  console.log(s);
  // // var s = data.text();
  // var myBlob = new Blob([s], { type: "json" });
  // var url = window.URL.createObjectURL(myBlob);
  // var anchor = document.createElement("a");
  // anchor.href = url;
  // anchor.download = "demo.json";
  // anchor.text = "click";
  // homebtn.append(anchor);
  MexicanPage(data);
  current = "Mexican";
}

function MexicanPage(recipes) {
  for (let recipe of recipes) {
    let listContainer = document.getElementById("list");
    let markup = ` <li>
                <div class="card">
                   <img src=${recipe.image} alt="" />
                    <div class="disc">
                    <div>${recipe.difficulty}</div>
                    <h3>${recipe.title}</h3>
                </div>
                </div>
              </li>
            `;
    listContainer.innerHTML = markup;
  }
}
