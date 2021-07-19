import { useHistory } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import logoWhite from '../../assets/image/logo-white.png'
import logoColor from '../../assets/image/logo-color.png'
import './styles.scss'

export const Header = () => {
  const history = useHistory()

  return (
    <div className='carousel-header'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-20"
            src="https://i.imgur.com/rhh8Q01.png"
            alt="First slide"
            id='web'
          />
          <img
            className="d-block w-100 h-20"
            src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette_1258-48251.jpg?size=626&ext=jpg"
            alt="First slide"
            id='mobile'
          />
          <Carousel.Caption>
            <div className='main-white-header'>
              <div className='top-header'>
                <img src={logoWhite} alt='logo' />
                <h3>Histórico Empresarial</h3>
              </div>
              <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano e fundação.</p>
              <div className='price-header'>
                <p><span>R$</span> 40,00</p>
                <button onClick={() => history.push('/Histórico Empresarial')}>Saiba mais</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-20"
            src="https://i.imgur.com/XfRqDqo.png"
            alt="Second slide"
            id='web'
          />
          <img
            className="d-block w-100 h-20"
            src="https://svferramentas.com.br/wp-content/uploads/2018/12/grey-background-07.jpg"
            alt="First slide"
            id='mobile'
          />
          <Carousel.Caption>
            <div className='main-header'>
              <div className='top-header'>
                <img src={logoColor} alt='logo' />
                <h3>Histórico Empresarial</h3>
              </div>
              <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano e fundação.</p>
              <div className='price-header'>
                <p><span>R$</span> 40,00</p>
                <button onClick={() => history.push('/Histórico Empresarial')}>Saiba mais</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}