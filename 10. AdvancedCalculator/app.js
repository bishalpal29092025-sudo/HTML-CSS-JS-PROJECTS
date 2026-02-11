const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = " ";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInput(button.textContent);
  });
});

document.addEventListener('keydown', (event) =>{
    if( (event.key >= "0" && event.key <= 9) || 
    ["+", "-", "*", "/", "%", "."].includes(e.key)
 ){
    handleInput(event.key);
 }

 if(event.key === "Enter"){
    handleInput("=");
 }
 if(event.key === "Backspace"){
    handleInput("←");

 }

 if(event.key === "Escape"){
    handleInput("C");
 }

})

function handleInput(value) {
    if(value === "C"){
        expression = " ";
        display.textContent = "0";
        return;
    }

    if(value === "←"){
        expression = expression.slice(0, -1);
        display.textContent = expression || "0";
        return;
    }

    if(value === "="){
        try{
            const result = eval(expression);
            display.textContent = result;
            expression = result.toString();             
        } catch (error){
            display.textContent = "Error";
            expression = " ";
        }
        return;
    }

    expression += value;
    display.textContent = expression;
}
