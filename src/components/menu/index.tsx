import { useContext } from 'react'
import { ServiceContext } from '../../context/serviceContext'
import './styles.scss'

type menuProps = {
  element: {
    title: string,
    img: string,
    category: string
  }
}

export const Menu = ({element}: menuProps) => {
  const { setCategoryTitle } = useContext(ServiceContext)

  return (
    <button className='menu-button' onClick={() => setCategoryTitle(element.category)}>
      <img src={element.img} alt={element.title} />
      <p>{element.title}</p>
    </button>
  )
}