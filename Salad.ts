namespace Abschlussarbeit {
    export class Bread extends Ingredient {

        type: string;
        constructor(_type: string, _positionX: number, _positionY: number) {
            super(_type, 1000, 1000, 1000, 1000, 1000, 1000, _positionX, _positionY, 0, 0);
            this.type = _type;
        }

        startMeal(_event: MouseEvent): void {
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = this.type;

            let topIngredient: HTMLButtonElement = document.querySelector("#topIngredient")!;
            topIngredient.innerHTML = "Bestellung starten";
            topIngredient.addEventListener("click", this.placeTopping);

            this.clicked = true;
        }
    }
}

        
      
 