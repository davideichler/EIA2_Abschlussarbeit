namespace Abschlussarbeit {
    export class Employee extends Human {
        busy: boolean;
        selected: boolean;
        employeeNum: number;
        
        constructor(_employeeNum: number) {
            super(new Vector(Math.floor(Math.random() * (170 - 400 + 1)), Math.floor(Math.random() * (140 - 580 + 1) + 580)));
            this.mood = Math.floor(Math.random() * (-10 + 10 + 1) + (-10));
            console.log(this.mood);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            console.log(this.position);
        }
        
        public draw(): void {
            if (this.mood <= 20 && this.mood >= -20) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHappyEmployee();
                crc2.restore();
            } else if (this.mood > 20 && this.mood <= 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawStressedEmployee();
                crc2.restore();
            } else if (this.mood > 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawOverchallengedEmployee();
                crc2.restore();
            } else if (this.mood <= -21 && this.mood >= -40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawBoredEmployee();
                crc2.restore();
            } else if (this.mood <= -41) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawUnderchallengedEmployee();
                crc2.restore();
            }
        }

        public move(): void {

        }
    }

    
}