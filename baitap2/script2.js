let height = prompt("Please input your height in m: ");
let weight = prompt("Please input your weight in kg: ");

let bmi = weight / (height ^ 2);

if(bmi < 16){
    alert("Gầy độ III");

}else if(16 <= bmi < 17 ){
    alert("Gầy độ II");

}else if(17 <= bmi < 18.5){
    alert("Gầy độ I");

}else if(18.5 <= bmi < 25){
    alert(" Bình thường");

}else if(25 <= bmi < 30){
    alert("Thừa cân");

}else if(30 <= bmi < 35){
    alert("Béo phì độ 1");

}else if(35 <= bmi < 40){
    alert("Béo phì độ II");

}else (bmi > 40)
   {alert("Béo phì độ III");
};