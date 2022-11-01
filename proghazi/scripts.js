function order() {
    var name = document.getElementById("orderName").value;
    var address = document.getElementById("orderAddress").value;
    var tel = document.getElementById("orderTel").value;
    document.getElementById("orderNameBack").innerHTML = "Név: "+ name;
    document.getElementById("orderAddressBack").innerHTML = "Cím: "+ address; 
    document.getElementById("orderTelBack").innerHTML = "Telefon: "+ tel;
}
function orderFocus(y) {
    y.style.background = "#D0D0D0";
    y.style.background = "#D0D0D0";
    y.style.background = "#D0D0D0";
}
function orderBlur(x) {
    x.style.background = "#fff";
    x.style.background = "#fff";
    x.style.background = "#fff";
}