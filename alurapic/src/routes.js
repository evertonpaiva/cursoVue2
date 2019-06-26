import Cadastro from './components/cadastro/Cadastro';
import Home from './components/home/Home';

export const routes = [
    { path: '', component: Home, titulo: 'Principal'},
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}
];