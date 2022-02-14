"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Order {
        constructor(_orderType) {
            this.bread = ["Yufka", "Döner"];
            this.mainIngredient = ["Normaler", "Hähnchen", "Falafel"];
            this.barIngredient = ["Salat", "Zwieblen", "Mais", "Tomate", "Kraut", "Peperoni"];
            this.extra = ["extra scharf", "mit Feta"];
            this.fullOrder = " ";
            this.orderType = _orderType;
            if (this.orderType == true) {
                this.generateCustomerOrder();
            }
        }
        generateCustomerOrder() {
            //let fullOrder: string = " ";
            let rndMain = Math.floor(Math.random() * this.mainIngredient.length);
            let mainPick = this.mainIngredient.splice(rndMain, 1);
            this.fullOrder += mainPick + " ";
            let rndBread = Math.floor(Math.random() * this.bread.length);
            let breadPick = this.bread.splice(rndBread, 1);
            this.fullOrder += breadPick + " ";
            let rndBar = Math.floor(Math.random() * this.barIngredient.length);
            let rndAmtBar = Math.floor(Math.random() * this.barIngredient.length);
            let barPick = this.barIngredient.splice(rndBar, rndAmtBar);
            switch (rndAmtBar) {
                case 0:
                    this.fullOrder += "ohne alles";
                    break;
                case 1:
                    this.fullOrder += "nur mit " + barPick;
                    break;
                case 2:
                    this.fullOrder += "nur mit " + barPick;
                    break;
                case 3:
                    this.fullOrder += "mit " + barPick;
                    break;
                case 4:
                    this.fullOrder += "ohne " + this.barIngredient;
                    break;
                case 5:
                    this.fullOrder += "ohne " + this.barIngredient;
                    break;
                case 6:
                    this.fullOrder += "mit allem";
                    break;
            }
            let rndExtra = Math.floor(Math.random() * this.extra.length);
            let rngNum1 = Math.floor(Math.random() * 3 + 1);
            let rngNum2 = Math.floor(Math.random() * 3 + 1);
            console.log(rngNum1, rngNum2);
            if (rngNum1 == rngNum2) {
                let extraPick = this.extra.splice(rndExtra, 1);
                this.fullOrder += " " + extraPick;
            }
            console.log(this.fullOrder);
        }
    }
    Abschlussarbeit.Order = Order;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Order.js.map