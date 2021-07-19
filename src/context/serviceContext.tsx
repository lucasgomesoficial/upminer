import { useState, createContext, useEffect, ReactNode } from 'react'
import services from '../services.json'

type ServiceContextProviderProps = {
  children: ReactNode
}

type serviceContextType = {
  setCategoryTitle: Function,
  setOrder: Function,
  order: string,
  filteredServices: []
}

type orderType = {
  id: string,
  name: string,
  img: string,
  price: number,
  text: string,
  category: string
}

export const ServiceContext = createContext({} as serviceContextType)

export const ServiceContextProvider = (props: ServiceContextProviderProps) => {
  const [ filteredServices, setFilteredServices ]: any = useState([])
  const [ categoryTitle, setCategoryTitle ] = useState('')
  const [ order, setOrder ] = useState('')

  useEffect(() => {
    if (categoryTitle === '') {
      setFilteredServices(services)
    } else {
      const newServices = services.filter(({category}) => {
        return category === categoryTitle
      })
      setFilteredServices(newServices)
    }
  }, [categoryTitle])

  useEffect(() => {
    switch (order) {
      case "price":
        filteredServices.sort((a: orderType, b: orderType) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
        break;
      case "title":
        filteredServices.sort((a: orderType, b: orderType) => {
          if (a.price < b.price) { return -1; }
          if (a.price > b.price) { return 1; }
          return 0;
        });
        break;
      default: 
        break;
    }
  }, [order])
  
  return (
    <ServiceContext.Provider value={{ setCategoryTitle, setOrder, order, filteredServices }}>
      {props.children}
    </ServiceContext.Provider>
  )
}