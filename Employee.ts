namespace Abschlussarbeit {
    export class Employee extends Human {
                
        static position: Vector;
        static busy: boolean;
        
        busy: boolean;
        selected: boolean;
        employeeNum: number;
        didBreak: boolean;
        worktime: number;
        pausetime: number;
        
        constructor(_employeeNum: number) {
            super(new Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140)));
            this.mood = Math.floor(Math.random() * (10 - 20 + 1) - 10);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            this.velocity = new Vector (0, 0);
            //this.didBreak = false;

            console.log(this.busy);
            setInterval(this.countPausetime, 1000);
            setInterval(this.countWorkime, 1000);
        }

        public getClicked(_xClick: number, _yClick: number): boolean {
            let distanceEmp: number =
            Math.sqrt(( (_xClick - this.position.x) * (_xClick - this.position.x) )
            +
            ( (_yClick - this.position.y) * (_yClick - this.position.y) ));
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
                
        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            if (this.mood <= 20 && this.mood >= -20) {
                drawHappyEmployee();
            } else if (this.mood > 20 && this.mood <= 40) {
                drawStressedEmployee();
            } else if (this.mood > 40) {
                drawOverchallengedEmployee();
            } else if (this.mood <= -21 && this.mood >= -40) {
                drawBoredEmployee();
            } else if (this.mood <= -41) { 
                drawUnderchallengedEmployee();
            }
            crc2.restore();

            //console.log(this.selected);
            if (this.selected == true) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHighlight();
                crc2.restore();
            }
        }

        public move (_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public moveTo (_positionX: number, _positionY: number, _timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(1 / 50);
            this.position.add(offset);

            console.log(this.position);
            console.log(_positionX, _positionY, this.velocity);

            this.velocity = new Vector (_positionX - this.position.x, _positionY - this.position.y);
            if (this.position.x == _positionX && this.position.y == _positionY) {
                    this.velocity = new Vector (0, 0);
            }

            console.log(this.velocity);
        }

        showBreakBtn(): void {
            let breakBtn: HTMLButtonElement = document.querySelector("#breakBtn")!;
            breakBtn.classList.remove("isHidden");
            breakBtn.addEventListener("click", this.takeBreak);
        }

        takeBreak(): void {
            this.moveTo(200, 700, 1 / 50);
            //setTimeout
            this.moveTo((Math.floor(Math.random() * (370 - 190 + 1) + 190)), Math.floor(Math.random() * (560 - 140 + 1) + 140), 1 / 50 );
            this.didBreak = true;
            this.worktime = 0;
            this.pausetime = 0;
        }

        changeMood(): void {
            if (gametime <= 10) {
                this.mood = this.mood;
            } else

            this.mood += this.worktime;
            this.mood -= this.pausetime;

            console.log(this.mood);
            /* if (this.didBreak == true) {
                this.mood = 0;
            } */
        }

        public countWorkime(): number {
            if (this.busy == true) {
                    this.worktime++;
            } 
            return this.worktime;
        }

        public countPausetime(): number {
            if (this.busy == false) {
                    this.pausetime++;
            } 
            return this.pausetime;
        }

        
        public takeOrder(): void {
            console.log("i will do this");
            let orderDisplay: HTMLButtonElement = document.querySelector("#orderDisplay")!;
            orderDisplay.classList.add("isHidden");
        } 
    }
}