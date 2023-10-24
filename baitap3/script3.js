

let btnAction3 = document.getElementById("btn-action3");

btnAction3.addEventListener("click", () => {
    let name = document.getElementById("name").value;
   
    switch(name){
        case "Ổi":
            alert('20000 VNĐ/kg');
            break;
        case "Dưa Hấu":
            alert('20000 VNĐ/kg');
            break;
        case "Táo":
            alert('30000 VNĐ/kg');
            break;
        case "Xoài":
            alert('30000 VNĐ/kg');
            break;
        case "Cam":
            alert('40000 VNĐ/kg');
            break;
        case "Chôm Chôm":
            alert('40000 VNĐ/kg');
             break;
        case "Măng Cụt":
                alert('50000 VNĐ/kg');
            break;
    }
});