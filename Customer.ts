namespace Abschlussarbeit {
    export class Customer extends Human {
        customerNum: number;
        order: string;
        waitingTime: number;

        constructor(_customerNum: number) {
            super(new Vector(870, 195));
            this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            console.log(this.mood);
            this.customerNum = _customerNum;
            this.order = this.randomOrder();
            this.velocity = new Vector (0, 0);
        }
        
        public draw(): void {
            if (this.mood > 91) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawExcitedCustomer();
                crc2.restore();
            } else if (this.mood > 71 && this.mood < 90) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHappyCustomer();
                crc2.restore();
            } else if (this.mood > 41 && this.mood < 70) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawNeutralCustomer();
                crc2.restore();
            } else if (this.mood > 21 && this.mood < 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawAnnoyedCustomer();
                crc2.restore();
            } else if (this.mood < 20) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawAngryCustomer();
                crc2.restore();
            }
        }

        public move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            this.velocity = new Vector(-200, 200);
            if (this.position.x == 670 && this.position.y == 395) {
                this.velocity = new Vector(0, 0);
            }
        }

        randomOrder(): string {

        }
        placeOrder(): void {

            let cstmrOrder: string;

            let breadOrder: number = Math.floor(Math.random() * Ingredient.breadArray.length);
            let mainIngredientOrder: number = Math.floor(Math.random() * Ingredient.mainIngridientArray.length);
            let ingredientOrder: number = Math.floor(Math.random() * Ingredient.mainIngridientArray.length);
            let extra: number = Math.floor(Math.random() * Ingredient.extrasArray.length);


        }
    }
}