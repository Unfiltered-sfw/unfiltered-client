/*this will contain our JavaScript code */
/*Grab the input from teh user */
var input = document.querySelector("input");
document.querySelector("input").addEventListener("keyup", (e) => {
  /*only works when Enter key is clicked */
  clearOutput();
  if (e.which === 13) {
    getData(input.value);
  }
});
document.querySelector("button").addEventListener("click", (e) => {
  clearOutput();
  getData(input.value);
});
/*Get data from the API*/
function getData(input) {
  var API_KEY = "1XoNudgmzBisothIPE39T6DnM9CqncKk";
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    API_KEY +
    "&q=" +
    input +
    "&limit=14&offset=0&rating=g&lang=en"; /*this will only return maximum  25 gifs at a time*/
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data.data))
    .catch((e) => {
      console.log(e);
    });
}
/*Display the output*/
function showData(data) {
  data.forEach((element) => {
    let src = element.images.fixed_height.url;
    var output = document.querySelector(".output");
    output.innerHTML += "<a><img src=" + src + " onClick='insertGiphy()'></a>";
  });
}
/*clearing the ouptut*/
function clearOutput() {
  var output = document.querySelector(".output");
  output.innerHTML = "";
}

// onclick paste giphy
function insertGiphy() {
  // event listener on click for a/img
  // get clicked image
  const giphyUrl = e.target.src;
  //   target text area
  const textArea = document.querySelector("form-control");
  //   insert url to text area
  textArea.value += `\n${giphyUrl}\n`;
}
