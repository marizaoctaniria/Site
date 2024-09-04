//efeito do botão voltar ao Topo

#function topo{window.scrollTo(

{top:0,
loft:0,
behavior:"smooth"}
)}

//Validação de Login
function Login
var logado = 0;
var usuario= document.getElementById("usuario").value;
var senha= document.getElementById("senha").value;

if(usuario== 'admin'&& senha == '123456')
{window.location= "index.html"
logado = ; }
if(logado == 0){alert("acesso negado, dados incorretos")}

//Ativar alert no botão cadastrar

function cadastro(){
    alert ("cadastrado com sucesso")
    window.location.href = "index.html";
}
