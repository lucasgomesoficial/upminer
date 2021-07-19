import { useContext } from 'react';
import { ServiceContext } from '../../context/serviceContext';
import { useMenu } from '../../hooks/useMenu';
import { Cards } from '../../components/cards';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';

import './styles.scss'

export const Home = () => {
  const { menu } = useMenu()
  const { filteredServices, setOrder, order } = useContext(ServiceContext)

  return (
    <>
      <Header />
      <div className='container-home'>
        <div className='menu-home'>
          {menu.map((element, index) => {
            return <Menu key={index} element={element} />
          })}
        </div>
        <div className='select-home'>
          <span>ORDENAR</span>
          <select value={order} id="" onChange={(e) => setOrder(e.target.value)}>
            <option value=''>Selecione</option>
            <option value="title">Título</option>
            <option value="price">Valor</option>
          </select>
        </div>
        <div className='cards'>
          {filteredServices.map(({id, name, img, price, text, category}) => {
            return (
              <Cards
                key={id}
                id={id}
                name={name}
                img={img}
                price={price}
                text={text}
                category={category}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}
