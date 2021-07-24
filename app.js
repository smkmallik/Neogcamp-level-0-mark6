var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

var getTranslationURL = (input) => {
    return serverURL + "?" + "text=" + input;
}

var errorHandler = (error) => {
    console.log("Error Occured!", error);
    alert("something wrong with the server! try again after sometime!");
}

var clickHandler = () => {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);