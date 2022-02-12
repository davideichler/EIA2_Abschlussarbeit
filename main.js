"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    let human = [];
    let nEmployees;
    let nCustomer;
    let stockCapacity;
    let background;
    // let stockCapacity: string;
    function handleLoad(_event) {
        let form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        let startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", createCanvas);
    }
    function handleChange(_event) {
        stockCapacity = document.querySelector('input[name="stockCapacity"]:checked').value;
        console.log(stockCapacity);
        if (stockCapacity == "high") {
            Abschlussarbeit.stockFactor = 1.2;
        }
        else if (stockCapacity == "low") {
            Abschlussarbeit.stockFactor = 0.8;
        }
        else if (stockCapacity == "medium") {
            Abschlussarbeit.stockFactor = 1.0;
        }
        // StockFactor ist noch buggy
        console.log(Abschlussarbeit.stockFactor);
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
            i.addEventListener("click", callBarMenu);
        }
        let storageContainer = document.querySelectorAll(".storage");
        for (let i of storageContainer) {
            i.addEventListener("click", callStorageMenu);
        }
        canvas.addEventListener("click", hideBarMenu);
        drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        let testEmployee = new Abschlussarbeit.Employee(1);
        testEmployee.draw();
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
    }
    function callBarMenu(_event) {
        let target = _event.target.id;
        //VS Code meckert, aber es funktioniert
        console.log(target);
        if (target == "salad") {
            Abschlussarbeit.Salad.showBarMenu(_event);
        }
        else {
        }
    }
    function callStorageMenu(_event) {
        let target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            Abschlussarbeit.Salad.showStorageMenu(_event);
        }
        else {
        }
    }
    function hideBarMenu(_event) {
        let barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
        let storageMenu = document.querySelector("#storageMenu");
        storageMenu.classList.add("isHidden");
    }
    function handleClick(_event) {
        /* let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden"); */
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map