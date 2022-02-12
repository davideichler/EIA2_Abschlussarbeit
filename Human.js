"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Human {
        constructor(_position) {
            this.position = new Abschlussarbeit.Vector(_position.x, _position.y);
            this.velocity = new Abschlussarbeit.Vector(0, 0);
        }
    }
    Abschlussarbeit.Human = Human;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Human.js.map