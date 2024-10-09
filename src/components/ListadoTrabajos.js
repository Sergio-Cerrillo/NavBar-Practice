import React from 'react'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
    <div>
      <section className="works">
      {
          trabajos.slice(0,limite).map(trabajo=>{
            return(
              <article key={trabajo.id} className="work-item">
                <div className='mask'>
                  <img src={"/images/"+trabajo.id+".png"}/>
                </div>
                <h2>{trabajo.nombre}</h2>
                <p>{trabajo.tecnologias}</p>
              </article>
            );
          })
        }
      </section>
    </div>
  )
}
