"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Human {
        constructor(_position) {
            this.position = new Abschlussarbeit.Vector(_position.x, _position.y);
            this.velocity = new Abschlussarbeit.Vector(0, 0);
        }
        move(_timeslice, _position) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        ;
        moveTo(_position, _velocity) {
            let direction = Abschlussarbeit.Vector.getDifference(_position, this.position);
            let timeslice = _velocity;
            this.move(timeslice, direction);
        }
    }
    Abschlussarbeit.Human = Human;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Human.js.map