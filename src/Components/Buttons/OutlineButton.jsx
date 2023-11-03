import React from 'react'

function OutlineButton({value = "Hola mundo"}) {
  return (
    <button className="btn btn-outline w-1/3 normal-case rounded-full font-Ubuntu font-medium text-base text-White hover:bg-White hover:text-LightRed hover:border-none border-White">{value}</button>
  )
}

export default OutlineButton