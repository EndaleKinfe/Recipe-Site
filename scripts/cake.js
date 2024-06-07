let cakeImage = [
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];



const fetchCakeRecipe = () => {
  let datas = [];

  // const response = await fetch(CakeBaseUrl, options);
  response = fetch("http://localhost:3000/coctailList")
    .then((response) => response.json())
    .then((data) => {
      for (let recipe of data) {
        datas.push(recipe);
      }
    })
    .catch((error) => console.log(error));
  return datas;
};

function handleCake() {
  if (current === "Cake") {
    return;
  }
  let some = [];
  let data = fetchCakeRecipe();

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
  CakePage(data);
  current = "Cake";
}

function CakePage(recipes) {
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
