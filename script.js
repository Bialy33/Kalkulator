

function poleKwadrat(A){
    A = parseFloat(A);

    document.getElementById("wynik").innerText = A*A;
}
function poleTrojkat(A,B){
    A = parseFloat(A);
    B = parseFloat(B);

    document.getElementById("wynik").innerText = A*B/2;
}
function poleProstokat(A,B){
    A = parseFloat(A);
    B = parseFloat(B);

    document.getElementById("wynik").innerText = A*B;
}

function poleProstokat(A,B){
    A = parseFloat(A);
    B = parseFloat(B);

    document.getElementById("wynik").innerText = A*B;
}

function poleRombu(A,B){
    A = parseFloat(A);
    B = parseFloat(B);

    document.getElementById("wynik").innerText = A*B/2;
}

function poleKolo(A){
    A = parseFloat(A);
    

    document.getElementById("wynik").innerText = A*A*3.14159265;
}


function licz(){
    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    if(A <= "0"){document.getElementById("A").value = 0.001; A = 0.001}
    if(B <= "0"){document.getElementById("B").value = 0.001; B = 0.001}
    if(document.getElementById("Kwadrat").checked) poleKwadrat(A);
    if(document.getElementById("Trójkąt").checked) poleTrojkat(A,B);
    if(document.getElementById("Prostokąt").checked) poleProstokat(A,B);
    if(document.getElementById("Romb").checked) poleRombu(A,B);
    if(document.getElementById("Koło").checked) poleKolo(A);


    console.log("test")
};