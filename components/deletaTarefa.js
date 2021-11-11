const deletarTarefa = (atualizar, id) => {
    const index = id

    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefaCadastradas.splice(index, 1);

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas));

    atualizar()
}

const BotaoDeletar = (atualizar, id) => {
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = 'Deletar';
    botaoDeletar.addEventListener('click', ()=> deletarTarefa(atualizar, id))

    return botaoDeletar;
}



export default BotaoDeletar;