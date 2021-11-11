const concluirTarefa = (atualizar, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas));

    atualizar()
}

const BotaoConcluir = (atualizar, id) => {
    const botaoConcluir = document.createElement('button');

    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'Concluir'
    botaoConcluir.addEventListener('click', () => concluirTarefa(atualizar, id));

    return botaoConcluir;
}



export default BotaoConcluir;