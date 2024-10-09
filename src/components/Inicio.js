import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from '../components/ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

        <h1>
          Recién iniciado en el mundo del <strong>desarrollo WEB</strong>. Entusiasta de aprender y mejorar en el día a día.
          <strong>Residente</strong> en Mallorca, pero <strong>sin límites</strong>.
        </h1>
        <h3>
          ¿Estás <strong>esperando</strong> el <strong>éxito</strong>?     No esperes y vamos a <strong>crearlo.</strong>
        <Link className='link' to ="/contacto">Logra el ÉXITO</Link>
        </h3><br/><br/><br/><br/>
        <h3>Algunos de mis trabajos:</h3>
        <ListadoTrabajos limite="2"/>
    </div>
  )
}
