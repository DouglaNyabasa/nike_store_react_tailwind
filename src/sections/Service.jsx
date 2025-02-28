import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'
const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service)=>(
        <ServicesCard key={service.label}
        {...service}/ >
      ))}
    </section>
  )
}

export default Service
