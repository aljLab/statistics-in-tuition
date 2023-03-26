const form = document.getElementById("f");
const csvFileInput = document.getElementById("file");
var data;
form.addEventListener("submit", handleInput);
function handleInput(e){
    clearCanvas();

    e.preventDefault();
    const input = csvFileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) =>{
        const text = event.target.result;
        data = text;
        setUp();
    }
    reader.readAsText(input);
}
function fill(){
    document.getElementById("canvas").innerText=data;
}
function clearCanvas(){
    document.getElementById("canvas").innerHTML= "";
}
var fillCanvas = (col) => {
    
    var c = document.getElementById("canvas");
    c.innerHTML = col;
}
function fillMenuBar(headerRow){
    document.getElementById("menu").innerHTML="";
    let i = 1;
    headerRow.forEach(header=>{
        var container = document.getElementById("menu");
        let id = "item"+i;
        let item = document.createElement("div");
        item.setAttribute("id", id);
        item.setAttribute("class", "menuitem");
        item.innerHTML = header;
        item.addEventListener("click", clickhandler);
        container.appendChild(item);
        i++;
    })
    return --i;
}
function clickhandler(e){
    var c = document.getElementById("canvas");
    let col = e.target.id[4];
    c.innerHTML = printCol(isolateColumn(transformData(data), --col));
}
function printCol(col){
    var str = "";
    col.forEach(entry =>{
        str = str.concat(entry +"<br>");
    })
    return str;
}
var transformData = (str)=>{
    var rows1 = [], rows = [];
    rows1 = str.split('\n');
    rows1.forEach(row =>{
        var row = row.split(",");
        rows.push(row);
    })
    return rows;
}
var isolateColumn = (rows, colIndex)=>{//isoliert aus zweidimensionalem Array, der die Zeilen enthält die Spalte mit Index colIndex
    var col = [];
    rows.forEach(row => {
        col.push(row[colIndex]);
    })
    return col;
}
function setUp(){
    fillMenuBar((transformData(data)[0]));
}




