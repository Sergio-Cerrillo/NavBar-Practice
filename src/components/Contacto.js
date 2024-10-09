import React from 'react'

export const Contacto = () => {
  return (
    <div className='mensaje'>
      <h3>¿Necesitas asesoramiento?</h3>
        <form className='contact' action='mailto:sergioweb@gmail.com'>
          <input type='text' placeholder='Nombre'/>
          <input type='text' placeholder='Apellidos'/>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Motivo dce contacto'/>
          <input type='submit' value="Enviar"/>
        </form>
    </div>
  )
}
