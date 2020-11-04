
const fontSizeRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
fontSizeRange.addEventListener('input', handleInputRange);
function handleInputRange(event) {
    spanText.style.fontSize = event.currentTarget.value + 'px';
}
