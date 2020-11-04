const activeInput = document.querySelector("#validation-input");
activeInput.addEventListener("blur", inputFocus);
function inputFocus() {
    if (activeInput.value.length == activeInput.dataset.length) {
        activeInput.classList.add("valid");
        activeInput.classList.remove("invalid"); 
        console.log("green");
    } else {
        activeInput.classList.add("invalid");
        activeInput.classList.remove("valid");  
        console.log("red");
    }
}


