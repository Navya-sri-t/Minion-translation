var btnTranslate=document.querySelector("#click")

var txtInput=document.querySelector("#txtinput")

var output=document.querySelector('#output')

var serverURL="https:api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL+"? text="+text
}

function errorHandler(error){
    alert("something wrong with server ! Try again after sometime")
}


function ClickHandler(){

    var inputtext=txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputtext))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    })
    .catch(errorHandler)
    

}

btnTranslate.addEventListener("click",ClickHandler)
