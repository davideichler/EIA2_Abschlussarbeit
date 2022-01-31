namespace Abschlussarbeit {

    window.addEventListener("load", handleLoad);
    console.log("Start");

    let nEmployees: number;
    let nCustomer: number;
    let storageSize: string;
    
    export let crc2: CanvasRenderingContext2D;

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

        
    }
}