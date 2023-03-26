const form = document.getElementById("f");
const csvFileInput = document.getElementById("file");
var data;
form.addEventListener("submit", handleInput);
function handleInput(e){
    e.preventDefault();
    const input = csvFileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) =>{
        const text = event.target.result;
        data = text;
        fill();
    }
    reader.readAsText(input);
}

function fill(){
    document.getElementById("canvas").innerText=data;
}


