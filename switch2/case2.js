let btnActionSc2 = document.getElementById("btn-action-sc2");

btnActionSc2.addEventListener("click", () => {

    let kv1 = (document.getElementById("kv1").value);
    let kv2nt = (document.getElementById("kv2-nt").value);
    let kv2 = (document.getElementById("kv2").value);
    let kv3 = (document.getElementById("kv3").value);

    let toan = parseInt(document.getElementById("toan").value);
    let van = parseInt(document.getElementById("van").value);
    let anh = parseInt(document.getElementById("anh").value);


    let tong = toan + van + anh;

    switch(tong){
        case kv1: 
        alert(`${tong + 0.75}`);
        break;
        case kv2nt:
        alert(`${tong + 0.5}`);
        break;
        case kv2:
        alert(`${tong + 0.25}`);
        break;
        case kv2nt:
        alert(`${tong}`);
        break;

    }
});