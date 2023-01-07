let numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"]
let signs = ["+", "-", "/", "X"]

let answer = 0;
let equation1 = "";
let equation2 = "";
let total = 0;
let singHolder = "";

const equal = document.getElementById("equals");
equal.addEventListener("click", function(){
    switch (singHolder) {
        case "+": 
            answer = Number(equation1) + Number(equation2);
            console.log(equation1 + " + " + equation2 + "= ", Number(equation1) + Number(equation2));
            reset();
            break;
        
        case "-":   
            answer = Number(equation1) + Number(equation2);
            console.log(equation1 + " - " + equation2 + "= ", Number(equation1) - Number(equation2));
            reset();
            break;
        
        case "/":   
            answer = Number(equation1) / Number(equation2);
            console.log(equation1 + " / " + equation2 + "= ", Number(equation1) / Number(equation2));
            reset();
            break;
        
        case "X":   
            console.log(equation1 + " X " + equation2 + "= ", Number(equation1) * Number(equation2));
            answer = Number(equation1) * Number(equation2);
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
        } else {
            equation2 += var1;
            console.log(equation2);
        }
    } else if(signs.includes(var1)){
        singHolder = var1;
        console.log(singHolder);
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
    }else if (equation2 === ""){
        console.log(answer)
        equation2 = answer;
    }else{
        console.log("!!!both equations are fullified!!!!");
    }
});