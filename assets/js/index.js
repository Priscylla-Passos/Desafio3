//referencias html
let atividade = document.querySelector("#atividade");
let horario = document.querySelector("#horario");
let dia = document.querySelector("#dias-da-semana");
let btAdicionar = document.querySelector(".principal__bt-adicionar");
let btexcluirTodos = document.querySelector(".principal__bt-excluir-todos")
let btsegunda = document.querySelector("#segunda");
let btterca = document.querySelector("#terca");
let containerAtividades = document.querySelector(".atividades");

let diaSelecionado;

let agenda ={
        segunda:[{desc:"estudos daily", hora: "10:11", id:1},{desc:"estudos", hora: "11:11", id:2}],
        terca:[],
        quarta:[],
        quinta:[],
        sexta:[],
        sabado:[],
        domingo:[],

}

function addAtividade(atv, dia){
    agenda[dia].push(atv)

}

function pegarDia(dia){
    
    containerAtividades.innerHTML = '';
    
    agenda[dia].forEach((item)=>{
       
        console.log(item);
        let atividadesItens = document.createElement("div");
        let horarioContainer = document.createElement("div");
        let atividadeContainer = document.createElement("div");
        
        horarioContainer.classList.add("planner__horario-um");
        atividadeContainer.classList.add("atividades__planner");

        horarioContainer.innerHTML=item.hora;
        atividadeContainer.innerHTML=item.desc;

        containerAtividades.appendChild(atividadesItens);
        atividadesItens.appendChild(horarioContainer);
        atividadesItens.appendChild(atividadeContainer);
     })
    
}

btAdicionar.addEventListener("click", function(e){
    e.preventDefault();
   
    let descricao = atividade.value;
    let hours = horario.value;
    let dias = dia.value;

    let tarefa = {
       desc:descricao,
       hora:hours,
    }
    addAtividade(tarefa, dias);
    
})

btsegunda.addEventListener("click", function(e){
    e.preventDefault();
    let dia = e.target.id;
    diaSelecionado = dia;
    pegarDia(dia);
    
})

btexcluirTodos.addEventListener('click', function(e){
    e.preventDefault();
    agenda[diaSelecionado] = [];
    pegarDia(diaSelecionado);
})


const data = new Date();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const ano = data.getFullYear();
const mes = meses[data.getMonth()];
const diaAtual = data.getDate();
const hora = data.getHours();
const minutos = data.getMinutes();
let listaAtividade = [];
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
    document.getElementById("hora").innerHTML = zeroFill(hora) + " : " + zeroFill(minutos);
    document.getElementById("data").innerHTML = zeroFill(diaAtual) + " de " + mes + " de " + ano;
