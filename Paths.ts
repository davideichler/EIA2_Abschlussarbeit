namespace Abschlussarbeit {
    export let employeePaths: Path2D;
    export let customerPaths: Path2D;

    export function drawHappyEmployee(): void {
        /* crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellowgreen";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.quadraticCurveTo(300, 320, 310, 310);
        crc2.moveTo(300, 275);
        crc2.rect(280, 265, 40, 8);  
        crc2.stroke();
        crc2.closePath(); */

        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellowgreen";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, 20, 10, 10);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }

    export function drawBoredEmployee(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.lineTo(310, 310);
        crc2.moveTo(300, 275);
        crc2.rect(280, 265, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    } 

    export function drawUnderchallengedEmployee(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.lineTo(310, 310);
        crc2.moveTo(325, 280);
        crc2.lineTo(320, 280);
        crc2.lineTo(325, 275);
        crc2.lineTo(320, 275);
        crc2.moveTo(335, 280);
        crc2.lineTo(330, 280);
        crc2.lineTo(335, 275);
        crc2.lineTo(330, 275);
        crc2.moveTo(300, 275);
        crc2.rect(280, 265, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    } 

    export function drawStressedEmployee(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.lineTo(310, 315);
        crc2.moveTo(288, 285);
        crc2.lineTo(294, 280);
        crc2.moveTo(300, 275);
        crc2.rect(280, 265, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }

    export function drawOverchallengedEmployee(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.quadraticCurveTo(300, 290, 310, 310);
        crc2.moveTo(300, 275);
        crc2.rect(280, 265, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }


    export function drawExcitedCustomer(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.quadraticCurveTo(300, 330, 310, 310);
        crc2.lineTo(290, 310);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawHappyCustomer(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellowgreen";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.quadraticCurveTo(300, 320, 310, 310);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawNeutralCustomer(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.lineTo(310, 310);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawAnnoyedCustomer(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 305);
        crc2.lineTo(310, 310);
        crc2.stroke();
        crc2.closePath();
    }
    
    export function drawAngryCustomer(): void {
        crc2.beginPath();
        crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(290, 290);
        crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(310, 290);
        crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        crc2.moveTo(290, 310);
        crc2.quadraticCurveTo(300, 300, 310, 310);
        crc2.moveTo(288, 280);
        crc2.lineTo(294, 285);
        crc2.moveTo(306, 285);
        crc2.lineTo(312, 280);
        crc2.stroke();
        crc2.closePath();
    }
}