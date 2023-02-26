
function fib(n){
    var array = [0,1];
    for (var i=2;i<n; i++){
        array.push(array[i-1]+array[i-2]);
    }
    return array;
}

function sqr(n){
    var array = [];
    for (var i=1;i<n;i++){
        array.push(i**2);
    }
    return array;
}

function fibo(){
    var value = prompt("Enter n", "10");
    var array = fib(Number(value));
    document.getElementById("display").innerHTML =  array;
}

function squ(){
    var value = prompt("Enter n","10");
    var array = sqr(Number(value));
    alert(array);
}

console.log("Javascript loaded");
document.getElementById('Fib').addEventListener("click",fibo);
document.getElementById('Sq').addEventListener("click",squ);
