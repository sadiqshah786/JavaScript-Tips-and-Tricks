let generateQRBtn = document.querySelector('#generateQRBtn');
let downloadBtn = document.querySelector('#downloadBtn');
let text = document.querySelector('#text');
let qrImg = document.querySelector('#qrImg');



//create QR code

generateQRBtn.addEventListener("click", () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text.value}`;
    qrImg.src = qrCode;

})

//download QR code Image

downloadBtn.addEventListener("click" , async() => {
    
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
    const downloadQR = document.createElement('a');
    downloadQR.href = URL.createObjectURL(blob);
    downloadQR.download = "QRcode.png";
    downloadQR.click();
})
