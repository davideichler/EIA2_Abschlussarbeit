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
        }
        static showBarMenu(_event) {
        }
    }
    Abschlussarbeit.Ingredient = Ingredient;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Ingredient.js.map