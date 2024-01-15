function C(){
    var C = document.getElementById("C").value;
    var conversaoF = ((C * (9/5)) + 32);

    conversaoF = Number(conversaoF);

    alert(conversaoF);
}

function F(){
    var F = document.getElementById("F").value;
    var conversaoC = ((F - 32) * 5/9);

    conversaoC = Number(conversaoC);

    alert(conversaoC);
}





