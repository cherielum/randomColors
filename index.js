// function go(name, age, name){
//     alert('my name is ' + name); 
//     alert('my age is ' +age); 
//     alert('my name is ' + name); 
// }

// go('Will', 34, 'Bill'); 

var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);
background.addEventListener('dblclick', changeColor, false);

var colors = ["rgb(21, 139, 194)", "cornflower", "salmon", "orange", "black", "red", "aqua", "purple", "pink"];

function changeColor() {
    var col = document.getElementById("background-color");
    col.style.backgroundColor = colors[Math.floor((Math.random()*9)+1)];
}
