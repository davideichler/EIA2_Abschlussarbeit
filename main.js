"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    let nEmployees;
    let nCustomer;
    let storageSize;
    let background;
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
        let barContainer = document.querySelectorAll(".bar");
        for (let i of barContainer) {
            i.addEventListener("click", showBarMenu);
        }
        canvas.addEventListener("click", handleClick);
        drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
    }
    function drawShop() {
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        Abschlussarbeit.crc2.rect(400, 20, 120, 500);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(400, 20, 120, 500);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(20, 20, 150, 550);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(20, 20, 150, 550);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(170, 20, 230, 100);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(170, 20, 230, 100);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(890, 150, 15, 15);
        Abschlussarbeit.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Abschlussarbeit.crc2.fillRect(890, 150, 15, 15);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(890, 225, 15, 15);
        Abschlussarbeit.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Abschlussarbeit.crc2.fillRect(890, 225, 15, 15);
        Abschlussarbeit.crc2.stroke();
        /* crc2.save(),
        crc2.translate(300, 20);
        crc2.beginPath(); */
    }
    function showBarMenu(_event) {
        let barMenu = document.querySelector("#barMenu");
        barMenu.classList.remove("isHidden");
        let x = _event.clientX;
        let y = _event.clientY;
        barMenu.style.marginLeft = x + 20 + "px";
        barMenu.style.marginTop = y + -50 + "px";
    }
    function handleClick(_event) {
        /* let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden"); */
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map