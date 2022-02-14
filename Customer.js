"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_customerNum) {
            super(new Abschlussarbeit.Vector(870, 195));
            this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            this.customerNum = _customerNum;
            this.order = new Abschlussarbeit.Order(true);
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
        getClicked(_xClick, _yClick) {
            let distance = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distance);
            if (distance < 30 == true) {
                this.placeOrder();
                return true;
            }
            else
                Abschlussarbeit.employees[0].selected = false;
            return false;
        }
        // randomOrder(): string {
        //     let cstmrOrder: string = " ";
        //     let breadArray: string[] = ["Yufka", "Döner"];
        //     let mainIngredientArray: string[] = ["Normalen", "Hähnchen", "Falafel"];
        //     let ingredientWithArray: string[] = ["nur Salat", "nur Tomate", "nur Zwiebeln", "nur Mais", "nur Kraut", "nur Peperoni"];
        //     let ingredientWithoutArray: string[] = ["ohne Salat", " ohne Tomate", "ohne Zwiebeln", "ohne Mais", "ohne Kraut", "ohne Peperoni"];
        //     let ingredientWithEverything: string [] = ["mit allem"];
        //     let ingredientOrderArray: string [][] = [ingredientWithArray, ingredientWithoutArray, ingredientWithEverything];
        //     let extrasArray: string[] = ["und extra scharf.", "und mit Feta.", ".", ".", "."];
        //     /* for (let i: number = 5; i >= 1; i++) {
        //         let feedback = getOrder (breadArray, mainIngredientArray, ingredientOrderArray, extrasArray);
        //     } */
        //     //function getOrder (_bread: string[], _main: string [], _ingredient: string [], _extras: string[]) 
        //     let breadOrder: number = Math.floor(Math.random() * breadArray.length);
        //     let mainIngredientOrder: number = Math.floor(Math.random() * mainIngredientArray.length);
        //     let ingredientOrderWithoutX: number = Math.floor(Math.random() * ingredientWithoutArray.length);
        //     let ingredientOrderWithoutXY: number = Math.floor(Math.random() * ingredientWithoutArray.length);
        //     let ingredientOrderOnlyX: number = Math.floor(Math.random() * ingredientWithArray.length);
        //     let ingredientOrderOnlyXY: number = Math.floor(Math.random() * ingredientWithArray.length);
        //     let ingredientOrderEverything: number = 0;
        //     let ingredientOrder: number = Math.floor(Math.random() * ingredientOrderArray.length);
        //     let extraOrder: number = Math.floor(Math.random() * Ingredient.extrasArray.length);
        //     cstmrOrder += breadArray.splice(breadOrder) + " ";
        //     cstmrOrder += mainIngredientArray.splice(mainIngredientOrder) + " ";
        //     cstmrOrder += breadArray.splice(ingredientOrder) + " ";
        //     cstmrOrder += breadArray.splice(extraOrder);
        //     console.log(cstmrOrder);
        //     return cstmrOrder;
        // }
        placeOrder() {
            console.log("placeOrder");
            let orderDisplay = document.querySelector("#orderDisplay");
            let orderParagraph = document.querySelector("#orderParagraph");
            let acceptBtn = document.querySelector("#acceptBtn");
            orderDisplay.classList.remove("isHidden");
            //orderDisplay.classList.add("orderDisplay");
            orderDisplay.id = "orderDisplay";
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map