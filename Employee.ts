namespace Abschlussarbeit {
    export class Employee extends Human {
                
        static position: Vector;
        static busy: boolean;
        
        busy: boolean;
        selected: boolean;
        employeeNum: number;
        
        constructor(_employeeNum: number) {
            super(new Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140)));
            this.mood = Math.floor(Math.random() * (10 - 20 + 1) + 10);
            console.log(this.mood);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            console.log(this.position);
        }

        public static getClicked(_xClick: number, _yClick: number): void {
            console.log(this.position);
            let distance: number =
            Math.sqrt(( (_xClick - this.position.x) * (_xClick - this.position.x) )
            +
            ( (_yClick - this.position.y) * (_yClick - this.position.y) ));
            console.log(distance);
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

        public move (_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            
        }

        
    }

    
}