'use scrict';

import { elementSelector, addEventListener  } from './utils/dom.js';

// elements
const openModalBtns = elementSelector('.show-modal', true);
const closeModalBtn = elementSelector('.close-modal');
const overlay = elementSelector('.overlay');
const modal = elementSelector('.modal');

// add events to open/close modal
const openModalEventHandler = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModalEventHandler = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closeModalEscEventHandler = (event) => {
    if (event.key === "Escape") {
        closeModalEventHandler();
    }
}

openModalBtns.forEach(openModalBtn => addEventListener(openModalBtn, 'click', openModalEventHandler));
addEventListener(closeModalBtn, 'click', closeModalEventHandler);
addEventListener(overlay, 'click', closeModalEventHandler);
addEventListener(document, 'keydown', closeModalEscEventHandler);
