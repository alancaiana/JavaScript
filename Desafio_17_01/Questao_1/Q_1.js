function calcular(){
var vBrancos = Number(document.getElementById("vBrancos").value);
var vNulos = Number(document.getElementById("vNulos").value);
var vValidos = Number(document.getElementById("vValidos").value);
var vTotais = vBrancos+vNulos+vValidos;
var eleitoresMunicipio = Number(document.getElementById("eleitoresMunicipio").value);

if (eleitoresMunicipio == vTotais){

    var percentualBrancos = Number((vBrancos / vTotais * 100)) + "%";
    var percentualNulos = Number((vNulos / vTotais * 100)) + "%";
    var percentualValidos = Number((vValidos / vTotais * 100)) + "%";

    alert("Resultado da eleição: " + "\n" + "Taxa de votos Brancos: " + percentualBrancos + "\n" + "Taxa de votos Nulos: " + percentualNulos + "\n" + "Taxa de votos Válidos: " + percentualValidos);

} else {

    alert("A eleição foi fraudada.")




}

}
