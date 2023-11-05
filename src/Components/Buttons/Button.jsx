import React from 'react'

function Button({value = "Hola mundo"}) {
  return (
    <button className="btn w-1/2 lg:w-1/3 bg-White normal-case rounded-full font-Ubuntu font-medium text-base text-LightRed hover:bg-opacity-20 hover:text-White hover:border-none">{value}</button>
  )
}

export default Button