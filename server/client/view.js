console.log("loaded the view.js file")
fetch('/fetch')
  .then(response => response.json())
  .then(data => console.log(data));