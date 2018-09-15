var yoga = [];
fetch("./yoga_api/yoga_api.json")
  .then(response => response.json())
  .then(json => yoga = json);

function getYogaPose() {
    return yoga[Math.floor(Math.random() * yoga.length)]["img_url"];
}