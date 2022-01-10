var pergunta1 = {
    pergunta: "Qual a alíquota do PIS no regime de tributação - Cumulativo?",
    respostaCorreta: "0,65%",
    respostas: ["0,65%", "8%", "40%"]
}
var pergunta2 = {
    pergunta: "Qual a alíquota do COFINS no regime de tributação - NÃO-Cumulativo?",
    respostaCorreta: "7,60%",
    respostas: ["7,60%","10%", "47%"]
}
var pergunta3 = {
    pergunta: "Qual a alíquota do PIS no regime de tributação - NÃO-Cumulativo?",
    respostaCorreta: "1,65%",
    respostas: ["1,65%" ,"7%", "50%"]

}
var pergunta4 = {
    pergunta: "Qual a alíquota do COFINS no regime de tributação - Cumulativo?",
    respostaCorreta: "3%",
    respostas: ["3%", "47%", "11%"  ]
}

var perguntas = [pergunta1, pergunta2, pergunta3, pergunta4]
var perguntaSorteada;


function sortearPergunta(){
    var perguntaHTML = document.getElementById("resposta");
    var mostraPergunta = document.getElementById("pergunta")

    var numeroperguntaSorteada = parseInt(Math.random()*4);
    perguntaSorteada = perguntas[numeroperguntaSorteada]

    var pe = perguntaSorteada.pergunta;
    var opcoesTexto = "";
    mostraPergunta.innerHTML = pe;
        
     
        for (var resposta in perguntaSorteada.respostas){

                opcoesTexto += "<label class='container'> <input type='radio' name='resposta' value='"+ resposta + "'>  " +perguntaSorteada.respostas[resposta] + " <span class='checkmark'></span></label><br>";   
        }
        ;
        perguntaHTML.innerHTML = opcoesTexto;

}

function obtemAtributoSelecionado(){
  
  var radioAtributos = document.getElementsByName("resposta");
  
  for (var i=0; i<radioAtributos.length; i++ ){
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value;
    } 
  };
  
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
 
  
  var valorRespostaSelecionada = perguntaSorteada.respostas[atributoSelecionado];
  
  if(valorRespostaSelecionada == perguntaSorteada.respostaCorreta){
      htmlResultado = "<h1 class='resultado-final'>Você Acertou</h1>"; 
      }else if(valorRespostaSelecionada < perguntaSorteada.respostaCorreta || valorRespostaSelecionada > perguntaSorteada.respostaCorreta){
          htmlResultado = "<h1 class='resultado-final'>Resposta errada<h1>";
      } else {
        htmlResultado = "<h1 class='resultado-final'>Selecione seu atributo<h1>";
      }
    
        divResultado.innerHTML = htmlResultado;
  
 }
     