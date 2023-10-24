let btnActionSc1 = document.getElementById("btn-action-sc1");

btnActionSc1.addEventListener("click", () => {
let month = parseInt(document.getElementById("month").value);

    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("31 ngày"); 
            break;
        case 2:
            alert("28 hoặc 29 ngày"); 
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("30 ngày"); 
            break;
    };
});