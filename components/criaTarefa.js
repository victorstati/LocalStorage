import { carregarTarefa } from "./carregaTarefa";
import BotaoConcluir from "./concluiTarefa";
import BotaoDeletar from "./deletaTarefa";


export const handlenovoItem = (event) => {
    event.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const horario = data.format('HH:mm')

    const dataFormatada = data.format('DD/MM/YYYY');
    const concluida = false

    const dados = {
        valor, dataFormatada, horario, concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    carregarTarefa();
}

export const Tarefa = ({valor, horario, concluida}, id) => {

    // Criando elementos
    const tarefa = document.createElement('li');
    
    const conteudo = `<p class="content">${horario} * ${valor}</p>`;

    if(concluida){
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir(carregarTarefa(), id));
    tarefa.appendChild(BotaoDeletar(carregarTarefa(), id));
    
    return tarefa;
}