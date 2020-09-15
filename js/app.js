const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", () => {
  // There are two main ways to make a request to an API.

  // Option 1 : XMLHTTPRequest
  // See https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
  const request = new XMLHttpRequest();
  request.onreadystatechange = (serverResponse) => {
    if(request.readyState === 4){
      console.log(serverResponse);
      console.log(serverResponse.target.response);
    }
  };
  request.open('GET','https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&api_key=1', true);
  request.send();

  // Option 2 : Fetch API
  // See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch('https://www.dnd5eapi.co/api/classes/bard', { method: "GET"})
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
});