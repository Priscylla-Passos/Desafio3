let atividade = document.querySelector("#atividade");
let horario = document.querySelector("#horario");
let horario_input = document.querySelector("#horario_input");
let dia = document.querySelector("#dias-da-semana");
let listaAtividade = [];
let btAdicionar = document.querySelector(".principal__bt-adicionar");
let btexcluirTodos = document.querySelector(".principal__bt-excluir-todos")
let btsegunda = document.querySelector("#segunda");
let btterca = document.querySelector("#terca");
let containerAtividades = document.querySelector(".atividades");
const data = new Date();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const ano = data.getFullYear();
const mes = meses[data.getMonth()];
const diaAtual = data.getDate();
const hora = data.getHours();
const minutos = data.getMinutes();
atividade="block";
horario ="block";
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
    document.getElementById("hora").innerHTML = zeroFill(hora) + " : " + zeroFill(minutos);
    document.getElementById("data").innerHTML = zeroFill(diaAtual) + " de " + mes + " de " + ano;

    
btAdicionar.addEventListener("click", function(e){
    e.preventDefault();
   
    listaAtividade.push({
    atividade:atividade.value, 
    horario:horario.value,
    horario_input:horario_input.value,
    dia:dia.value
});
        console.log(listaAtividade)
    atividade.value ="";
    
})




btexcluirTodos.addEventListener("click", function(e){
    e.preventDefault();
    listaAtividade.splice(0, listaAtividade.length);
    
    

    })



btsegunda.addEventListener("click", function(e){
    e.preventDefault();
    containerAtividades.innerHTML="";
    listaAtividade.forEach((item)=>{
       
        console.log(item.atividade);
        let atividadesItens = document.createElement("div");
        let horarioContainer = document.createElement("div");
        let atividadeContainer = document.createElement("div");
    
        horarioContainer.classList.add("planner__horario-um");
        atividadeContainer.classList.add("atividades__planner");

        horarioContainer.innerHTML=item.horario;
        atividadeContainer.innerHTML=item.atividade;

        containerAtividades.appendChild(atividadesItens);
        atividadesItens.appendChild(horarioContainer);
        atividadesItens.appendChild(atividadeContainer);
    })

})

