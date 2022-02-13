"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Ingredient {
        constructor(_name, _storageSize, _nStorage, _barSize, _nBar, _nUnits, _preperationTime) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
            this.nBar = _nBar;
            this.nStorage = _nStorage;
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
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;
            let topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", Ingredient.placeTopping);
            this.clicked = true;
        }
        placeTopping() {
        }
        static showStorageMenu(_event) {
        }
        static topIngredient() {
        }
        static prepare() {
        }
    }
    Ingredient.breadArray = ["Yufka", "Döner"];
    Ingredient.mainIngridientArray = ["Normalen", "Hähnchen", "Falafel"];
    Ingredient.ingredientArray = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
    Ingredient.extrasArray = ["extra scharf", "mit Feta"];
    Abschlussarbeit.Ingredient = Ingredient;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Ingredient.js.map