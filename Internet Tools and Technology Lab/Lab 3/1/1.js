var fontSize = 5;
var inc = 5;
var color = "red";
var text = "Text-Growing";

function modify(color, size, text){
    document.getElementById("lol").style.color = color;
    document.getElementById("lol").style.fontSize = size;
    document.getElementById("lol").textContent = text;
}

function update(){
    modify(color,fontSize.toString()+"pt",text);

    fontSize += inc;

    if(inc < 0){
        color = "blue";
        text = "Text-Shrinking";
    }
    else{
        color = "red";
        text = "Text-Growing";
    }

    if(fontSize === 5 || fontSize === 50)
        inc = -inc;
}

document.getElementById("lol").textContent = "lol";
setInterval(update, 1000);
