import React from 'react'

const Landing = (props: any) => {
  return (
      <div className='container'>
          <h1 className='text-3xl font-bold'>{props.lang.home.landing}</h1>
          <h3 className='text-3xl font-bold'>{props.lang.home.title}</h3>
          <p className='text-gray-500'>{props.lang.home.description}</p>
      </div>
  )
}

export default Landing