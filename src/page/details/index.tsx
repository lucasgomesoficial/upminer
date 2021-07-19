import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Header } from '../../components/header';
import './styles.scss'

type paramsType = {
  category: string,
  id: string,
  name: string
}

export const Details = () => {
  const { name } = useParams<paramsType>()
  const [ enable, setEnable] = useState(true)

  const HandleButton = () => {
    enable === true
      ? toast.success(`${name} habilitado`) && setEnable(false)
      : toast.error(`${name} desabilitado`) && setEnable(true)
  }

  return (
    <div>
      <Header />
      <div className='main-details'>
        <Link to='/' className='goBack'>{'<'} {name}</Link>
        <div className='slides-details'>
          <div>
            <img src="https://i.imgur.com/lfb3czA.png" alt={name} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <img src="https://i.imgur.com/lfb3czA.png" alt={name} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <p>O serviço {name} permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento de capital,reportagens e muito mais.</p>
        <p>Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.</p>
        <div className='price-details'>
          <p><span>R$</span> 40,00</p>
          {enable === true ? <button onClick={HandleButton}>Habilitar</button> : <button id='desibled-button' onClick={HandleButton}>Desabilitar</button>}
        </div>
      </div>
    </div>
  );
}
