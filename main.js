"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    let human = [];
    Abschlussarbeit.employees = [];
    Abschlussarbeit.ingredients = [];
    let customers = [];
    let nEmployees;
    let nCustomer;
    let stockCapacity;
    let background;
    Abschlussarbeit.movePoint = new Abschlussarbeit.Vector(0, 0);
    // export let movePointX: number;
    // export let movePointY: number;
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
        console.log(Abschlussarbeit.stockFactor);
        nEmployees = Number(document.querySelector("#nEmployees").value);
        nCustomer = Number(document.querySelector("#nCustomers").value);
        console.log(nCustomer);
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
        canvas.addEventListener("click", hideMenus);
        canvas.addEventListener("click", detectClick);
        Abschlussarbeit.drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        createEmployees(nEmployees);
        console.log(nEmployees);
        createCustomer(nCustomer);
        console.log(nCustomer);
        let salad = new Abschlussarbeit.Ingredient("Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20, new Abschlussarbeit.Vector(350, 150), new Abschlussarbeit.Vector(150, 150));
        let onion = new Abschlussarbeit.Ingredient("Zwiebeln", 70 * Abschlussarbeit.stockFactor, 70 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 30);
        let corn = new Abschlussarbeit.Ingredient("Mais", 1000 * Abschlussarbeit.stockFactor, 1000 * Abschlussarbeit.stockFactor, 300, 300, 30, 5);
        let tomato = new Abschlussarbeit.Ingredient("Tomate", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 15);
        let kraut = new Abschlussarbeit.Ingredient("Kraut", 150 * Abschlussarbeit.stockFactor, 150 * Abschlussarbeit.stockFactor, 50, 50, 12.5, 10);
        let peperoni = new Abschlussarbeit.Ingredient("Peperoni", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 30, 30, 2, 5);
        Abschlussarbeit.ingredients.push(salad, onion, corn, tomato, kraut, peperoni);
        /* let testEmployee = new Employee(1);
        testEmployee.draw();
        employee.push(testEmployee); */
        window.setInterval(update, 50);
    }
    function createEmployees(_nEmployees) {
        for (let i = 0; i < _nEmployees; i++) {
            let newEmployee = new Abschlussarbeit.Employee(i);
            Abschlussarbeit.employees.push(newEmployee);
        }
    }
    function createCustomer(_nCustomer) {
        for (let i = 0; i < _nCustomer; i++) {
            let newCustomer = new Abschlussarbeit.Customer(i);
            customers.push(newCustomer);
        }
    }
    function callBarMenu(_event) {
        let target = _event.target.id;
        //VS Code meckert, aber es funktioniert
        console.log(target);
        if (target == "salad") {
            Abschlussarbeit.ingredients[0].showBarMenu(_event);
        }
        else if (target == "onion") {
            Abschlussarbeit.ingredients[1].showBarMenu(_event);
        }
        else if (target == "corn") {
            Abschlussarbeit.ingredients[2].showBarMenu(_event);
        }
        else if (target == "tomato") {
            Abschlussarbeit.ingredients[3].showBarMenu(_event);
        }
        else if (target == "kraut") {
            Abschlussarbeit.ingredients[4].showBarMenu(_event);
        }
        else if (target == "peperoni") {
            Abschlussarbeit.ingredients[5].showBarMenu(_event);
        }
    }
    function callStorageMenu(_event) {
        let target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            Abschlussarbeit.ingredients[0].showStorageMenu(_event);
        }
        else if (target == "onionStorage") {
            Abschlussarbeit.ingredients[1].showStorageMenu(_event);
        }
        else if (target == "cornStorage") {
            Abschlussarbeit.ingredients[2].showStorageMenu(_event);
        }
        else if (target == "tomatoStorage") {
            Abschlussarbeit.ingredients[3].showStorageMenu(_event);
        }
        else if (target == "krautStorage") {
            Abschlussarbeit.ingredients[4].showStorageMenu(_event);
        }
        else if (target == "peperoniStorage") {
            Abschlussarbeit.ingredients[5].showStorageMenu(_event);
        }
    }
    function hideMenus(_event) {
        let barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
        let storageMenu = document.querySelector("#storageMenu");
        storageMenu.classList.add("isHidden");
        Abschlussarbeit.Ingredient.clicked = false;
        console.log("ingr " + Abschlussarbeit.Ingredient.clicked);
    }
    function detectClick(_event) {
        let xClick = _event.clientX;
        let yClick = _event.clientY;
        //console.log(employee[].getClicked(xClick, yClick));
        console.log();
        for (let b of Abschlussarbeit.employees) {
            b.getClicked(xClick, yClick);
        }
    }
    function update() {
        Abschlussarbeit.crc2.putImageData(background, 0, 0);
        //employee.draw();
        for (let a of Abschlussarbeit.employees) {
            a.move(1 / 50);
            Abschlussarbeit.movePoint = new Abschlussarbeit.Vector(a.position.x, a.position.y);
            a.draw();
        }
        for (let a of customers) {
            a.draw();
            a.move(1 / 50);
        }
    }
    /* function drawShop(): void {
        crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.rect(400, 20, 120, 500);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(400, 20, 120, 500);
        crc2.stroke();
        
        crc2.rect(20, 20, 150, 550);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(20, 20, 150, 550);
        crc2.stroke();

        crc2.rect(170, 20, 230, 100);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(170, 20, 230, 100);
        crc2.stroke();

        crc2.rect(890, 150, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 150, 15, 15);
        crc2.stroke();

        crc2.rect(890, 225, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 225, 15, 15);
        crc2.stroke();
    } */
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map