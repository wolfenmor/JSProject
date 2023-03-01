// створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement(`div`);

block.classList.add("wrap", "collapse", "alpha", "beta");

block.style.background = "silver";

block.style.color = "black"

block.style.fontSize = "50px";

block.innerText = "hello world";

let body = document.querySelector(`body`);
body.appendChild(block);

const clone = block.cloneNode(true);
body.appendChild(clone);
//
