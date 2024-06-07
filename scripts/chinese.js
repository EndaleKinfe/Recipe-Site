let chineseImage = [
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570604127008-f644337cfb8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const fetchChineseRecipe = () => {
  let datas = [];

  // const response = await fetch(ChineseBaseUrl, options);
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

function handleChinese() {
  if (current === "Chinese") {
    return;
  }
  let some = [];
  let data = fetchChineseRecipe();

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
  ChinesePage(data);
  current = "Chinese";
}

function ChinesePage(recipes) {
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
