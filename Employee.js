"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Employee extends Abschlussarbeit.Human {
        constructor(_employeeNum) {
            super(new Abschlussarbeit.Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140)));
            this.mood = Math.floor(Math.random() * (10 - 20 + 1) - 10);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            this.velocity = new Abschlussarbeit.Vector(0, 0);
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
            if (this.selected == true) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHighlight();
                Abschlussarbeit.crc2.restore();
            }
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            //if (this.selected == true && )
        }
        getClicked(_xClick, _yClick) {
            let distance = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distance);
            if (distance < 30) {
                this.selected = true;
                return true;
            }
            else
                this.selected = false;
            return false;
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map