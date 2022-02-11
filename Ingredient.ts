namespace Abschlussarbeit {
    export abstract class Ingredient {
        public name: string;
        public storageSize: number;
        public barSize: number;
        public nUnits: number;
        public preperationTime: number;

        constructor(_name: string, _storageSize: number, _barSize: number, _nUnits: number, _preperationTime: number) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
        }

        
    }

    
}