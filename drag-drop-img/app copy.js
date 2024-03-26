let dragFile = document.querySelector('.drag-wrapper');
let file;
dragFile.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragFile.classList.add("active");
})


dragFile.addEventListener("dragleave" , () => {
    dragFile.classList.remove("active");
})

let fileName = document.getElementById('fileName')
dragFile.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    

    // file validation 
    
    let fileType = file.type;
    let fileValidationTypes = ["image/jpeg","image/jpg","image/png"]
    
    if (fileValidationTypes.includes(fileType)) {
        fileName.innerHTML = `<span class="file-upload">${file?.name} </span>`;
    }
    else {
        fileName.innerHTML = `<span class="error">Invalid Format</span>`
    }

})