import { getLista , adicionaNaLista, limpaLista } from "./lista.js";

const entrada = document.querySelector("#entrada");
const adicionar = document.querySelector("#adicionar");
const limpar = document.querySelector("#limpar");
const itens = document.querySelector("#itens");

atualizarListaOrdenada();

adicionar.addEventListener('click', adicionaItemDaEntrada);
limpar.addEventListener('click', limparListaOrdenada);


function limparListaOrdenada(){
    limpaLista();
    atualizarListaOrdenada();
}

function adicionaItemDaEntrada(){
    const valor = entrada.textContent;
    adicionaNaLista(valor);
 entrada.textContent = "";
    atualizarListaOrdenada();
}

function atualizarListaOrdenada(){
    const lista = getLista();
    itens.innerHTML = "";
    for(let i = 0; i < lista.length; i++)
    {
        adicionaElementoNaListaOrdenada(lista[i]);
    }

}

function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    itens.appendChild(li);
}