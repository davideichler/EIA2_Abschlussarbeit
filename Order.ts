namespace Abschlussarbeit {
    export class Order {
        bread: Ingredient;
        mainIngredient: Ingredient;
        barIngredient: Ingredient[];
        extras: Ingredient[];
        orderType: boolean;

        constructor(_orderType: boolean) {
            this.orderType = _orderType;
        }

        generateCustomerOrder () {
            
        }
    }
}