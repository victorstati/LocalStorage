import { handlenovoItem } from "./components/criaTarefa";
import { carregarTarefa } from "./components/carregaTarefa";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handlenovoItem);

carregarTarefa();

