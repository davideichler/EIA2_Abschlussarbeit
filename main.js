"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    let human = [];
    Abschlussarbeit.employees = [];
    for (let index = 0; index < Abschlussarbeit.employees.length; index++) {
        Abschlussarbeit.anyEmployee = Abschlussarbeit.employees[index];
    }
    Abschlussarbeit.ingredients = [];
    let customers = [];
    Abschlussarbeit.orders = [];
    let nEmployees;
    let nCustomer;
    let timeCustomer;
    let stockCapacity;
    let moodCapacity;
    let background;
    Abschlussarbeit.gametime = 0;
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
        moodCapacity = document.querySelector('input[name="moodFactor"]:checked').value;
        if (moodCapacity == "high") {
            Abschlussarbeit.moodFactor = 1.2;
        }
        else if (moodCapacity == "low") {
            Abschlussarbeit.moodFactor = 0.8;
        }
        else if (moodCapacity == "medium") {
            Abschlussarbeit.moodFactor = 1.0;
        }
        console.log(Abschlussarbeit.stockFactor);
        nEmployees = Number(document.querySelector("#nEmployees").value);
        timeCustomer = Number(document.querySelector("#nCustomers").value);
        console.log(timeCustomer);
        /* window.setInterval(createCustomer, timeCustomer * 100);
        console.log(nCustomer); */
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
        canvas.addEventListener("click", detectClickCustomer);
        Abschlussarbeit.drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        createEmployees(nEmployees);
        console.log(nEmployees);
        createCustomer(timeCustomer);
        /* let firstCustomer: Customer = new Customer (0);
        customers.push(firstCustomer); */
        // console.log(timeCustomer);
        // window.setInterval(createCustomer, timeCustomer);
        // console.log(nCustomer);
        let salad = new Abschlussarbeit.Ingredient("Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20, 350, 150, 150, 150);
        let onion = new Abschlussarbeit.Ingredient("Zwiebeln", 70 * Abschlussarbeit.stockFactor, 70 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 30, 350, 180, 150, 180);
        let corn = new Abschlussarbeit.Ingredient("Mais", 1000 * Abschlussarbeit.stockFactor, 1000 * Abschlussarbeit.stockFactor, 300, 300, 30, 5, 350, 210, 150, 210);
        let tomato = new Abschlussarbeit.Ingredient("Tomate", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 15, 350, 240, 150, 240);
        let kraut = new Abschlussarbeit.Ingredient("Kraut", 150 * Abschlussarbeit.stockFactor, 150 * Abschlussarbeit.stockFactor, 50, 50, 12.5, 10, 350, 270, 150, 270);
        let peperoni = new Abschlussarbeit.Ingredient("Peperoni", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 30, 30, 2, 5, 350, 300, 150, 300);
        let doener = new Abschlussarbeit.Ingredient("doener", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        let yufka = new Abschlussarbeit.Ingredient("yufka", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        let classic = new Abschlussarbeit.Ingredient("classic", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        let chicken = new Abschlussarbeit.Ingredient("chicken", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        let falafel = new Abschlussarbeit.Ingredient("falafel", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        Abschlussarbeit.ingredients.push(salad, onion, corn, tomato, kraut, peperoni, doener, yufka, classic, chicken, falafel);
        window.setInterval(countGametime, 1000);
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
        else if (target == "yufka") {
            Abschlussarbeit.ingredients[6].showBarMenu(_event);
        }
        else if (target == "doener") {
            Abschlussarbeit.ingredients[7].showBarMenu(_event);
        }
        else if (target == "classicKebab") {
            Abschlussarbeit.ingredients[8].showBarMenu(_event);
        }
        else if (target == "chickenKebab") {
            Abschlussarbeit.ingredients[9].showBarMenu(_event);
        }
        else if (target == "falafel") {
            Abschlussarbeit.ingredients[10].showBarMenu(_event);
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
        let breakBtn = document.querySelector("#breakBtn");
        breakBtn.classList.add("isHidden");
    }
    function detectClick(_event) {
        let xClick = _event.clientX;
        let yClick = _event.clientY;
        //console.log(employees[0].getClicked(xClick, yClick));
        for (let b of Abschlussarbeit.employees) {
            b.getClicked(xClick, yClick);
        }
    }
    function detectClickCustomer(_event) {
        let xClick = _event.clientX;
        let yClick = _event.clientY;
        //console.log(customers[0].getClicked(xClick, yClick));
        for (let c of customers) {
            c.getClicked(xClick, yClick);
        }
    }
    function update() {
        Abschlussarbeit.crc2.putImageData(background, 0, 0);
        //employee.draw();
        for (let a of Abschlussarbeit.employees) {
            a.move(1 / 50);
            a.draw();
        }
        for (let a of customers) {
            a.draw();
            a.move(1 / 50);
        }
    }
    function countGametime() {
        Abschlussarbeit.gametime++;
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map