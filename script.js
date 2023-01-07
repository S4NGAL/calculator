let numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"]
let signs = ["+", "-", "/", "X"]
let text;
const display = document.getElementById("display");
let answer = 0;
let equation1 = "";
let equation2 = "";
let total = 0;
let singHolder = "";
display.textContent = equation1+ singHolder + equation2;

const equal = document.getElementById("equals");
equal.addEventListener("click", function(){
    switch (singHolder) {
        case "+": 
            answer = Number(equation1) + Number(equation2);
            text = equation1 + " + " + equation2 + " = " + String(Number(equation1) + Number(equation2));
            console.log(text);
            display.textContent = text;
            reset();
            break;
        
        case "-":   
            answer = Number(equation1) - Number(equation2);
            text = equation1 + " - " + equation2 + " = " + String(Number(equation1) - Number(equation2));
            display.textContent = text;
            reset();
            break;
        
        case "/":   
            answer = Number(equation1) / Number(equation2);
            text = equation1 + " / " + equation2 + " = " + String(Number(equation1) / Number(equation2));
            display.textContent = text;
            reset();
            break;
        
        case "X":   
            text = equation1 + " X " + equation2 + " = " + String(Number(equation1) * Number(equation2));
            answer = Number(equation1) * Number(equation2);
            display.textContent = text;
            reset();
            break;
    }
});

const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        calculate(buttons[i].textContent);
    });
}



function calculate(var1) {
    if (numbers.includes(var1)){
        if (singHolder === ""){
            equation1 += var1;
            console.log(equation1)
            display.textContent = equation1+ singHolder + equation2;

        } else {
            equation2 += var1;
            console.log(equation2);
            display.textContent = equation1+ singHolder + equation2;

        }
    } else if(signs.includes(var1)){
        singHolder = var1;
        console.log(singHolder);
        display.textContent = equation1+ singHolder + equation2;

    }
}

function reset() {
    equation1 = "";
    equation2 = "";
    total = 0;
    singHolder = "";
}

const answerButton = document.getElementById("answer");
answerButton.addEventListener("click", function(){
    if(answer === 0) {
        console.log("answer is empty")
        return "answer is empty"
    };
    if (equation1 === "") {
        console.log(answer)
        equation1 = answer;
        display.textContent = equation1+ singHolder + equation2;
    }else if (equation2 === ""){
        console.log(answer)
        equation2 = answer;
        display.textContent = equation1+ singHolder + equation2;

    }else{
        console.log("!!!both equations are fullified!!!!");
    }
});


function displayUpdater(){
    display.textContent = equation1+ singHolder + equation2;
}