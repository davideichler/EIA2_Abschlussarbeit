namespace Abschlussarbeit {
    export class Salad extends Ingredient {
        static nBar: number;
        static barSize: number;
                
        constructor() {
            super("Salat", 100 * stockFactor, 100 * stockFactor, 25, 25, 2, 20);
        }

        static showBarMenu(_event: MouseEvent): void {
            
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = "Salat";

            let percantageDisplay: number = this.nBar / this.barSize;

            let ingredientLevel: HTMLParagraphElement = document.querySelector("#ingredientLevel")!;
            ingredientLevel.innerHTML = "Füllstand " + percantageDisplay + "%" + " (of)" + this.barSize;
        }
    }    
}