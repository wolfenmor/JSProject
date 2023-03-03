let body = document.querySelector("body");

let target = document.querySelector(".target");
target.onclick = function () {

    let div = document.createElement("div");

    div.append(document.forms[0].firstName.value, document.forms[0].lastName.value, document.forms[0].age.value);
    div.appendChild(body);


}
