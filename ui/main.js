
var button = doucment.getElementById('counter');
var counter=0;

button.onclick = function () {
    
counter = counter + 1;
var span= doucment.getElementById('count');
span.innerHTML = counter.toString();
};



