


// Using API
// https://nominatim.openstreetmap.org/reverse?format=json&lat=40.7128&lon=-74.0060

let btn = document.querySelector('button');
btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {

        // find longitude and latitude 
        const { latitude, longitude } = position.coords;

        // find street address 
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => console.table(data))
            .catch((err) => console.log("failed to fetch location", err))
    })

})

