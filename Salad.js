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
            let percantageDisplay = this.nBar / this.barSize;
            let ingredientLevel = document.querySelector("#ingredientLevel");
            ingredientLevel.innerHTML = "Füllstand " + percantageDisplay + "%" + " (of)" + this.barSize;
        }
    }
    Abschlussarbeit.Salad = Salad;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Salad.js.map