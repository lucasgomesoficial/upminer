import imgTodos from '../assets/image/todos.png'
import profissional from '../assets/image/profissional.png'
import reguladores from '../assets/image/reguladores.png'
import socioambiental from '../assets/image/socio-ambiental.png'
import juridico from '../assets/image/juridico.png'
import listarestritivas from '../assets/image/listas-restritivas.png'
import midiainternet from '../assets/image/midia-internet.png'
import bensimoveis from '../assets/image/bens-imoveis.png'
import cadastro from '../assets/image/cadastro.png'
import financeiro from '../assets/image/financeiro.png'

export const useMenu = () => {
  const menu = [
    {title: 'Todos', img: imgTodos, category: ''},
    {title: 'Profissional', img: profissional, category: 'profissional'},
    {title: 'Reguladores', img: reguladores, category: 'reguladores'},
    {title: 'Sócio Ambiental', img: socioambiental, category: 'socio-ambiental'},
    {title: 'Júridico', img: juridico, category: 'juridico'},
    {title: 'Listas Restritivas', img: listarestritivas, category: 'lista-restritivas'},
    {title: 'Midia e Internet', img: midiainternet, category: 'midia-internet'},
    {title: 'Bens e Imóveis', img: bensimoveis, category: 'bens-imoveis'},
    {title: 'Cadastro', img: cadastro, category: 'cadastro'},
    {title: 'Financeiro', img: financeiro, category: 'financeiro'}
  ]

  return { menu }
}