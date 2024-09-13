// JavaScript Document
console.log("hi");

// CONSTANTEN
const openButton = document.querySelector("header > button");
const navigation = document.querySelector("nav");
const closeButton = document.querySelector("nav button");

// ---------- MENU ----------
function openMenu() {
    navigation.classList.toggle("toonMenu");
    console.log("change button?");
}

function closeMenu() {
    navigation.classList.remove("toonMenu");
}

openButton.onclick = openMenu;
closeButton.onclick = closeMenu;