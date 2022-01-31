"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    let nEmployees;
    let nCustomer;
    let storageSize;
    // let storageSize: string;
    function handleLoad(_event) {
        let form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        let startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", createCanvas);
    }
    function handleChange(_event) {
        storageSize = document.querySelector('input[name="storageSize"]:checked').value;
        console.log(storageSize);
        nEmployees = document.querySelector("#nEmployees").value;
        console.log(nEmployees);
        // Zuordnung aller Variablen
    }
    function createCanvas() {
        let form = document.getElementById("form");
        form.classList.add("isHidden");
        let mainContainer = document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");
        let canvas = document.querySelector("canvas");
        Abschlussarbeit.crc2 = canvas.getContext("2d");
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map