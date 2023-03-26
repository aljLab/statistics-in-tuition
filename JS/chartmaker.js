const canvas = document.getElementById("graph");
const ctx = canvas.getContext('2d');

function makeLinePlot(){
    ctx.clearRect(0,0,canvas.clientHeight, canvas.width);
    new Chart("graph", {
    type: "line",
    data:{
        datasets:[{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    },
    options: {
        legend: {display: true},
        responsive:false
    }
  });
}
function makeBarPlot(){
    ctx.clearRect(0,0,canvas.clientHeight, canvas.width);
    new Chart("graph",{
        type:'bar',
        data:{
            datasets:[{
                data: [2, 34, 28, 10, 14, 12],
                borderWidth: 1,
                borderColor: 'darkgrey',
            }]
        },
        labels:['AfD', 'Die Linke', 'CDU', 'SPD', 'Die Grünen', 'FDP'],
        options:{
            legend:{display:true},
            responsive:false,
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    }); 
  }
  function makeScatterPlot(){
    var d = [
        {x: 3,y:6},
        {x: 2,y:5},
        {x: 3,y:5},
        {x: 6,y:6},
        {x: 2,y:6},
        {x: 3,y:9},
        {x: 2,y:3},
        {x: 1,y:3},
        {x: 5,y:3},
        {x: 1,y:9}
    ]
    ctx.clearRect(0,0,canvas.clientHeight, canvas.width);
    new Chart("graph",{
        type: 'scatter',
        data: {
            datasets:[{
                data: d,
                pointC
            }]
        }
    })

  }
  function clearCanvas(){ 
    canvas.clearRect(0,0,canvas.clientHeight, canvas.width);
  }

  const cols = document.querySelectorAll('.draggy');
  cols.forEach(col =>{
    addEventListener('dragstart', dragStart);
})
  function dragStart(e){
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
  }

  const dtargets = document.querySelectorAll('.dropInput');
  dtargets.forEach(target => {
        target.addEventListener('dragenter', dragEnter);
        target.addEventListener('dragover', dragOver);
        target.addEventListener('dragleave', dragLeave);
        target.addEventListener('drop', drop);
  })

  function dragEnter(e){
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragOver(e){
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragLeave(e){
    e.target.classList.remove('drag-over');
  }
  function drop(e){
    e.preventDefault();
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const container = document.getElementById('dndmenu');
    container.removeChild(document.getElementById(id));
    e.target.innerHTML= "Dropped: "+ id;
    e.target.classList.add ('inputClosed');
  }


    

