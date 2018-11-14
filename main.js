const tabel = $("#tabel");
tabel.hide();
const apisettings = { 
    "url": "https://swapi.co/api/people/1/"
}


$("#button").on("click", function (){ 
    tabel.show();
$.ajax(apisettings).done(function (response) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");;
    tr.append(td);
    td.innerHTML = "1";

    let td1 = document.createElement("td");
    tr.append(td1); td1.append(response.name);

    let td2 = document.createElement("td");
    tr.append(td2); td2.append(response.height + " cm");

    let td3 = document.createElement("td");
    tr.append(td3); td3.append(response.mass + " kg");

    let td4 = document.createElement("td");
    tr.append(td4); td4.append(response.hair_color);

    let td5 = document.createElement("td");
    tr.append(td5); td5.append(response.skin_color);
    
    tabel.append(tr);
});
});