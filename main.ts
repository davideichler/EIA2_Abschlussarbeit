namespace Abschlussarbeit {

    window.addEventListener("load", handleLoad);
    console.log("Start");

    let nEmployees: number;
    let nCustomer: number;
    let storageSize: string;
    
    export let crc2: CanvasRenderingContext2D;
    

    let background: ImageData;
   // let storageSize: string;

    function handleLoad(_event: Event): void {

        let form: HTMLDivElement = document.querySelector("#form")!;
        form.addEventListener("change", handleChange);

        let startBtn: HTMLButtonElement = document.querySelector("#startBtn")!;
        startBtn.addEventListener("click", createCanvas);
    }

    function handleChange(_event: Event): void {

        storageSize = document.querySelector('input[name="storageSize"]:checked')!.value;
        console.log(storageSize);

        nEmployees = document.querySelector("#nEmployees")!.value;
        console.log(nEmployees);
        // Zuordnung aller Variablen
        
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
            i.addEventListener("click", showBarMenu);
        }

        canvas.addEventListener("click", handleClick);

        drawShop();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawShop(): void {

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
        /* crc2.save(),
        crc2.translate(300, 20);
        crc2.beginPath(); */
    }

    function showBarMenu(_event: MouseEvent): void {
        let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.remove("isHidden");

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        barMenu.style.marginLeft = x + 20 + "px";
        barMenu.style.marginTop = y + -50 + "px";
    


    }




    function handleClick(_event: Event): void {
        /* let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden"); */
    }
}
