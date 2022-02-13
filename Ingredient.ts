namespace Abschlussarbeit {
    export class Ingredient {
        static breadArray: string[] = ["Yufka", "Döner"];
        static mainIngridientArray: string[] = ["Normalen", "Hähnchen", "Falafel"];
        static ingredientArray: string[] = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
        static extrasArray: string[] = ["extra scharf", "mit Feta"];
        static clicked: boolean;
        static nBar: number;
        static barSize: number;
        static preperationTime: number;

        public name: string;
        public storageSize: number;
        public nStorage: number;
        public barSize: number;
        public nBar: number;
        public nUnits: number;
        public preperationTime: number;
        public clicked: boolean;
        public storagePosition: Vector;
        public barPosition: Vector;
        
        constructor(_name: string, _storageSize: number, _nStorage: number, _barSize: number, _nBar: number, _nUnits: number, _preperationTime: number, _barPosition: Vector, _storagePostition: Vector) {
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

        showBarMenu(_event: MouseEvent): void {
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = this.name;

            let percantageDisplay: number = (this.nBar / this.barSize) * 100;

            let ingredientLevel: HTMLParagraphElement = document.querySelector("#ingredientLevel")!;
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + "</br>" + this.nBar + "/" + this.barSize;

            let topIngredient: HTMLButtonElement = document.querySelector("#topIngredient")!;
            topIngredient.addEventListener("click", this.placeTopping);

            this.clicked = true;
        }

        placeTopping(): void {
            movePoint = new Vector (this.barPosition.x, this.barPosition.y);
            console.log(movePoint);
        }

        showStorageMenu(_event: MouseEvent): void {
            let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
            storageMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";

            let ingredientNameStorage: HTMLParagraphElement = document.querySelector("#ingredientNameStorage")!;
            ingredientNameStorage.innerHTML = this.name;

            let percentageDisplayStorage: number = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);

            let ingredientLevelStorage: HTMLParagraphElement = document.querySelector("#ingredientLevelStorage")!;
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;

            let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
            if (this.nStorage == 0 || employees[0].selected == false) {
                prepareBtn.classList.add("isHidden");
            } else if (employees[0].selected == true) {
                prepareBtn.classList.remove("isHidden");
            } 
            prepareBtn.addEventListener("click", this.prepare);

            let orderBtn: HTMLButtonElement = document.querySelector("#orderBtn")!;
            if (this.nStorage == this.storageSize || employees[0].selected == false) {
                orderBtn.classList.add("isHidden");
            } else if (employees[0].selected == true) {
                orderBtn.classList.remove("isHidden");
            } 

            orderBtn.addEventListener("click", this.orderIngredients);
        }
        
        static topIngredient(): void {
            
        }

        prepare(): void {
            //employee[0].move(1 / 50, employee[0].position.x, employee[0].position.y);
            console.log(this.preperationTime);
            movePoint = new Vector (this.storagePosition.x, this.storagePosition.y);
            
            let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
            let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
            prepareBtn.classList.add("isHidden");

            let progress: HTMLDivElement = document.createElement("div");
            progress.id = "progress";
            storageMenu.appendChild(progress);

            let pBar: HTMLDivElement = document.createElement("div");
            pBar.id = "pBar";
            progress.appendChild(pBar); 

            let neededFillAmount: number = this.barSize - this.nBar;
            //let nPreperation: number = 

            if (neededFillAmount > this.nStorage) {
                this.nStorage -= this.nStorage;
            } else {
                this.nStorage -= neededFillAmount;
            }
            
            Employee.busy = true;

            let counter: number = this.preperationTime;
            let assistenceNum: number = this.preperationTime;
            console.log(counter, assistenceNum);

            const interval: number = setInterval(function(): void {
                console.log(counter);
                counter--;

                progress.style.width = "100px";
                pBar.style.width = (counter / assistenceNum) * 100 + "%";

                if (counter < 0) {
                    clearInterval(interval);

                    Employee.busy = false;
                    
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    let fillBar: HTMLButtonElement = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Ingredient.fillBar);
                
                }
            },                                   1000);          
        }

        orderIngredients(): void {

            let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
            let orderBtn: HTMLButtonElement = document.querySelector("#orderBtn")!;
            orderBtn.classList.add("isHidden");

            let progress: HTMLDivElement = document.createElement("div");
            progress.id = "progress2";
            storageMenu.appendChild(progress);

            let pBar: HTMLDivElement = document.createElement("div");
            pBar.id = "pBar2";
            progress.appendChild(pBar); 

            let orderDuration: number = 50;
            let counter: number = orderDuration;

            const interval: number = setInterval((): void => {
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
             },                                  1000);
        }

        static fillBar(): void {

        }
    }

    
}