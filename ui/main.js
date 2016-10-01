console.log('Loaded!');
console.log('ur about to read my app');
var counter = doucment.getElementById('count');
var count=0;
counter.onclick=function(){
count= count + 1;
var span= doucment.getElementById('spamm');
span.innerHTML = count.toString();
};



