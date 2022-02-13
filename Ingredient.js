"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Ingredient {
        constructor(_name, _storageSize, _nStorage, _barSize, _nBar, _nUnits, _preperationTime, _barPosition, _storagePostition) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
            this.nBar = _nBar;
            this.nStorage = _nStorage;
            this.barPosition = _barPosition;
            this.storagePosition = _storagePostition;
        }
        showBarMenu(_event) {
            let barMenu = document.querySelector("#barMenu");
            barMenu.classList.remove("isHidden");
            let x = _event.clientX;
            let y = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
            let ingredientName = document.querySelector("#ingredientName");
            ingredientName.innerHTML = this.name;
            let percantageDisplay = (this.nBar / this.barSize) * 100;
            let ingredientLevel = document.querySelector("#ingredientLevel");
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + "</br>" + this.nBar + "/" + this.barSize;
            let topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", this.placeTopping);
            this.clicked = true;
        }
        placeTopping() {
            Abschlussarbeit.movePoint = new Abschlussarbeit.Vector(this.barPosition.x, this.barPosition.y);
            console.log(Abschlussarbeit.movePoint);
        }
        showStorageMenu(_event) {
            let storageMenu = document.querySelector("#storageMenu");
            storageMenu.classList.remove("isHidden");
            let x = _event.clientX;
            let y = _event.clientY;
            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";
            let ingredientNameStorage = document.querySelector("#ingredientNameStorage");
            ingredientNameStorage.innerHTML = this.name;
            let percentageDisplayStorage = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);
            let ingredientLevelStorage = document.querySelector("#ingredientLevelStorage");
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;
            let prepareBtn = document.querySelector("#prepare");
            if (this.nStorage == 0 || Abschlussarbeit.employees[0].selected == false) {
                prepareBtn.classList.add("isHidden");
            }
            else if (Abschlussarbeit.employees[0].selected == true) {
                prepareBtn.classList.remove("isHidden");
            }
            prepareBtn.addEventListener("click", this.prepare);
            let orderBtn = document.querySelector("#orderBtn");
            if (this.nStorage == this.storageSize || Abschlussarbeit.employees[0].selected == false) {
                orderBtn.classList.add("isHidden");
            }
            else if (Abschlussarbeit.employees[0].selected == true) {
                orderBtn.classList.remove("isHidden");
            }
            orderBtn.addEventListener("click", this.orderIngredients);
        }
        static topIngredient() {
        }
        prepare() {
            //employee[0].move(1 / 50, employee[0].position.x, employee[0].position.y);
            console.log(this.preperationTime);
            Abschlussarbeit.movePoint = new Abschlussarbeit.Vector(this.storagePosition.x, this.storagePosition.y);
            let storageMenu = document.querySelector("#storageMenu");
            let prepareBtn = document.querySelector("#prepare");
            prepareBtn.classList.add("isHidden");
            let progress = document.createElement("div");
            progress.id = "progress";
            storageMenu.appendChild(progress);
            let pBar = document.createElement("div");
            pBar.id = "pBar";
            progress.appendChild(pBar);
            let neededFillAmount = this.barSize - this.nBar;
            //let nPreperation: number = 
            if (neededFillAmount > this.nStorage) {
                this.nStorage -= this.nStorage;
            }
            else {
                this.nStorage -= neededFillAmount;
            }
            Abschlussarbeit.Employee.busy = true;
            let counter = this.preperationTime;
            let assistenceNum = this.preperationTime;
            console.log(counter, assistenceNum);
            const interval = setInterval(function () {
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / assistenceNum) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    Abschlussarbeit.Employee.busy = false;
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    let fillBar = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Ingredient.fillBar);
                }
            }, 1000);
        }
        orderIngredients() {
            let storageMenu = document.querySelector("#storageMenu");
            let orderBtn = document.querySelector("#orderBtn");
            orderBtn.classList.add("isHidden");
            let progress = document.createElement("div");
            progress.id = "progress2";
            storageMenu.appendChild(progress);
            let pBar = document.createElement("div");
            pBar.id = "pBar2";
            progress.appendChild(pBar);
            let orderDuration = 50;
            let counter = orderDuration;
            const interval = setInterval(() => {
                //Pfeilfunktion genutzt, da sonst kein Zugriff auf this.XY möglich
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / 50) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    this.nStorage = this.storageSize;
                }
            }, 1000);
        }
        static fillBar() {
        }
    }
    Ingredient.breadArray = ["Yufka", "Döner"];
    Ingredient.mainIngridientArray = ["Normalen", "Hähnchen", "Falafel"];
    Ingredient.ingredientArray = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
    Ingredient.extrasArray = ["extra scharf", "mit Feta"];
    Abschlussarbeit.Ingredient = Ingredient;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Ingredient.js.map