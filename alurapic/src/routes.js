const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

import Home from './components/home/Home';

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Principal', menu: true, ordem: 1},
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true, ordem: 2},
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
    { path: '*', component: Home, menu: false}
];