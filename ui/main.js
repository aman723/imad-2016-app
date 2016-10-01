console.log('Loaded!');
console.log('ur about to read my app');
var button = doucment.getElementById('count');
var count=0;
button.onclick=function(){
count= count + 1;
var span= doucment.getElementById('spamm');
span.innerHTML = count.toString();
};



