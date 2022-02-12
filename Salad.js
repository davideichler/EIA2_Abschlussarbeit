"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Salad extends Abschlussarbeit.Ingredient {
        constructor() {
            super("Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20);
        }
        static showBarMenu(_event) {
            let barMenu = document.querySelector("#barMenu");
            barMenu.classList.remove("isHidden");
            let x = _event.clientX;
            let y = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
            let ingredientName = document.querySelector("#ingredientName");
            ingredientName.innerHTML = "Salat";
            let percantageDisplay = (this.nBar / this.barSize) * 100;
            console.log(percantageDisplay);
            let ingredientLevel = document.querySelector("#ingredientLevel");
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;
            let topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", Salad.placeTopping);
        }
        static showStorageMenu(_event) {
            let storageMenu = document.querySelector("#storageMenu");
            storageMenu.classList.remove("isHidden");
            let x = _event.clientX;
            let y = _event.clientY;
            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";
            let ingredientNameStorage = document.querySelector("#ingredientNameStorage");
            ingredientNameStorage.innerHTML = "Salat";
            let percentageDisplayStorage = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);
            let ingredientLevelStorage = document.querySelector("#ingredientLevelStorage");
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;
            let prepareBtn = document.querySelector("#prepare");
            if (this.nStorage == 0) {
                prepareBtn.classList.add("isHidden");
            }
            prepareBtn.addEventListener("click", Salad.prepare);
            let orderBtn = document.querySelector("#orderBtn");
            if (this.nStorage == this.storageSize) {
                orderBtn.classList.add("isHidden");
            }
            orderBtn.addEventListener("click", Salad.orderIngredients);
        }
        static placeTopping() {
        }
        static prepare() {
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
            let counter = 20;
            const interval = setInterval(function () {
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / 20) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    let fillBar = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Salad.fillBar);
                }
            }, 1000);
        }
        static fillBar() {
        }
        static orderIngredients() {
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
    }
    Salad.nBar = 25;
    Salad.barSize = 25;
    Salad.nStorage = 100 * Abschlussarbeit.stockFactor;
    Salad.storageSize = 100 * Abschlussarbeit.stockFactor;
    Salad.preperationTime = 20;
    Abschlussarbeit.Salad = Salad;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Salad.js.map