

// color picker from image 
const btn = document.querySelector('#btn');
btn.addEventListener("click", async () => {
    const eyeDropper = await new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    console.log(sRGBHex)
})