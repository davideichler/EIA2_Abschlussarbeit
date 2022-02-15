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
            //this.didBreak = false;
            console.log(this.busy);
            setInterval(this.changeMood, 1000);
        }
        getClicked(_xClick, _yClick) {
            let distanceEmp = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distanceEmp);
            if (distanceEmp < 30) {
                console.log(distanceEmp);
                this.selected = true;
                console.log(this.selected);
                this.showBreakBtn();
                return true;
            }
            this.selected = false;
            return false;
        }
        draw() {
            Abschlussarbeit.crc2.save();
            Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
            if (this.mood <= 20 && this.mood >= -20) {
                Abschlussarbeit.drawHappyEmployee();
            }
            else if (this.mood > 20 && this.mood <= 40) {
                Abschlussarbeit.drawStressedEmployee();
            }
            else if (this.mood > 40) {
                Abschlussarbeit.drawOverchallengedEmployee();
            }
            else if (this.mood <= -21 && this.mood >= -40) {
                Abschlussarbeit.drawBoredEmployee();
            }
            else if (this.mood <= -41) {
                Abschlussarbeit.drawUnderchallengedEmployee();
            }
            Abschlussarbeit.crc2.restore();
            //console.log(this.selected);
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
        }
        moveTo(_positionX, _positionY, _timeslice) {
            let offset = this.velocity.copy();
            offset.scale(1 / 50);
            this.position.add(offset);
            console.log(this.position);
            console.log(_positionX, _positionY, this.velocity);
            this.velocity = new Abschlussarbeit.Vector(_positionX - this.position.x, _positionY - this.position.y);
            if (this.position.x == _positionX && this.position.y == _positionY) {
                this.velocity = new Abschlussarbeit.Vector(0, 0);
            }
            console.log(this.velocity);
        }
        showBreakBtn() {
            let breakBtn = document.querySelector("#breakBtn");
            breakBtn.classList.remove("isHidden");
            breakBtn.addEventListener("click", this.takeBreak);
        }
        takeBreak() {
            this.moveTo(200, 700, 1 / 50);
            //setTimeout
            this.moveTo((Math.floor(Math.random() * (370 - 190 + 1) + 190)), Math.floor(Math.random() * (560 - 140 + 1) + 140), 1 / 50);
            this.didBreak = true;
            this.worktime = 0;
            this.pausetime = 0;
        }
        changeMood() {
            this.updateTime();
            if (Abschlussarbeit.gametime <= 5) {
                this.mood = this.mood;
            }
            else
                this.mood = this.worktime - this.pausetime;
            //console.log(this.mood);
        }
        updateTime() {
            if (this.busy == true) {
                this.worktime += Abschlussarbeit.moodFactor;
            }
            else
                this.pausetime += Abschlussarbeit.moodFactor;
        }
        takeOrder() {
            console.log("i will do this");
            let orderDisplay = document.querySelector("#orderDisplay");
            orderDisplay.classList.add("isHidden");
            let topIngredient = document.querySelector("#topIngredient");
            topIngredient.classList.remove("isHidden");
            let newOrder = new Abschlussarbeit.Order(false);
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map