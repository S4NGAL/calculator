let numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"]
let signs = ["+", "-", "/", "X", ".", "=", "del", "C"]

const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        console.log(buttons[i].textContent);
        console.log("contains number: ", numbers.includes(buttons[i].textContent));
        console.log("contains sign: ", signs.includes(buttons[i].textContent));
    });
}