"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_customerNum) {
            super(new Abschlussarbeit.Vector(870, 195));
            this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            console.log(this.mood);
            this.customerNum = _customerNum;
            this.order = this.randomOrder();
            this.velocity = new Abschlussarbeit.Vector(0, 0);
        }
        draw() {
            if (this.mood > 91) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawExcitedCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 71 && this.mood < 90) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHappyCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 41 && this.mood < 70) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawNeutralCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 21 && this.mood < 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawAnnoyedCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood < 20) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawAngryCustomer();
                Abschlussarbeit.crc2.restore();
            }
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.velocity = new Abschlussarbeit.Vector(-200, 200);
            if (this.position.x == 670 && this.position.y == 395) {
                this.velocity = new Abschlussarbeit.Vector(0, 0);
            }
        }
        randomOrder() {
        }
        placeOrder() {
            let cstmrOrder;
            let breadOrder = Math.floor(Math.random() * Abschlussarbeit.Ingredient.breadArray.length);
            let mainIngredientOrder = Math.floor(Math.random() * Abschlussarbeit.Ingredient.mainIngridientArray.length);
            let ingredientOrder = Math.floor(Math.random() * Abschlussarbeit.Ingredient.mainIngridientArray.length);
            let extra = Math.floor(Math.random() * Abschlussarbeit.Ingredient.extrasArray.length);
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map