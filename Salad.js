"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Bread extends Abschlussarbeit.Ingredient {
        constructor(_type, _positionX, _positionY) {
            super(_type, 1000, 1000, 1000, 1000, 1000, 1000, _positionX, _positionY, 0, 0);
            this.type = _type;
        }
        startMeal(_event) {
            let barMenu = document.querySelector("#barMenu");
            barMenu.classList.remove("isHidden");
            let x = _event.clientX;
            let y = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
            let ingredientName = document.querySelector("#ingredientName");
            ingredientName.innerHTML = this.type;
            let topIngredient = document.querySelector("#topIngredient");
            topIngredient.innerHTML = "Bestellung starten";
            topIngredient.addEventListener("click", this.placeTopping);
            this.clicked = true;
        }
    }
    Abschlussarbeit.Bread = Bread;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Salad.js.map