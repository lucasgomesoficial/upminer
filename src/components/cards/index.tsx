import { Link } from "react-router-dom"

import './styles.scss'

type servicesProsp = {
  id: string,
  name: string,
  img: string,
  price: number,
  text: string,
  category: string
}

export const Cards = (props: servicesProsp) => {
  return (
    <Link to={`/${props.name}`} className='card-home'>
      <div className='card-top'>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
      <div className='card-price'>
        <p>R$ {props.price}</p>
        <span>Saiba mais</span>
      </div>
    </Link>
  )
}