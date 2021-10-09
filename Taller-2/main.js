function showinconsole(Number){
    console.log ("Tu número favorito es " + Number);
}

function show(){
    const favoriteNumber = prompt("Ingresa tu número favorito", "");
    showinconsole(favoriteNumber)
}


function add(num1,num2){
    
    if (typeof(num1) == "number" && typeof(num2) == "number" ){
        var sum = Number (num1) + Number (num2);
        console.log (sum)
    }
    else{
        console.log("No es posible realizar la operación")
    }
    
}

function opsubtract(num1,num2){
    
    if (typeof(num1) == "number" && typeof(num2) == "number" ){
        var subtract = Number (num1) - Number (num2);
        console.log (subtract)
    }
    else{
        console.log("No es posible realizar la operación")
    }
    
}

function opmultiply(num1,num2){
    
    if (typeof(num1) == "number" && typeof(num2) == "number" ){
        var multiply = Number (num1) * Number (num2);
        console.log (multiply)
    }
    else{
        console.log("No es posible realizar la operación")
    }
    
}

function opdivide(num1,num2){
    
    if (typeof(num1) == "number" && typeof(num2) == "number" ){
        if (num2 != 0){
            var divide = Number (num1) / Number (num2);
            console.log (divide)
        } 
        else{
            console.log("No es posible dividir por cero")
        }   
    }
    else{
        console.log("No es posible realizar la operación")
    }
    
}
function circleArea(rad){
    if (typeof(rad) == "number"){
        let area = rad * rad * 3.1416;
        console.log (area)
    }
    else{
        console.log("No es posible realizar la operación")
    }

}
circleArea(2)










