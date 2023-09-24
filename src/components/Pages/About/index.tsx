import React from 'react'

export default async function About(props: any) {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>{props.lang.about.title}</h1>
      <p className='text-gray-500'>{props.lang.about.description}</p>
    </div>
  )
}
