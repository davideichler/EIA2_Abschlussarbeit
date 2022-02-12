"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Employee extends Abschlussarbeit.Human {
        constructor(_employeeNum) {
            super(new Abschlussarbeit.Vector(Math.floor(Math.random() * (170 - 400 + 1)), Math.floor(Math.random() * (140 - 580 + 1) + 580)));
            this.mood = Math.floor(Math.random() * (-10 + 10 + 1) + (-10));
            console.log(this.mood);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            console.log(this.position);
        }
        draw() {
            if (this.mood <= 20 && this.mood >= -20) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHappyEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 20 && this.mood <= 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawStressedEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawOverchallengedEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood <= -21 && this.mood >= -40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawBoredEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood <= -41) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawUnderchallengedEmployee();
                Abschlussarbeit.crc2.restore();
            }
        }
        move() {
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map