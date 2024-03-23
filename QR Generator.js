const QRElement = document.querySelector(".qr-code"),
qrcode = new QRCode(QRElement, {
    text: 'https://github.com/CodeCatalyst-Studio07',
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

let a = document.createElement("a"),
QRCanvas = document.querySelector("canvas");

a.setAttribute("download", "QRCode.png");
a.setAttribute("href", `${QRCanvas.toDataURL()}`);
document.body.appendChild(a);

a.click();
a.remove();