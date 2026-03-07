const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

input.addEventListener("input", updatePreview);

function updatePreview(){
    let text = input.value;
    text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
    text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");

    text = text.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");
    text = text.replace(/\*(.*?)\*/gim, "<i>$1</i>");


    text = text.replace(/\n/gim, "<br>");
    preview.innerHTML = text;
}