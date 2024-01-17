function compra(){
    var m = Number(document.getElementById("m").value);
    var valor = 1.30
    var valor_total = m * valor

    if(m >= 12){
        valor_total = m * 1.00
        alert("O valor total é: R$ " + valor_total.toFixed(2))
    }else{
        alert("O valor total é: R$ " + valor_total.toFixed(2))
    }
}