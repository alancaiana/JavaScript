/*
inicio

leia (m)
leia (input)
m <- input

leia (valor) 
valor <- 1.30

leia (valorTotal)
valorTotal <- m * valor

se m >= 12
	valorTotal = m * 1.00
	escreva valorTotal
senao
	escreva valorTotal

fimalgoritimo
*/


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
