import React from 'react';

const FormUI = ({city, handleSubmit, handleChange}) => {
  return (
    <div className='primary'>
        <h1>Weather</h1>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder='Search for city, ej: Miami, London, Angeles...'
            value={city}
            onChange={(e) => handleChange(e)}
          />
          <button > Buscar</button>
        </form>

      </div>

  )
}

export default FormUI
