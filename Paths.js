"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function drawHappyEmployee() {
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
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellowgreen";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, 20, 10, 10);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawHappyEmployee = drawHappyEmployee;
    function drawBoredEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.lineTo(310, 310);
        Abschlussarbeit.crc2.moveTo(300, 275);
        Abschlussarbeit.crc2.rect(280, 265, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawBoredEmployee = drawBoredEmployee;
    function drawUnderchallengedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "orange";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.lineTo(310, 310);
        Abschlussarbeit.crc2.moveTo(325, 280);
        Abschlussarbeit.crc2.lineTo(320, 280);
        Abschlussarbeit.crc2.lineTo(325, 275);
        Abschlussarbeit.crc2.lineTo(320, 275);
        Abschlussarbeit.crc2.moveTo(335, 280);
        Abschlussarbeit.crc2.lineTo(330, 280);
        Abschlussarbeit.crc2.lineTo(335, 275);
        Abschlussarbeit.crc2.lineTo(330, 275);
        Abschlussarbeit.crc2.moveTo(300, 275);
        Abschlussarbeit.crc2.rect(280, 265, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawUnderchallengedEmployee = drawUnderchallengedEmployee;
    function drawStressedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.lineTo(310, 315);
        Abschlussarbeit.crc2.moveTo(288, 285);
        Abschlussarbeit.crc2.lineTo(294, 280);
        Abschlussarbeit.crc2.moveTo(300, 275);
        Abschlussarbeit.crc2.rect(280, 265, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawStressedEmployee = drawStressedEmployee;
    function drawOverchallengedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.quadraticCurveTo(300, 290, 310, 310);
        Abschlussarbeit.crc2.moveTo(300, 275);
        Abschlussarbeit.crc2.rect(280, 265, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawOverchallengedEmployee = drawOverchallengedEmployee;
    function drawExcitedCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "green";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.quadraticCurveTo(300, 330, 310, 310);
        Abschlussarbeit.crc2.lineTo(290, 310);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawExcitedCustomer = drawExcitedCustomer;
    function drawHappyCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellowgreen";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.quadraticCurveTo(300, 320, 310, 310);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawHappyCustomer = drawHappyCustomer;
    function drawNeutralCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.lineTo(310, 310);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawNeutralCustomer = drawNeutralCustomer;
    function drawAnnoyedCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "orange";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 305);
        Abschlussarbeit.crc2.lineTo(310, 310);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawAnnoyedCustomer = drawAnnoyedCustomer;
    function drawAngryCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(300, 300, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(290, 290);
        Abschlussarbeit.crc2.arc(290, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(310, 290);
        Abschlussarbeit.crc2.arc(310, 290, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(290, 310);
        Abschlussarbeit.crc2.quadraticCurveTo(300, 300, 310, 310);
        Abschlussarbeit.crc2.moveTo(288, 280);
        Abschlussarbeit.crc2.lineTo(294, 285);
        Abschlussarbeit.crc2.moveTo(306, 285);
        Abschlussarbeit.crc2.lineTo(312, 280);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawAngryCustomer = drawAngryCustomer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Paths.js.map