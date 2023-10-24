let btnAction1 = document.getElementById("btn-action1");



btnAction1.addEventListener("click", () => {
    let amount = parseInt(document.getElementById("money").value);
    
let a = (document.getElementById("input1")).innerText;
let b = (document.getElementById("input2")).innerText;

let input = document.getElementById("input");
let output = document.getElementById("output");

let c = (document.getElementById("output1")).innerText;
let d = (document.getElementById("output2")).innerText;
    
    if (input === a, output === b){
        alert(` Result:  ${amount / 24540} USD`);

    }else(input === b, output === a);{
        alert(` Result:  ${amount * 24540} VND`);
    }
    });
