import { removeDatasRepetidas } from "../service/data.js";
import { criarData, ordenaDatas } from "./criaData.js";

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML =  " "
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasUnicas)

    datasUnicas.forEach((dia) => {
        const diff = data.diff(dia);

        if(diff === 0){
            lista.appendChild(criarData(dia));
        }

    });
}