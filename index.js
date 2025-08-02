/*function showAnswer(response) {
    alert (response.data.answer);
}



let apiKey ="c56dcb7t88aa43c2b2f5cfa690a8917o";
let context = "be polite and provide a very short and direct answer";
let prompt = "who was the first female president?";
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer)*/
function handleClick(event) {
    alert("Hooray!");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);