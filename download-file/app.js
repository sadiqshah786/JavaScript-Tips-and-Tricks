let userInput = document.querySelector('#input');
let btn = document.querySelector('button');
btn.addEventListener("click", async () => {
    console.log(userInput.value);
    try {
        let response = await fetch(userInput.value);
        let file = await response.blob();
        let link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
        console.log(file)
    }
    catch (e) {
        console.log("Faild to download file");
    }
})
