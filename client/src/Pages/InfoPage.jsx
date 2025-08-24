import React from 'react'
import InfoCardComponent from '../components/InfoCard'
import { useParams } from 'react-router-dom'

const InfoPage = () => {
    const {id} = useParams();
  return (
    <section>
        <InfoCardComponent  id={id}/>
    </section>
  )
}

export default InfoPage