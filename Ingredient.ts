namespace Abschlussarbeit {
    export class Ingredient {
        public name: string;
        public storageSize: number;
        public nStorage: number;
        public barSize: number;
        public nBar: number;
        public nUnits: number;
        public preperationTime: number;

        public breadArray: string[] = ["Yufka", "Döner"];
        mainIngridientArray: string[] = ["Normalen", "Hähnchen", "Falafel"];
        ingredientArray: string[] = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
        extrasArray: string[] = ["extra scharf", "mit Feta"];


        constructor(_name: string, _storageSize: number, _nStorage: number, _barSize: number, _nBar: number, _nUnits: number, _preperationTime: number) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
        }

        static showBarMenu(_event: MouseEvent): void {
            
        }

        static showStorageMenu(_event: MouseEvent): void {

        }
        
        static topIngredient(): void {
            
        }

        static prepare(): void {

        }
    }

    
}