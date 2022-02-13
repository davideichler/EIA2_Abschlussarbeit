namespace Abschlussarbeit {

    window.addEventListener("load", handleLoad);
    console.log("Start");

    let human: Human[] = [];
    export let employees: Employee[] = [];
    export let ingredients: Ingredient[] = [];
    let customers: Customer[] = [];

    let nEmployees: number;
    let nCustomer: number;

    let stockCapacity: string;
    export let stockFactor: number;
    
    export let crc2: CanvasRenderingContext2D;
    
    let background: ImageData;

    export let movePoint: Vector = new Vector (0, 0);
    // export let movePointX: number;
    // export let movePointY: number;
   // let stockCapacity: string;

    function handleLoad(_event: Event): void {

        let form: HTMLDivElement = document.querySelector("#form")!;
        form.addEventListener("change", handleChange);

        let startBtn: HTMLButtonElement = document.querySelector("#startBtn")!;
        startBtn.addEventListener("click", createCanvas);
    }

    function handleChange(_event: Event): void {
        stockCapacity = document.querySelector('input[name="stockCapacity"]:checked')!.value;
        console.log(stockCapacity);

        if (stockCapacity == "high") {
            stockFactor = 1.2;
        } else if (stockCapacity == "low") {
            stockFactor = 0.8;
        } else if (stockCapacity == "medium") {
            stockFactor = 1.0;
        }

        console.log(stockFactor);

        nEmployees = Number(document.querySelector("#nEmployees")!.value);
        nCustomer = Number(document.querySelector("#nCustomers")!.value);
        console.log(nCustomer);

    }
    
    function createCanvas(): void {
        let form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
        form.classList.add("isHidden");

        let mainContainer: HTMLDivElement = <HTMLDivElement> document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        let barContainer: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".bar")!;
        for (let i of barContainer) {
            i.addEventListener("click", callBarMenu);
        }

        let storageContainer: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".storage")!;
        for (let i of storageContainer) {
            i.addEventListener("click", callStorageMenu);
        }

        canvas.addEventListener("click", hideMenus);
        canvas.addEventListener("click", detectClick);
        
        drawShop();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createEmployees(nEmployees);
        console.log(nEmployees);

        createCustomer(nCustomer);
        console.log(nCustomer);

        let salad: Ingredient = new Ingredient("Salat", 100 * stockFactor, 100 * stockFactor, 25, 25, 2, 20, new Vector (350, 150), new Vector (150, 150));
        let onion: Ingredient = new Ingredient("Zwiebeln", 70 * stockFactor, 70 * stockFactor, 15, 15, 0.5, 30);
        let corn: Ingredient = new Ingredient("Mais", 1000 * stockFactor, 1000 * stockFactor, 300, 300, 30, 5);
        let tomato: Ingredient = new Ingredient("Tomate", 50 * stockFactor, 50 * stockFactor, 15, 15, 0.5, 15);
        let kraut: Ingredient = new Ingredient("Kraut", 150 * stockFactor, 150 * stockFactor, 50, 50, 12.5, 10);
        let peperoni: Ingredient = new Ingredient("Peperoni", 50 * stockFactor, 50 * stockFactor, 30, 30, 2, 5);

        ingredients.push(salad, onion, corn, tomato, kraut, peperoni);

        /* let testEmployee = new Employee(1);
        testEmployee.draw();
        employee.push(testEmployee); */
        
        window.setInterval(update, 50);
    }

    function createEmployees(_nEmployees: number): void {
        for (let i: number = 0; i < _nEmployees; i++) {
            let newEmployee: Employee = new Employee (i);
            employees.push(newEmployee);
        }
    }

    function createCustomer (_nCustomer: number): void {
        for (let i: number = 0; i < _nCustomer; i++) {
            let newCustomer: Customer = new Customer (i);
            customers.push(newCustomer);
        }
    }
    function callBarMenu(_event: MouseEvent): void {
        let target: EventTarget = _event!.target!.id!;
        //VS Code meckert, aber es funktioniert
        console.log(target);

        if (target == "salad") {
            ingredients[0].showBarMenu(_event);
        } else if (target == "onion") {
            ingredients[1].showBarMenu(_event);
        } else if (target == "corn") {
            ingredients[2].showBarMenu(_event);
        } else if (target == "tomato") {
            ingredients[3].showBarMenu(_event);
        } else if (target == "kraut") {
            ingredients[4].showBarMenu(_event);
        } else if (target == "peperoni") {
            ingredients[5].showBarMenu(_event);
        } 
    }

    function callStorageMenu(_event: MouseEvent): void {
        let target: EventTarget = _event!.target!.id!;
        console.log(target);

        if (target == "saladStorage") {
            ingredients[0].showStorageMenu(_event);
        } else if (target == "onionStorage") {
            ingredients[1].showStorageMenu(_event);
        } else if (target == "cornStorage") {
            ingredients[2].showStorageMenu(_event);
        } else if (target == "tomatoStorage") {
            ingredients[3].showStorageMenu(_event);
        } else if (target == "krautStorage") {
            ingredients[4].showStorageMenu(_event);
        } else if (target == "peperoniStorage") {
            ingredients[5].showStorageMenu(_event);
        } 

    }

    function hideMenus(_event: MouseEvent): void {
        let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden");

        let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
        storageMenu.classList.add("isHidden");

        Ingredient.clicked = false;
        console.log("ingr " + Ingredient.clicked);  
    }

 
    function detectClick(_event: MouseEvent): void {
        let xClick: number = _event.clientX;
        let yClick: number = _event.clientY;
        //console.log(employee[].getClicked(xClick, yClick));
        console.log(
        for (let b of employees) {
            b.getClicked(xClick, yClick);
        }
            

    }

    function update(): void {
        crc2.putImageData(background, 0, 0);
        //employee.draw();

        for (let a of employees) {
            a.move(1 / 50);
            movePoint = new Vector(a.position.x, a.position.y);
            a.draw();
        }

        for (let a of customers) {
            a.draw();
            a.move(1 / 50);
        }
    }


    /* function drawShop(): void {
        crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.rect(400, 20, 120, 500);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(400, 20, 120, 500);
        crc2.stroke();
        
        crc2.rect(20, 20, 150, 550);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(20, 20, 150, 550);
        crc2.stroke();

        crc2.rect(170, 20, 230, 100);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(170, 20, 230, 100);
        crc2.stroke();

        crc2.rect(890, 150, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 150, 15, 15);
        crc2.stroke();

        crc2.rect(890, 225, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 225, 15, 15);
        crc2.stroke();
    } */
    
}
